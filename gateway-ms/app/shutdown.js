const logger = require('./lib/logger');
/* eslint import/no-unresolved:0 */

/**
 * Take care of clean exit of current server instance
 * @param {Number} exitCode
 */
function shutdown(exitCode = 0) {
  logger.info('shutdown started');
  // appInstance.server.close();
  if (process.env.NODE_ENV === 'test') {
    return console.error('<<<<<<<<<<<<<<<<<<<<<🤬👆👆👆👆👆🤬>>>>>>>>>>>>>>>>>>>>');
  }
  if (global.connection) {
    global.connection.end(() => {
      logger.info('DB shutdown ...something wrong');
      return process.exit(exitCode);
    });
  }
  return process.exit(exitCode);
}

/**
 * Handles uncaughtException
 * @param {Error} err
 */
function onError(error) {
  /** Hide stack trace for known errors */
  console.error('uncaught exception thrown..');
  console.error(error.ErrorID !== 1 ? error : error.message);
  shutdown(1);
}

/**
 *Handles unhandledRejection from aync function and Promise
 * @param {Error} reason
 * @param {Promise} promise
 */
function unhandledRejection(reason, promise) {
  logger.error('Uncaught Exception thrown at', promise);
  logger.error(reason);
  shutdown(1);
}

module.exports = {
  shutdown,
  unhandledRejection,
  onError,
};
