export default `

  type Clinique {
    id: Int!
    text: String!
    date: String!
    medcin: Medcin
    patient: Patient
  }

  type Mutation {
    createClinique(
      patientId: Int!,
      text: String!,
      date: String!
    ): Clinique!
  }
  
`;
