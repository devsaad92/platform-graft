export default `

  type Clinique {
    id: Int!
    text: String!
    date: String!
    medcin: Medcin
    patient: Patient
  }
  type Query {
    cliniques(patientId: Int!): [Clinique!]!
  }

  type Mutation {
    createClinique(
      patientId: Int!,
      text: String!,
      date: String!
    ): Clinique!
  }

  type Subscription {
    newMessageClinique: Clinique!
  }

`;
