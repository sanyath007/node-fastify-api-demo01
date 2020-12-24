const nconf = require('nconf');

const userPasswordRegex = nconf.get('userPasswordRegex');

const validatePostLogin = {
    schema: {
        body: {
            type: 'object',
            properties: {
                email: { type: 'string', format: 'email' },
                password: { type: 'string', format: 'regex', pattern: userPasswordRegex }
            },
            required: ['email', 'password']
        }
    }
};

const validatePostSignup = {
    schema: {
        body: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                email: { type: 'string', format: 'email' },
                password: {
                    type: 'string',
                    format: 'regex',
                    pattern: userPasswordRegex,
                    minLength: 6,
                    maxLength: 20
                }
            },
            required: ['name', 'email', 'password']
        }
    }
};

module.exports = {
    validatePostLogin,
    validatePostSignup
};
