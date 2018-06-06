export default `

  type Instruction {
    id: Int!
    text: String!
    date: String!
    medcin: Medcin
    patient: Patient
  }

  type Query {
    instructions(patientId: Int!): [Instruction!]!
  }

  type Mutation {
    createInstruction(
      patientId: Int!,
      text: String!,
      date: String!
    ): Instruction!
  }

  type Subscription {
    newMessageInstruction: Instruction!
  }

`;
