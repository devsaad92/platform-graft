export default {

  Query: {
    allPatients: (parent, args, { models }) => models.Patient.findAll(),
    getPatient: (parent, args, { models }) => models.Patient.findOne({ where: args }),
  },
  Mutation: {
    createPatient: (parent, args, { models }) => models.Patient.create(args),
    updatePatient: async (parent, args, { models }) => {
      const { id, ...params } = args;
      return models.Patient.update(params, { where: { id } });
    },
  },
  Patient: {
    bilans: ({ id }, args, { models }) => models.Bilan.findAll({ where: { patientId: id } }),
    cliniques: ({ id }, args, { models }) => models.Clinique.findAll({ where: { patientId: id } }),
    instructions: ({ id }, args, { models }) =>
      models.Instruction.findAll({ where: { patientId: id } }),
    traitements: ({ id }, args, { models }) =>
      models.Traitement.findAll({ where: { patientId: id } }),
    informations: ({ id }, args, { models }) =>
      models.Information.findAll({ where: { patientId: id } }),
    // medcins: ({ id }, args, { models }) => models.Medcin.findAll({ where: { patientId: id } }),
  },
};
