export default `

  type Bilan {
    id: Int!
    nom: String
    soduim: String
    potassuim: String
    chlore: String
    uree: String
    creatinine: String
    calcuim: String
    calcuimCorrige: String
    phosphore: String
    magnesuim: String
    glucose: String
    albumine: String
    bilirubineT: String
    bilirubineD: String
    phosphataseAlcaline: String
    sgot: String
    sgpt: String
    ggt: String
    ldh: String
    triglyceride: String
    cholesterole: String
    ammonemie: String
    lactate: String
    amylase: String
    lipase: String
    crp: String
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
      potassuim: String,
      chlore: String,
      uree: String,
      creatinine: String,
      calcuim: String,
      calcuimCorrige: String,
      phosphore: String,
      magnesuim: String,
      glucose: String,
      albumine: String,
      bilirubineT: String,
      bilirubineD: String,
      phosphataseAlcaline: String,
      sgot: String,
      sgpt: String,
      ggt: String,
      ldh: String,
      triglyceride: String,
      cholesterole: String,
      ammonemie: String,
      lactate: String,
      amylase: String,
      lipase: String,
      crp: String,
      date: String!
    ): Boolean!
    updateBilan(id:Int!, nom: String): Bilan
    deleteBilan(id: Int!): Boolean
        
  }

`;

