const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int!
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: String!
    user: User
  }

  input SaveBookInput {
    bookId: String!
    bookAuthors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  input AddUserInput {
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(input: LoginInput!): Auth
    addUser(input: AddUserInput!): Auth
    saveBook(input: SaveBookInput!): User
    removeBook(bookId: String!): User
  }
`;
