const { default: fastify } = require("fastify");

const { getUsersCtrl } = require('../controllers/userController');

module.exports = async (fastify, options) => {
    fastify.get('/', async (request, reply) => {
        return { hello: "World" };
    });

    fastify.get('/users', getUsersCtrl);
}
