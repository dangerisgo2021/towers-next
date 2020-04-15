const { gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
exports.typeDefs = gql`

  input Range {
    start: Int
    end: Int
  }
  
  type Query {
    hello: String
    messages: [String!]!
  }

  type Mutation {
    addMessage(message: String!): [String!]!
  }

  type Subscription {
    newMessage: String!
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;