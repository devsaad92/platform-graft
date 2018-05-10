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

  input File {
    type: String!,
    path: String!,
  }

  type Mutation {
    uploadFile(patientId: Int!,
      title: String,
      description: String,
      file: File,
      date: String!
    ): Boolean!
  }
`;
