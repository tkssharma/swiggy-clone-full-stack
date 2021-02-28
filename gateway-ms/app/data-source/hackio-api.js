const DataSource = require('apollo-datasource-rest').RESTDataSource;

class AuthRestAPIs extends DataSource {
  constructor() {
    super();
    this.baseURL = 'http://hackioapis:3000/';
  }
  willSendRequest(request) {
    console.log('checking..' + this.context.token);
    if (this.context.token) {
      request.headers.set('authorization', this.context.token);
    }
  }
  stacks() {
    return this.get(
      `/api/v1/stacks`, // path
    );
  }
  technologies(type) {
    return this.get(
      `api/v1/technologies/${type}`, // path
    );
  }
  addStack(payload) {
    return this.post(`api/v1/stack`, payload);
  }
  addTechnology(payload) {
    return this.post(`api/v1/technology`, payload);
  }
  fetchesCourses(technologyId) {
    return this.get(`api/v1/courses/${technologyId}`);
  }
  addCourse(payload) {
    return this.post(`api/v1/course`, payload);
  }
  favoriteCourse(technologyId, like) {
    return this.put(`api/v1/course/${technologyId}`, { like });
  }
}
module.exports = AuthRestAPIs;
