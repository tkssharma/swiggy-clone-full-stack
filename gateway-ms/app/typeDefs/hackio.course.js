const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    coursesforTechnology(technologyId: String!): CourseResponse!
  }
  extend type Mutation {
    addCourse(name: String!, type: String!, description: String!,
      technologyId: String!, icon: String, mediaType: String!,
     shortDescription: String, audience : String! ): Response!
    favoriteCourse(technologyId: String!, like: Boolean!): Response!
  }
  type CourseResponse {
    code: String!
    message: String!
    success: Boolean!
    data: [Course]
  }
  type Course {
    name: String!
    icon: String!
    type: String!
    description: String!
    technologyId: String!
    shortDescription: String
    audience: String
    mediaType: String
    subCategory: [String]
  }
`;
