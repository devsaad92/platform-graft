export default `

  type Bilan {
    id: Int!
    nom: String
    soduim: String
    crp: String
    magnesuim: String
    glucose: String
    ggt: String
    potassuim: String
    uree: String
    calcuim: String
    ldh: String
    sgpt: String
    albumine: String
    lipase: String
    date: String!
    medcin: Medcin
    patient: Patient

  }

  type Query {
    allBilans: [Bilan!]!
    getBilan(id: Int!): Bilan!
  }

  type Mutation {
    createBilan(
      patientId: Int!,
      nom: String,
      soduim: String,
      crp: String,
      magnesuim: String,
      glucose: String,
      ggt: String,
      potassuim: String,
      uree: String,
      calcuim: String,
      ldh: String,
      sgpt: String,
      albumine: String,
      lipase: String,
      date: String!
    ): Boolean!

    updateBilan(id: Int!, 
      soduim: String,
      crp: String,
      magnesuim: String,
      glucose: String,
      ggt: String,
      potassuim: String,
      uree: String,
      calcuim: String,
      ldh: String,
      sgpt: String,
      albumine: String,
      lipase: String): Boolean

    deleteBilan(id: Int!): Boolean
        
  }

`;

