export default (sequelize, DataTypes) => {
  const Traitement = sequelize.define('traitement', {
    text: DataTypes.STRING,
    date: DataTypes.DATE,
  });

  Traitement.associate = (models) => {
    // 1:M
    Traitement.belongsTo(models.Medcin, {
      foreignKey: { name: 'medcinId', allowNull: false },
      field: 'medcin_id',
    });

    Traitement.belongsTo(models.Patient, {
      foreignKey: { name: 'patientId', allowNull: false },
      field: 'patient_id',
    });
  };

  return Traitement;
};
