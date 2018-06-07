export default {

  Query: {
    allPatients: (parent, args, { models }) => models.Patient.findAll({}),
    // models.sequelize.query('select * from patients join members on id = patient_id
    // where medcin_id = ?', {
    //   replacements: [user.id],
    //   model: models.Patient,
    // }),
    // models.Patient.findAll({include:[{model:models.Medcin,where:{id:user.id},},],},{raw: true},),
    getPatient: (parent, args, { models }) => models.Patient.findOne({ where: args }),
  },
  Mutation: {
    createPatient: (parent, args, { models }) => models.Patient.create(args),
    updatePatient: async (parent, args, { models }) => {
      const { id, ...params } = args;
      return models.Patient.update(params, { where: { id } });
    },
    addMedcinPatient: (parent, { medcinId, patientId }, { models }) =>
      models.Member.create({ medcinId, patientId }),
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
    uploads: ({ id }, args, { models }) =>
      models.Upload.findAll({ where: { patientId: id } }),
    hematologies: ({ id }, args, { models }) =>
      models.Hematologie.findAll({ where: { patientId: id } }),
    members: ({ id }, args, { models }) =>
      models.sequelize.query('select * from medcins join members on id = medcin_id where patient_id = ?', {
        replacements: [id],
        model: models.Medcin,
      }),
    medcins: ({ id }, args, { models }) =>
      models.sequelize.query('select * from medcins where id not in (select medcin_id from members where patient_id = ?)', {
        replacements: [id],
        model: models.Medcin,
      }),
  },
};
