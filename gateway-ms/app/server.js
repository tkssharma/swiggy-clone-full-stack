global.env = process.env.NODE_ENV;
global.configuration = require(`../config/environments/${global.env}`);
const logger = require('./lib/logger');
const express = require('express');
const UUID = require('uuid').v4;
const AuthRestAPIs = require('./data-source/auth-api');
const GenNextAPIs = require('./data-source/gennext-api');
const HackIORestAPIs = require('./data-source/hackio-api');
const ApolloError = require('apollo-server-express').ApolloError;
const app = express();
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const ErrorHandler = require('./shutdown');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    token: req.headers.authorization,
  }),
  dataSources: () => ({
    authAPI: new AuthRestAPIs(),
    hackioAPI: new HackIORestAPIs(),
    genextAPI: new GenNextAPIs(),
  }),
});
server.applyMiddleware({ app });

if (!module.parent) {
  // global.connection = connection;
  app.listen({ port: process.env.PORT || 3000 }, () =>
    // eslint-disable-next-line no-console
    logger.info(`🚀 🚀 🚀 🚀  Server ready at http://localhost:3000${server.graphqlPath} 🚀 🚀 🚀 `),
  );
}
// Do graceful shutdown on Ctrl + C or PM2 Restart
process.on('SIGINT', ErrorHandler.shutdown);
// Recover server from Any other errors
process.on('unhandledRejection', ErrorHandler.unhandledRejection);
process.on('uncaughtException', ErrorHandler.onError);
