export default {

  Mutation: {
    createInstruction: (parant, args, { models, user }) =>
      models.Instruction.create({ ...args, medcinId: user.id }),
  },
  Instruction: {
    medcin: ({ medcinId }, args, { models }) => models.Medcin.findOne({ where: { id: medcinId } }),
  },
};
