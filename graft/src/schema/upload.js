export default `

  type Upload {
    id: Int!
    title: String
    description: String
    file: String
    date: String
    medcin: Medcin
    patient: Patient
  }

  type Mutation {
    uploadFile(patientId: Int!,
      title: String,
      description: String,
      file: String!,
      date: String!
    ): Upload
  }
`;
