export default `

  type Patient {
    id: Int!
    firstName: String!
    lastName: String!
    sexe: String!
    dateDeNaissance: String!    
    dateDeGreffe: String
    medcins: [Medcin]
    members: [Medcin]
    cliniques: [Clinique]
    instructions: [Instruction]
    traitements: [Traitement]
    informations: [Information]
    bilans: [Bilan]
    hematologies: [Hematologie]
    uploads: [Upload]
  }

  type Query {
    allPatients: [Patient!]!
    getPatient(id: Int!): Patient!
  }

  type Mutation {
    createPatient(
      firstName: String!,
      lastName: String!,
      dateDeNaissance: String!,
      sexe: String!,
      dateDeGreffe: String
    ): Patient!

    updatePatient(
      id:Int!,
      firstName: String,
      lastName: String,
      dateDeNaissance: String,
      sexe: String,
      dateDeGreffe: String): Int

    addMedcinPatient(medcinId: Int!, patientId: Int!): Boolean
    updateMember(medcinId: Int!, patientId: Int!, admin: Boolean!): Boolean

    deletePatient(id: Int!): Boolean
    deleteMedcinM(medcinId: Int!, patientId: Int!): Boolean
  }

`;
