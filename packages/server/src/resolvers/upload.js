export default {
  Mutation: {
    uploadFile: async (parant, { file, ...args }, { models, user }) => {
      try {
        const fileData = args;
        if (file) {
          fileData.file = file.path;
        }
        await models.Upload.create({ ...fileData, medcinId: user.id });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
