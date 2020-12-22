const { default: fastify } = require("fastify");

module.exports = async (fastify, options) => {
    fastify.get('/', async (request, reply) => {
        return { hello: "World" };
    });
}
