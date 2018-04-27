export default `

  type Information {
    id: Int!
    Temp: String
    FC: String
    FR: String
    PA: String
    SaO2: String
    date: String!
    medcin: Medcin
    patient: Patient
  }

  type Mutation {
    createInformation(
      patientId: Int!,
      Temp: String
      FC: String,
      FR: String,
      PA: String,
      SaO2: String,
      date: String!
    ): Information
  }

`;
