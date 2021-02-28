const userSchema = require('./user');
const gennextYouTubeSchema = require('./gennext.youtube');
const hackIOCourseSchema = require('./hackio.course');
const hackIOTechSchema = require('./hackio.technology');

const defaultSchema = require('./default');

module.exports = [defaultSchema, userSchema, gennextYouTubeSchema, hackIOCourseSchema, hackIOTechSchema];
