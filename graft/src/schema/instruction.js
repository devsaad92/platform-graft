export default `

  type Instruction {
    id: Int!
    text: String!
    date: String!
    medcin: Medcin
    patient: Patient
  }

  type Mutation {
    createInstruction(
      patientId: Int!,
      text: String!,
      date: String!
    ): Instruction!
  }

`;
