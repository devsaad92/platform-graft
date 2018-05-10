export default (sequelize, DataTypes) => {
  const Bilan = sequelize.define('bilan', {
    nom: DataTypes.STRING,
    soduim: DataTypes.STRING,
    potassuim: DataTypes.STRING,
    chlore: DataTypes.STRING,
    uree: DataTypes.STRING,
    creatinine: DataTypes.STRING,
    calcuim: DataTypes.STRING,
    calcuimCorrige: DataTypes.STRING,
    phosphore: DataTypes.STRING,
    magnesuim: DataTypes.STRING,
    glucose: DataTypes.STRING,
    albumine: DataTypes.STRING,
    bilirubineT: DataTypes.STRING,
    bilirubineD: DataTypes.STRING,
    phosphataseAlcaline: DataTypes.STRING,
    sgot: DataTypes.STRING,
    sgpt: DataTypes.STRING,
    ggt: DataTypes.STRING,
    ldh: DataTypes.STRING,
    triglyceride: DataTypes.STRING,
    cholesterole: DataTypes.STRING,
    ammonemie: DataTypes.STRING,
    lactate: DataTypes.STRING,
    amylase: DataTypes.STRING,
    lipase: DataTypes.STRING,
    crp: DataTypes.STRING,
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
