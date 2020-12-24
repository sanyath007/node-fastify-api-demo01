const { fastify } = require("fastify");

const { getUsers } = require('../controllers/userController');
const { postLogin, postSignup } = require('../controllers/authController');
const { validatePostLogin, validatePostSignup } = require('../validations/auth');

module.exports = async (fastify, options) => {
    fastify.get('/', async (request, reply) => {
        return { hello: "World" };
    });

    fastify.post('/auth/login', validatePostLogin, postLogin);
    fastify.post('/auth/signup', validatePostSignup, postSignup);

    fastify.get('/users', getUsers);
}
