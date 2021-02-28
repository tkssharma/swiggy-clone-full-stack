const userResolvers = require('./user');
const hackIOCourseResolvers = require('./hackio.course');
const hackIOTechResolvers = require('./hackio.tech');
const gennextYouTubeResolvers = require('./genext.youtube');
module.exports = [userResolvers, gennextYouTubeResolvers, hackIOCourseResolvers, hackIOTechResolvers];
