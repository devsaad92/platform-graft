export default (sequelize, DataTypes) => {
  const Clinique = sequelize.define('clinique', {
    text: DataTypes.STRING,
    date: DataTypes.DATE,
  });

  Clinique.associate = (models) => {
    // 1:M
    Clinique.belongsTo(models.Medcin, {
      foreignKey: { name: 'medcinId', allowNull: false },
      field: 'medcin_id',
    });

    Clinique.belongsTo(models.Patient, {
      foreignKey: { name: 'patientId', allowNull: false },
      field: 'patient_id',
    });
  };

  return Clinique;
};
