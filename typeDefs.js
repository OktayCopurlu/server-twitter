import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    tweets: [Tweet]
    image: String
    likesTweet: [Tweet]
  }
  type Tweet {
    _id: ID
    user: User!
    text: String!
    title: String!
    images: [String]
    likes: Int
    likedUser: [User]
  }
  type Query {
    getUsers: [User]!
    getTweets: [Tweet]
    getUserTweets(user: ID!): [Tweet]
    deleteTweet(_id: ID): [Tweet]
  }

  type Mutation {
    createTweet(
      user: ID!
      text: String!
      title: String!
      images: [String]
    ): Tweet!
    createUser(
      username: String!
      email: String!
      password: String!
      image: String
    ): User!
    addLike(_id: ID!, likes: Int, likedUser: ID): Tweet!
  }
`;
