export default {

  Mutation: {
    createTraitement: (parant, args, { models, user }) =>
      models.Traitement.create({ ...args, medcinId: user.id }),
  },
};
