"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    let entity;

    entity = await strapi.query("feed").find(ctx.query, [
      {
        path: "comments",
        populate: {
          path: "user",
        },
      },
      {
        path: "postedBy",
      },
      {
        path: "likes",
      },
    ]);

    return sanitizeEntity(entity, { model: strapi.models.feed });
  },
  async create(ctx) {
    let response = {
      success: false,
      request: {},
      message: [],
    };
    let entity;

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      data.postedBy = ctx.state.user.id;
      response.request = await strapi.services.feed.create(data, {
        files,
      });
      response.success = true;
    } else {
      response.request = await strapi.services.feed.create({
        ...ctx.request.body,
        postedBy: ctx.state.user,
      });
      response.success = true;
    }
    return sanitizeEntity(response, { model: strapi.models.feed });
  },

  async update(ctx) {
    const { id } = ctx.params;
    let user = ctx.state.user;
    let response = {
      success: false,
      request: {},
      message: [],
    };
    let entity;
    let oEntity = await strapi.services.feed.findOne({ id });
    if (oEntity) {
      if (oEntity.postedBy.id == user.id) {
        if (ctx.is("multipart")) {
          const { data, files } = parseMultipartData(ctx);
          response.request = await strapi.services.feed.update({ id }, data, {
            files,
          });
          response.success = true;
        } else {
          response.request = await strapi.services.feed.update(
            { id },
            ctx.request.body
          );
        }
      } else {
        response.message.push("you are not valid to operate this request");
      }
    } else {
      response.message.push("feed not found");
    }

    return sanitizeEntity(entity, { model: strapi.models.feed });
  },

  async delete(ctx) {
    let user = ctx.state.user;
    const { id } = ctx.params;
    let response = {
      success: false,
      request: {},
      message: [],
    };
    let entity;
    entity = await strapi.services.feed.findOne({ id });
    if (entity) {
      if (entity.postedBy.id == user.id) {
        response.request = await strapi.services.feed.delete({
          id: friendRequest.id,
        });
        response.success = true;
      } else {
        response.message.push("you are not valid to operate this request");
      }
    } else {
      response.message.push("feed not found");
    }

    return response;
  },
};
