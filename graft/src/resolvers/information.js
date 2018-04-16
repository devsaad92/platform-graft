export default {

  Mutation: {
    createInformation: (parant, args, { models, user }) =>
      models.Information.create({ ...args, medcinId: user.id }),
  },
};
