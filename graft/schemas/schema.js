const { makeExecutableSchema } = require('graphql-tools');
const Query = require('../resolvers/Query');
const Mutation = require('../resolvers/Mutation');
import { newMedcin as Subscription } from '../resolvers/Subscription'


 const resolvers = {
    Query,
    Mutation,
    Subscription
} 

const typeDefs = [`
    

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
        allMedcins: [Medcin!]!
        medcinQuery(id: Int!): Medcin!
    }

    type Mutation {
        createMedcin(firstName: String!, lastName: String!, dateDeNaissance: String, sexe: String, specialty: String!, email: String!, password: String!): Medcin!
        updateMedcin(id:Int!, firstName: String, lastName: String, dateDeNaissance: String, sexe: String, specialty: String, email: String, password: String): Medcin
        deleteMedcin(id:Int!):Medcin
    }

    type Subscription {
        newMedcin: Medcin!
    }
`];

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;