const { ApolloError } = require('apollo-server');

const resolvers = {
  Query: {
    stacks: (parent, args, { dataSources }) => {
      return dataSources.hackioAPI
        .stacks()
        .then(data => data)
        .catch(error => error);
    },
    technologies: (parent, { type }, { dataSources }) => {
      return dataSources.hackioAPI
        .technologies(type)
        .then(data => data)
        .catch(error => error);
    },
  },
  Mutation: {
    addTechnology: (parent, { name, type, icon, description }, { dataSources }) => {
      const payload = { name, type, icon, description };
      return dataSources.hackioAPI
        .addTechnology(payload)
        .then(data => data)
        .catch(error => error);
    },
    addStack: (parent, { name, icon }, { dataSources }) => {
      const payload = { name, icon };
      return dataSources.hackioAPI
        .addStack(payload)
        .then(data => data)
        .catch(error => error);
    },
  },
};

module.exports = resolvers;
