const nconf = require('nconf');
const server = require('./server');
const { loadSettings } = require('./config/configurationAdator');
const appSettingsPath = process.env.APP_SETTINGS_FILE_PATH;
console.log(appSettingsPath);

loadSettings({ appSettingsPath })
    .then(() => {
        //TODO: Connect to db, if any

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
    