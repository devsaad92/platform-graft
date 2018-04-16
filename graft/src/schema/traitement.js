export default `

  type Traitement {
    id: Int!
    text: String!
    date: String!
    medcin: Medcin
    patient: Patient
  }

  type Mutation {
    createTraitement(
      patientId: Int!,
      text: String!,
      date: String!
    ): Traitement!
  }
`;
