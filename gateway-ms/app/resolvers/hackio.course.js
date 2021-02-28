const { ApolloError } = require('apollo-server');

const resolvers = {
  Query: {
    coursesforTechnology: (parent, { technologyId }, { dataSources }) => {
      return dataSources.hackioAPI
        .fetchesCourses(technologyId)
        .then(data => data)
        .catch(error => error);
    },
  },
  Mutation: {
    addCourse: (
      parent,
      { name, icon, type, description, technologyId, shortDescription, audience, mediaType, subCategory },
      { dataSources },
    ) => {
      const payload = {
        name,
        icon,
        type,
        description,
        technologyId,
        shortDescription,
        audience,
        mediaType,
        subCategory,
      };
      return dataSources.hackioAPI
        .addCourse(payload)
        .then(data => data)
        .catch(error => error);
    },
    favoriteCourse: (parent, { technologyId, like }, { dataSources }) => {
      const payload = { name, icon };
      return dataSources.hackioAPI
        .favoriteCourse(technologyId, like)
        .then(data => data)
        .catch(error => error);
    },
  },
};

module.exports = resolvers;
