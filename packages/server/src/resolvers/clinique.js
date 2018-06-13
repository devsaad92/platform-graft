import pubsub from '../pubsub';


const NEW_MESSAGE_ADDED = 'NEW_MESSAGE_ADDED';

export default {
  Subscription: {
    newMessageClinique: {
      subscribe: () => pubsub.asyncIterator(NEW_MESSAGE_ADDED),
    },
  },
  Query: {
    cliniques: async (parant, { patientId }, { models }) =>
      models.Clinique.findAll(
        { order: [['created_at', 'ASC']], where: { patientId } },
        { raw: true },
      ),
  },
  Mutation: {
    createClinique: async (parant, args, { models, user }) => {
      const clinique = await models.Clinique.create({
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
          newMessageClinique: {
            ...clinique.dataValues,
            medcin: currentUser.dataValues,
          },
        });
      };

      asyncFunc();
      return clinique;
    },
  },
  Clinique: {
    medcin: ({ medcin, medcinId }, args, { models }) => {
      if (medcin) {
        return medcin;
      }
      return models.Medcin.findOne({ where: { id: medcinId } }, { raw: true });
    },
  },
  // models.Medcin.findOne({ where: { id: medcinId } }, { raw: true }),
};

