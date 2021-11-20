import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    tweets: [Tweet]
    avatar: String
  }
  type Tweet {
    _id: ID
    parentTweet: Tweet
    user: User!
    text: String!
    title: String!
    tweets: [Tweet]
    # likes: Number
  }
  type Query {
    getUsers: [User]!
    getTweets: [Tweet]
    getUserTweets(user: ID!): [Tweet]
  }

  type Mutation {
    createTweet(
      user: ID!
      text: String!
      title: String!
      parentTweet: ID
    ): Tweet!
    createUser(username: String!, email: String!, password: String!): User!
  }
`;
