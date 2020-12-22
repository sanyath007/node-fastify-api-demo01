const Fastify = require('fastify');
const path = require('path');
const AutoLoad = require('fastify-autoload');
const uuid = require('uuid');

/** create request ids */
const createRequestId = () => uuid();

/** create the server */
const server = Fastify({
    ignoreTrailingSlash: true,
    logger: {
        genReqId: createRequestId,
        level: 'info'
    }
});

/** 
 * the following line is going to be removed in favor of
 * simple multiple provided by fastify-autoload
*/

server.get('/', async (request, reply) => {
    return { hello: "World" };
});

server.listen(3001, err => {
    if(err) {
        server.log.error(err);
        console.log(err);
        process.exit(1);
    }

    server.log.info('Server Started');
});