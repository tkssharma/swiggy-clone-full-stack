const DataSource = require('apollo-datasource-rest').RESTDataSource;
const { ApolloServer, AuthenticationError, ForbiddenError, UserInputError } = require('apollo-server');

class AuthRestAPIs extends DataSource {
  constructor() {
    super();
    this.baseURL = 'http://auth:3000/auth/';
  }
  willSendRequest(request) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }

  async getUser() {
    return this.get(
      `user`, // path
    );
  }
  async forgotPassword(email) {
    try {
      const data = await this.get(
        `forgot-password/${email}`, // path
      );
      return data;
    } catch (e) {
      console.log(e);
      const body = e.extensions && e.extensions.response && e.extensions.response.body;
      throw new UserInputError((body && body.message) || 'User account does not exist', 401, { test: true });
    }
  }
  async login(payload) {
    try {
      const data = await this.post(
        `login`, // path
        payload, // request body
      );
      return data;
    } catch (e) {
      console.log(e);
      const body = e.extensions && e.extensions.response && e.extensions.response.body;
      throw new AuthenticationError((body && body.message) || 'error occured', 401, { test: true });
    }
  }
  // an example making an HTTP PATCH request
  async register(payload) {
    try {
      const data = await this.post(
        `register`, // path
        payload, // request body
      );
      return data;
    } catch (e) {
      console.log(e);
      const body = e.extensions && e.extensions.response && e.extensions.response.body;
      throw new AuthenticationError((body && body.message) || 'Error occured while Regustration', 401, { test: true });
    }
  }
  // an example making an HTTP PATCH request
  async validate() {
    try {
      const data = await this.get(
        `validate`, // path
      );
      return data;
    } catch (e) {
      console.log(e);
      const body = e.extensions && e.extensions.response && e.extensions.response.body;
      throw new AuthenticationError((body && body.message) || 'Token is Invalid', 401, { test: true });
    }
  }
  async logout() {
    try {
      const data = await this.get(
        `logout`, // path
      );
      return data;
    } catch (e) {
      console.log(e);
      const body = e.extensions && e.extensions.response && e.extensions.response.body;
      throw new AuthenticationError((body && body.message) || 'unable to trigger logout', 401, { test: true });
    }
  }
}
module.exports = AuthRestAPIs;
