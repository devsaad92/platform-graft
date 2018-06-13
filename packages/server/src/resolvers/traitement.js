export default {

  Mutation: {
    createTraitement: (parant, args, { models, user }) =>
      models.Traitement.create({ ...args, medcinId: user.id }),
    updateTraitement: async (parent, args, { models }) => {
      try {
        const { id, ...params } = args;
        await models.Traitement.update(params, { where: { id } });
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
