export default (sequelize, DataTypes) => {
  const Upload = sequelize.define('upload', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    file: DataTypes.STRING,
    date: DataTypes.DATE,
  });

  Upload.associate = (models) => {
    // 1:M
    Upload.belongsTo(models.Medcin, {
      foreignKey: { name: 'medcinId', allowNull: false },
      field: 'medcin_id',
    });

    Upload.belongsTo(models.Patient, {
      foreignKey: { name: 'patientId', allowNull: false },
      field: 'patient_id',
    });
  };

  return Upload;
};
