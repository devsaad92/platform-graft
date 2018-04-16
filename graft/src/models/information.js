export default (sequelize, DataTypes) => {
  const Information = sequelize.define('information', {
    Temp: DataTypes.STRING,
    FC: DataTypes.STRING,
    FR: DataTypes.STRING,
    PA: DataTypes.STRING,
    SaO2: DataTypes.STRING,
    date: DataTypes.DATE,
  });

  Information.associate = (models) => {
    // 1:M
    Information.belongsTo(models.Medcin, {
      foreignKey: { name: 'medcinId', allowNull: false },
      field: 'medcin_id',
    });

    Information.belongsTo(models.Patient, {
      foreignKey: { name: 'patientId', allowNull: false },
      field: 'patient_id',
    });
  };

  return Information;
};
