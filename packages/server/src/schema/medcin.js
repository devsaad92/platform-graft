export default `

  type Medcin {
    id: Int!
    firstName: String
    lastName: String
    sexe: String
    dateDeNaissance: String       
    specialty: String!
    email: String!
    roleId: Int
    admin: Boolean!
    isAuthorize: Boolean!
    patients: [Patient]
  }

  type Query {
    allMedcins: [Medcin!]!
    medcinQuery(id: Int!): Medcin!
  }
  type userToken {
    ok: Boolean!
    token: String
    refreshToken: String
  }

  type Mutation {
    createMedcin(firstName: String!, lastName: String!, dateDeNaissance: String, sexe: String, specialty: String!, email: String!, password: String!): Medcin!
    updateMedcin(id:Int!, firstName: String, lastName: String, dateDeNaissance: String, sexe: String, specialty: String, email: String, roleId: Int): Int
    deleteMedcin(id:Int!): Medcin
    login(email: String!, password: String!): userToken!
    forgetPassword(email: String!): Medcin
    resetPassword(email: String!, newPassword: String!): Boolean
  }

  type Subscription {
    medcinAdded: Medcin
  }

`;

