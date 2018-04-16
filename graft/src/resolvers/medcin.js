import bcrypt from 'bcrypt';
import { PubSub } from 'graphql-subscriptions';
import _ from 'lodash';
import { tryLogin, tryForgetPassword, tryResetPassword } from '../auth';

const pubsub = new PubSub();

export default {

  Subscription: {
    medcinAdded: {
      subscribe: () => pubsub.asyncIterator('MEDCIN_ADDED'),
    },
  },
  Query: {
    medcinQuery: (parent, args, { models }) => models.Medcin.find({ where: args }),
    allMedcins: (parent, args, { models }) => models.Medcin.findAll(),
  },
  Mutation: {
    createMedcin: async (parent, args, { models }) => {
      const medcin = args;
      medcin.password = await bcrypt.hash(medcin.password, 12);
      const medcinAdded = await models.Medcin.create(medcin);
      pubsub.publish('MEDCIN_ADDED', { medcinAdded });

      return medcinAdded;
    },
    updateMedcin: (parent, args, { models }) =>
      models.Medcin.update(_.omit(args, 'id'), { where: { id: args.id } }),
    deleteMedcin: async (parent, args, { models }) => {
      models.Medcin.findById(args.id).then((medcin) => {
        if (medcin) {
          return medcin.destroy();
        }

        throw new Error('error id!');
      });
    },
    login: (parent, { email, password }, { models, SECRET, SECRET2 }) =>
      tryLogin(email, password, models, SECRET, SECRET2),
    forgetPassword: async (parent, { email }, { transporter, models, SECRET }) =>
      tryForgetPassword(email, transporter, models, SECRET),
    resetPassword: async (parent, { userId, newPassword }, { models }) =>
      tryResetPassword(userId, newPassword, models),
  },
};
