const nconf = require('nconf');
const server = require('./server');
const { loadSettings } = require('./config/configurationAdator');
const { connectMongo } = require('./api/db/db');

const appSettingsPath = process.env.APP_SETTINGS_FILE_PATH;

loadSettings({ appSettingsPath })
    .then(() => {
        /** Connect to db */
        const mongoURI = nconf.get('db.mongodb.uri');
        connectMongo(mongoURI);

        /** Read the config property require for starting the server */
        const serverOptions = {
            logServerity: nconf.get('logServerity'),
        };

        server.createServer(serverOptions);

        //TODO: Start the server
    })
    .catch(err => {
        console.log(err);
    });
    