const { default: fastify } = require('fastify');
const { getUsers } = require('../controllers/userController');

module.exports = async (fastify) => {
    fastify.get('/users', { preHandler: [fastify.auth] },  getUsers);
}