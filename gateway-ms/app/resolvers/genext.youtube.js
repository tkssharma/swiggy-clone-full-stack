const { ApolloError } = require('apollo-server');

const resolvers = {
  Query: {
    getYoutube: (parent, args, { dataSources }) => {
      return dataSources.genextAPI.getYouTube();
    },
    getFilterData: (parent, { name }, { dataSources }) => {
      return dataSources.genextAPI.getFilterYouTube(name);
    },
    getVideoData: (parent, { id }, { dataSources }) => {
      return dataSources.genextAPI.getVideoData(id);
    },
  },
};

module.exports = resolvers;
