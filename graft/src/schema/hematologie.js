export default `

  type Hematologie {
    id: Int!
    gb: String
    lymphocyte: String
    monocytes: String
    neutrophiles: String
    eosinophiles: String
    gr: String
    hb: String
    ht: String
    plaquette: String
    vgm: String
    ccmh: String
    retic: String
    tp: String
    tca: String
    inr: String
    fibrinogene: String
    facteurV: String
    antiTIII: String
    facteurXa: String
    dDimeres: String
    date: String!
    medcin: Medcin
    patient: Patient

  }

  type Mutation {
    createHematologie(
        patientId: Int!,
        gb: String,
        lymphocyte: String,
        monocytes: String,
        neutrophiles: String,
        eosinophiles: String,
        gr: String,
        hb: String,
        ht: String,
        plaquette: String,
        vgm: String,
        ccmh: String,
        retic: String,
        tp: String,
        tca: String,
        inr: String,
        fibrinogene: String,
        facteurV: String,
        antiTIII: String,
        facteurXa: String,
        dDimeres: String,
        date: String!
    ): Boolean!

    updateHematologie(id: Int!,
        gb: String,
        lymphocyte: String,
        monocytes: String,
        neutrophiles: String,
        eosinophiles: String,
        gr: String,
        hb: String,
        ht: String,
        plaquette: String,
        vgm: String,
        ccmh: String,
        retic: String,
        tp: String,
        tca: String,
        inr: String,
        fibrinogene: String,
        facteurV: String,
        antiTIII: String,
        facteurXa: String,
        dDimeres: String,
        date: String): Boolean
        
  }

`;
