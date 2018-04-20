export default {

  Mutation: {
    createClinique: (parant, args, { models, user }) =>
      models.Clinique.create({ ...args, medcinId: user.id }),
  },
  Clinique: {
    medcin: ({ medcinId }, args, { models }) => models.Medcin.findOne({ where: { id: medcinId } }),
  },
};

