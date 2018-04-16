export default (sequelize, DataTypes) => {
  const Medcin = sequelize.define('medcin', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateDeNaissance: DataTypes.DATE,
    sexe: DataTypes.STRING,
    specialty: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  Medcin.associate = (models) => {
    // N:M
    Medcin.belongsToMany(models.Patient, {
      through: 'patient_medcin',
      foreignKey: {
        name: 'patientId',
        field: 'patient_id',
      },
    });
  };

  return Medcin;
};
