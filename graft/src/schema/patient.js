export default `

  type Patient {
    id: Int!
    firstName: String!
    lastName: String!
    sexe: String!
    dateDeNaissance: String!    
    dateDeGreffe: String
    medcins: [Medcin]
    cliniques: [Clinique]
    instructions: [Instruction]
    traitements: [Traitement]
    informations: [Information]
    bilans: [Bilan]
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
  }

`;
