const DataSource = require('apollo-datasource-rest').RESTDataSource;
const { ApolloServer, AuthenticationError, ForbiddenError } = require('apollo-server');

class GenNextAPIs extends DataSource {
  constructor() {
    super();
    this.baseURL = 'http://apis:3000/api/';
  }
  willSendRequest(request) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }
  async getYouTube() {
    return this.get(
      `youtube`, // path
    );
  }
  async getFilterYouTube(name) {
    return this.get(
      `youtube/${name}`, // path
    );
  }
  async getVideoData(id) {
    return this.get(
      `video/${id}`, // path
    );
  }
}
module.exports = GenNextAPIs;
