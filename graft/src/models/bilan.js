export default (sequelize, DataTypes) => {
  const Bilan = sequelize.define('bilan', {
    nom: DataTypes.STRING,
    soduim: DataTypes.STRING,
    crp: DataTypes.STRING,
    magnesuim: DataTypes.STRING,
    glucose: DataTypes.STRING,
    ggt: DataTypes.STRING,
    potassuim: DataTypes.STRING,
    uree: DataTypes.STRING,
    calcuim: DataTypes.STRING,
    ldh: DataTypes.STRING,
    sgpt: DataTypes.STRING,
    albumine: DataTypes.STRING,
    lipase: DataTypes.STRING,
    date: DataTypes.DATE,
  });

  Bilan.associate = (models) => {
    // 1:M
    Bilan.belongsTo(models.Medcin, {
      foreignKey: { name: 'medcinId', allowNull: false },
      field: 'medcin_id',
    });

    Bilan.belongsTo(models.Patient, {
      foreignKey: { name: 'patientId', allowNull: false },
      field: 'patient_id',
    });
  };

  return Bilan;
};
