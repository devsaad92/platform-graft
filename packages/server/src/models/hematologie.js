export default (sequelize, DataTypes) => {
  const Hematologie = sequelize.define('hematologie', {
    gb: DataTypes.STRING,
    lymphocyte: DataTypes.STRING,
    monocytes: DataTypes.STRING,
    neutrophiles: DataTypes.STRING,
    eosinophiles: DataTypes.STRING,
    gr: DataTypes.STRING,
    hb: DataTypes.STRING,
    ht: DataTypes.STRING,
    plaquette: DataTypes.STRING,
    vgm: DataTypes.STRING,
    ccmh: DataTypes.STRING,
    retic: DataTypes.STRING,
    tp: DataTypes.STRING,
    tca: DataTypes.STRING,
    inr: DataTypes.STRING,
    fibrinogene: DataTypes.STRING,
    facteurV: DataTypes.STRING,
    antiTIII: DataTypes.STRING,
    facteurXa: DataTypes.STRING,
    dDimeres: DataTypes.STRING,
    date: DataTypes.DATE,
  });

  Hematologie.associate = (models) => {
    // 1:M
    Hematologie.belongsTo(models.Medcin, {
      foreignKey: { name: 'medcinId', allowNull: false },
      field: 'medcin_id',
    });

    Hematologie.belongsTo(models.Patient, {
      foreignKey: { name: 'patientId', allowNull: false },
      field: 'patient_id',
    });
  };

  return Hematologie;
};
