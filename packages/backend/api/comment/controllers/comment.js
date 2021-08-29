"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      data.user = ctx.state.user.id;
      entity = await strapi.services.comment.create(data, { files });
    } else {
    console.log(ctx.request.body)
      let body = {
        feed: ctx.request.body.feed,
        comment: ctx.request.body.comment,
        user : ctx.state.user.id
      };
      entity = await strapi.services.comment.create(body);
    }
    return sanitizeEntity(entity, { model: strapi.models.comment });
  },
};
