"use strict";
const { nextSaturday } = require("date-fns");
const _ = require("lodash");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;
    console.log("here");
    let user = ctx.state.user;
    let body = {
      from: user.id,
      to: ctx.request.body.to,
      marked: false,
      info: "",
      status: null,
    };
    let old = await strapi.services["friend-request"].find({
      from: user.id,
      to: ctx.request.body.to,
    });
    console.log(old[0].id);
    if (old) {
      entity = await strapi.services["friend-request"].update(
        { id: old[0].id },
        body
      );
    } else {
      entity = await strapi.services["friend-request"].create(body);
    }
    entity = _.omit(entity, ["from", "to", "updated_by", "created_by"]);
    return entity;
  },

  async find(ctx) {
    let user = ctx.state.user;
    let pending = await strapi.services["friend-request"].find({
      _where: { _or: [{ from: user.id }, { to: user.id }] },
      marked: false,
    });
    let response = [];
    console.log(pending);
    pending.map((entity) => {
      let from = {
        firstName: entity.from.firstName,
        lastName: entity.from.lastName,
        media: entity.from.profilePic,
        friends: entity.from.friends,
        city: entity.city,
        id: entity.from.id,
      };
      let to = {
        firstName: entity.to.firstName,
        lastName: entity.to.lastName,
        id: entity.to.id,
        media: entity.to.profilePic,
        friends: entity.to.friends,
      };
      if (entity.from.id == user.id) {
        entity.fromMe = true;
        entity.toMe = false;
      } else {
        entity.fromMe = false;
        entity.toMe = true;
      }
      entity.from = from;
      entity.to = to;
      entity = _.omit(entity, ["updated_by", "created_by"]);
      response.push(entity);
    });

    let friends = await strapi
      .query("user", "users-permissions")
      .findOne({ id: user.id });

    let myList = [];
    friends.friends.map((entity) => {
      let friend = {
        firstName: entity.firstName,
        lastName: entity.lastName,
        infoStatus: entity.infoStatus,
        media: entity.profilePic,
        friends: entity.friends,
        city: entity.city,
        id: entity.id,
      };

      myList.push(friend);
    });
    return {
      openRequest: response,
      friendList: myList,
    };
  },

  async near(ctx) {
    let myList = [];

    let friends = await strapi
      .query("user", "users-permissions")
      .find({ city: ctx.state.user.city });
    console.log(friends);
    friends.map((entity) => {
      if (entity.id !== ctx.state.user.id) {
        let f = [];
        entity.friends.map((g) => {
          f.push(g.id);
        });

        let friend = {
          firstName: entity.firstName,
          lastName: entity.lastName,
          infoStatus: entity.infoStatus,
          id: entity.id,
          city: entity.city,
          media: entity.profilePic,
          friends: f,
        };
        if (_.includes(friend.friends, ctx.state.user.id)) {
        } else {
          myList.push(friend);
        }
      }
    });

    let myfriends = [];
    let fof = [];
    let friendsOfFriends = await strapi
      .query("user", "users-permissions")
      .findOne({ id: ctx.state.user.id }, [
        {
          path: "friends",
          populate: {
            path: "friends",
          },
        },
      ]);

    friendsOfFriends.friends.map((entity) => {
      myfriends.push(entity);
    });
    friendsOfFriends.friends.map((entity) => {
      entity.friends.forEach((f) => {
        if (_.includes(f.friends, ctx.state.user.id) || f.id == ctx.state.id) {
        } else {
          fof.push({
            firstName: f.firstName,
            lastName: f.lastName,
            infoStatus: f.infoStatus,
            id: f.id,
            friends: f.friends,
          });
        }
      });
    });

    return {
      nearby: myList,
      fof: fof,
    };
  },

  async confirmFR(ctx) {
    let user = ctx.state.user;
    let response = {
      success: false,
      request: {},
      message: [],
    };
    let friendRequest = await strapi.services["friend-request"].findOne({
      id: ctx.request.body.id,
    });

    if (friendRequest) {
      let requestUsers = [];
      requestUsers.push(friendRequest.from.id);
      requestUsers.push(friendRequest.to.id);
      let isValidUser = _.includes(requestUsers, user.id);

      if (isValidUser) {
        let body = {
          marked: true,
          info: `request is ${ctx.request.body.status}ed`,
          status: ctx.request.body.status,
        };
        if (ctx.request.body.status == "accept") {
          if (user.id == friendRequest.from.id) {
            console.log("here1");
            response.message.push("you can not accept this request");
          } else {
            let fromUser = await strapi
              .query("user", "users-permissions")
              .findOne({ id: friendRequest.from.id });
            let toUser = await strapi
              .query("user", "users-permissions")
              .findOne({ id: friendRequest.to.id });

            await strapi
              .query("user", "users-permissions")
              .update(
                { id: friendRequest.from.id },
                { friends: [...fromUser.friends, friendRequest.to.id] }
              );

            await strapi
              .query("user", "users-permissions")
              .update(
                { id: friendRequest.to.id },
                { friends: [...toUser.friends, friendRequest.from.id] }
              );

            let entity = await strapi.services["friend-request"].update(
              { id: friendRequest.id },
              body
            );

            let from = {
              firstName: entity.from.firstName,
              lastName: entity.from.lastName,
              id: entity.from.id,
            };
            let to = {
              firstName: entity.to.firstName,
              lastName: entity.to.lastName,
              id: entity.to.id,
            };
            entity.from = from;
            entity.to = to;

            response.request = _.omit(entity, ["updated_by", "created_by"]);
            response.success = true;
            // TODO :: Send notifications of friend request approval
          }
        } else {
          response.request = await strapi.services["friend-request"].delete({
            id: friendRequest.id,
          });
        }
      } else {
        response.message.push("you are not valid to operate this request");
      }
    } else {
      response.message.push("Request not found");
    }

    return response;
  },
};
