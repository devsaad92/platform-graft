export default {

  Mutation: {
    createClinique: (parant, args, { models, user }) =>
      models.Clinique.create({ ...args, medcinId: user.id }),
  },
};

