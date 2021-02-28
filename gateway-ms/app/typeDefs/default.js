const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;
