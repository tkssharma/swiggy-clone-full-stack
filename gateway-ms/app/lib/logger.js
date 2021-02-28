const log = require('loglevel');

log.setLevel(global.configuration.logLevel);
const logger = log;
// logger.log = (msg) => {}; /** uncomment to prevent spamming terminal with sql queries */
module.exports = logger;
