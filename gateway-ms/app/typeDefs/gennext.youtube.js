const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    getYoutube: YouTubeData
    getFilterData(name: String): YouTubeData
    getVideoData(id: String): VideoData
  }
  type VideoData {
    data: YouTube
    success: Boolean!
    message: String
    description: String
    error: String
    code: String
  }
  type YouTubeData {
    data: [YouTube]
    success: Boolean!
    message: String
    description: String
    error: String
    code: String
  }
  type YouTube {
    _id: String!
    id: String
    kind: String
    etag: String
    snippet: Snippet
  }
  type Snippet {
    channelTitle: String
    thumbnails: Thumbnails
    description: String
    title: String
    channelId: String
    publishedAt: String
  }
  type Thumbnails {
    standard: Standard
  }
  type Standard {
    height: String
    width: String
    url: String
  }
`;
