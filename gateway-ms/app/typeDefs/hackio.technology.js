const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    technologies(type: String!): TechResponse!
    stacks: StackResponse!
  }
  extend type Mutation {
    addTechnology(name: String!, type: String!, description: String!, icon: String!): Response!
    addStack(name: String!, icon: String!): Response!
  }
  type TechResponse {
    code: String!
    message: String!
    success: Boolean!
    data: [Technology]
  }
  type StackResponse {
    code: String!
    message: String!
    success: Boolean!
    data: [Stacks]
  }
  type Stacks {
    name : String!
    icon: String!
    data: [Technology]
  }
  type Technology {
    _id: String!
    name: String!
    icon: String!
    description: String
    type: String!
    category: String
  }
`;
