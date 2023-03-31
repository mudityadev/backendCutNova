'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({

    async create(ctx) {
        const postman = ctx.request.body;
        console.log(postman);


    }



}));
