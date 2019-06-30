const { makeExecutableSchema } = require("graphql-tools");
const { resolvers } = require("./resolvers");
var typeDefs = `
  type Query {
    getAliens: [Alien!]!
    getOneAlien(id: ID!): Alien!
  }
  type Mutation {
    addAlien(firstName:String!, lastName: String!, planet:String!): Alien!
    deleteAlien(id: ID!): Alien!
    createRandomAliens(number:Int!): String!
  }
  type Alien {
    id: ID!
    firstName: String!
    lastName: String!
    planet: String!
}
`;
const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = schema;
