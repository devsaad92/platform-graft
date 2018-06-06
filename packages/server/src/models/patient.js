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
      through: models.Member,
      foreignKey: {
        name: 'patientId',
        field: 'patient_id',
      },
    });
  };

  return Patient;
};
