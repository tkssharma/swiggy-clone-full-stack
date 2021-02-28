const DataSource = require('apollo-datasource-rest').RESTDataSource;

class FinderRestAPIs extends DataSource {
  constructor() {
    super();
    this.baseURL = 'http://movies-api.example.com/';
  }

  async postMovie(movie) {
    return this.post(
      `movies`, // path
      movie, // request body
    );
  }

  // an example making an HTTP PUT request
  async newMovie(movie) {
    return this.put(
      `movies`, // path
      movie, // request body
    );
  }

  // an example making an HTTP PATCH request
  async updateMovie(movie) {
    return this.patch(
      `movies`, // path
      { id: movie.id, movie }, // request body
    );
  }

  // an example making an HTTP DELETE request
  async deleteMovie(movie) {
    return this.delete(
      `movies/${movie.id}`, // path
    );
  }
}
module.exports = FinderRestAPIs;
