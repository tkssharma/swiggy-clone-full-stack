const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    users: [User]
    user: User
    validate: Validate
    logout: Response
  }
  type Response {
    success: Boolean!
    message: String!
    description: String
    error: String
    code: String
  }
  type Validate {
    success: Boolean!
    message: String!
    description: String
  }

  extend type Mutation {
    forgotPassword(email: String!): Response!
    removeUser(id: Int!): Boolean
    register(
      first_name: String
      last_name: String
      username: String!
      email: String!
      password: String!
      country: String
    ): Response!
    login(email: String!, password: String!): Token!
  }

  type User {
    id: ID
    first_name: String
    last_name: String
    username: String!
    email: String!
    address: String
    type: String
    country: String
    uuid: String
    profile_picture: String
    phone: String
    email_verified: Boolean
    phone_verified: Boolean
    gender: String
  }
  type Token {
    token: String!
    success: Boolean!
    message: String
    description: String
    error: String
    code: String
    profile: User
  }
`;
// profile in tokne is optional
