"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
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
      response.request = await strapi.services["event-interested"].create(
        data,
        {
          files,
        }
      );
      response.success = true;
    } else {
      response.request = await strapi.services["event-interested"].create({
        ...ctx.request.body,
        postedBy: ctx.state.user,
      });
    }
    return sanitizeEntity(entity, { model: strapi.models["event-interested"] });
  },

  async update(ctx) {
    const { id } = ctx.params;
    let response = {
      success: false,
      request: {},
      message: [],
    };
    let entity;
    let oEntity = await strapi.services["event-interested"].findOne({ id });
    if (oEntity) {
      if (oEntity.user.id == user.id) {
        if (ctx.request.body.action == "interested") {
          response.request = await strapi.services["event-interested"].update(
            { id },
            ctx.request.body
          );
        } else {
          response.request = await strapi.services["event-interested"].delete({
            id,
          });
        }
      } else {
        response.message.push("you are not valid to operate this request");
      }
    } else {
      response.message.push("req not found");
    }

    return sanitizeEntity(entity, { model: strapi.models["event-interested"] });
  },
};
