export default {

  Mutation: {
    createInstruction: (parant, args, { models, user }) =>
      models.Instruction.create({ ...args, medcinId: user.id }),
  },
};
