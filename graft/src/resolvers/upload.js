export default {
  Mutation: {
    uploadFile: (parant, args, { models, user }) =>
      models.Upload.create({ ...args, medcinId: user.id }),
  },
};
