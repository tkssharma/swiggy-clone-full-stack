const { ApolloError } = require('apollo-server');

const jwt = require('jsonwebtoken');

const createToken = (user, secret, expiresIn) => {
  const { id, name, username, photo } = user;
  return jwt.sign({ id, name, username, photo }, secret, { expiresIn });
};
const resolvers = {
  Query: {
    users: (parent, args, { dataSources }) => {
      return null;
    },
    user: (parent, args, { dataSources }) => {
      return dataSources.authAPI.getUser();
    },
    validate: (parent, args, { dataSources }) => {
      return dataSources.authAPI.validate();
    },
    logout: (parent, args, { dataSources }) => {
      return dataSources.authAPI.logout();
    },
  },
  Mutation: {
    forgotPassword: (parent, { email }, { dataSources }) => {
      return dataSources.authAPI.forgotPassword(email);
    },
    // eslint-disable-next-line camelcase
    register: (parent, { name, first_name, last_name, username, email, password }, { dataSources }) => {
      const user = {
        name,
        first_name,
        last_name,
        email,
        username,
        password,
      };
      return dataSources.authAPI.register(user);
    },
    login: (parent, { email, password }, { dataSources }) => {
      const authPayload = {
        email,
        password,
      };
      return dataSources.authAPI.login(authPayload);
    },
  },
};

module.exports = resolvers;
