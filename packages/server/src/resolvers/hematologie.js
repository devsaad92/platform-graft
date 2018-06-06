export default {

  Mutation: {
    createHematologie: async (parant, args, { models, user }) => {
      try {
        await models.Hematologie.create({
          ...args,
          medcinId: user.id,
        });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
    updateHematologie: async (parent, args, { models }) => {
      try {
        const { id, ...params } = args;
        await models.Hematologie.update(params, { where: { id } });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
