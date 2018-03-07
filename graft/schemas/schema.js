const { makeExecutableSchema } = require('graphql-tools');
const Query = require('../resolvers/Query');
const Mutation = require('../resolvers/Mutation');


 const resolvers = {
    Query,
    Mutation
} 

const typeDefs = [`
     scalar Date

    type Medcin {
        id: Int!
        firstName: String
        lastName: String
        sexe: String
        dateDeNaissance: String       
        specialty: String!
        email: String!
        password: String!
        createdAt: String
        updatedAt: String
    }
    type Query {
        allMedcins: [Medcin]
        medcin(id: Int!): Medcin
    }

    type Mutation {
        createMedcin(firstName: String!, lastName: String!, dateDeNaissance: String, sexe: String, specialty: String!, email: String!, password: String!): Medcin!
        updateMedcin(id:Int!, firstName: String, lastName: String, dateDeNaissance: String, sexe: String, specialty: String, email: String, password: String): Medcin
        deleteMedcin(id:Int!):Medcin
    }
`];

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;