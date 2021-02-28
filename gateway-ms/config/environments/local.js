/* eslint quote-props: 0 */

const configuration = {};
configuration.db = {
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  connectTimeout: 80000,
};
configuration.logLevel = 'info';

module.exports = configuration;
