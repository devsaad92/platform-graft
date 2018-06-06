import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

const NEW_MESSAGE_ADDED = 'NEW_MESSAGE_ADDED';

export default {
  Subscription: {
    newMessageInstruction: {
      subscribe: () => pubsub.asyncIterator(NEW_MESSAGE_ADDED),
      // subscribe: withFilter(
      //   () => pubsub.asyncIterator(NEW_MESSAGE_ADDED),
      //   (payload, args) => payload.patientId === args.patientId,
      // ),
    },
  },
  Query: {
    instructions: async (parant, { patientId }, { models }) =>
      models.Instruction.findAll(
        { order: [['created_at', 'ASC']], where: { patientId } },
        { raw: true },
      ),
  },
  Mutation: {
    createInstruction: async (parant, args, { models, user }) => {
      const instruction = await models.Instruction.create({
        ...args,
        medcinId: user.id,
      });

      const asyncFunc = async () => {
        const currentUser = await models.Medcin.findOne({
          where: {
            id: user.id,
          },
        });

        pubsub.publish(NEW_MESSAGE_ADDED, {
          newMessageInstruction: {
            ...instruction.dataValues,
            medcin: currentUser.dataValues,
          },
        });
      };

      asyncFunc();
      return instruction;
    },
  },
  Instruction: {
    medcin: ({ medcin, medcinId }, args, { models }) => {
      if (medcin) {
        return medcin;
      }
      return models.Medcin.findOne({ where: { id: medcinId } }, { raw: true });
    },
  },
};
