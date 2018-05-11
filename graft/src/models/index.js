import Sequelize from 'sequelize';

const sequelize = new Sequelize('greffe', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op,
  define: {
    underscored: true,
  },
});

const models = {
  Medcin: sequelize.import('./medcin'),
  Patient: sequelize.import('./patient'),
  Instruction: sequelize.import('./instruction'),
  Clinique: sequelize.import('./clinique'),
  Bilan: sequelize.import('./bilan'),
  Traitement: sequelize.import('./traitement'),
  Information: sequelize.import('./information'),
  Upload: sequelize.import('./upload'),
  Hematologie: sequelize.import('./hematologie'),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
