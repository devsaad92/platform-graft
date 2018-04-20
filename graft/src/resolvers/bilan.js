export default {

  Query: {

  },
  Mutation: {
    createBilan: async (parant, args, { models, user }) => {
      try {
        await models.Bilan.create({
          ...args,
          medcinId: 1,
        });
        console.log(user);
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
