const { default: fastify } = require('fastify');
const { postLogin, postSignup } = require('../controllers/authController');
const { validatePostLogin, validatePostSignup } = require('../validations/auth');

module.exports = async (fastify) => {
    fastify.post('/auth/login', validatePostLogin, postLogin);
    fastify.post('/auth/signup', validatePostSignup, postSignup);
};
