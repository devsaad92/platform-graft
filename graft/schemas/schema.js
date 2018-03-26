import { makeExecutableSchema } from 'graphql-tools'
import  Query from '../resolvers/Query'
import  Mutation from '../resolvers/Mutation'
import { medcinAdded as Subscription } from '../resolvers/Subscription'


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
    }
    type Query {
        allMedcins: [Medcin!]!
        medcinQuery(id: Int!): Medcin!
    }
    type userToken {
        token: String!
    }

    type Mutation {
        createMedcin(firstName: String!, lastName: String!, dateDeNaissance: String, sexe: String, specialty: String!, email: String!, password: String!): Medcin!
        updateMedcin(id:Int!, firstName: String, lastName: String, dateDeNaissance: String, sexe: String, specialty: String, email: String): Medcin
        deleteMedcin(id:Int!):Medcin
        login(email: String!, password: String!): userToken!
    }

    type Subscription {
        medcinAdded: Medcin
    }
`];

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;