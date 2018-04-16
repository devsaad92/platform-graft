export default (sequelize, DataTypes) => {
  const Patient = sequelize.define('patient', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateDeNaissance: DataTypes.DATE,
    sexe: DataTypes.STRING,
    dateDeGreffe: DataTypes.DATE,
  }, {});

  Patient.associate = (models) => {
    // N:M
    Patient.belongsToMany(models.Medcin, {
      through: 'patient_medcin',
      foreignKey: {
        name: 'medcinId',
        field: 'medcin_id',
      },
    });
  };

  return Patient;
};
