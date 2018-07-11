import bcrypt from 'bcrypt';
import { tryLogin, tryForgetPassword, tryResetPassword } from '../auth';
import { requiresAuth, requiresAdmin } from '../permissions';
import pubsub from '../pubsub';


export default {

  Subscription: {
    medcinAdded: {
      subscribe: () => pubsub.asyncIterator('MEDCIN_ADDED'),
    },
  },
  Query: {
    medcinQuery: requiresAuth.createResolver((parent, args, { models, user }) => {
      if (user.id !== args.id && user.roleId !== 1) {
        throw new Error('Requires admin access');
      }
      return models.Medcin.findOne({ where: args });
    }),
    allMedcins: requiresAdmin.createResolver((parent, args, { models }) => models.Medcin.findAll()),
  },
  Mutation: {
    createMedcin: requiresAdmin.createResolver(async (parent, args, { models }) => {
      const medcin = args;
      medcin.password = await bcrypt.hash(medcin.password, 12);
      const medcinAdded = await models.Medcin.create(medcin);
      pubsub.publish('MEDCIN_ADDED', { medcinAdded });

      return medcinAdded;
    }),
    updateMedcin: requiresAdmin.createResolver(async (parent, args, { models }) => {
      const { id, ...params } = args;
      return models.Medcin.update(params, { where: { id } });
    }),
    deleteMedcin: async (parent, args, { models }) => {
      try {
        models.Medcin.destroy({ where: { id: args.id } });
        return true;
      } catch (error) {
        return false;
      }
    },
    login: (parent, { email, password }, { models, SECRET, SECRET2 }) =>
      tryLogin(email, password, models, SECRET, SECRET2),
    forgetPassword: async (parent, { email }, { transporter, models, SECRET }) =>
      tryForgetPassword(email, transporter, models, SECRET),
    resetPassword: async (parent, { email, newPassword }, { models }) =>
      tryResetPassword(email, newPassword, models),
  },
  Medcin: {
    patients: ({ id }, args, { models }) =>
      models.sequelize.query('select * from patients join members on id = patient_id where medcin_id = ?', {
        replacements: [id],
        model: models.Patient,
      }),
    role: async ({ id }, args, { models }) => {
      const medcin = await models.Medcin.findOne({ where: id });
      return models.Role.findOne({ where: { id: medcin.roleId } });
    },
  },
};
