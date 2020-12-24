const Fastify = require('fastify');
const path = require('path');
const AutoLoad = require('fastify-autoload');
const uuid = require('uuid');
const nconf = require('nconf');
const jwt = require('fastify-jwt');

/** create request ids */
const createRequestId = () => uuid();

const createServer = options => {
    const { logServerity } = options;

    /** create the server instance */
    const server = Fastify({
        ignoreTrailingSlash: true,
        logger: {
            genReqId: createRequestId,
            level: 'info'
        }
    });

    /** register the plugins, routes in this case */
    server.register(AutoLoad, {
        dir: path.join(__dirname, 'api', 'routes')
    });

    server.register(jwt, {
        secret: nconf.get('secrets.jwt')
    });

    /** start the server */
    server.listen(3001, err => {
        if(err) {
            server.log.error(err);
            console.log(err);
            process.exit(1);
        }

        server.log.info('Server Started');
    });
}

module.exports = {
    createServer
}
