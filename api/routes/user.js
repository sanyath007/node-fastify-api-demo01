const { default: fastify } = require('fastify');
const { getUsers } = require('../controllers/userController');

module.exports = async (fastify) => {
    fastify.get('/users', getUsers);
}