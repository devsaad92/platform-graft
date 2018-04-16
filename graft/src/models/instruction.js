export default (sequelize, DataTypes) => {
  const Instruction = sequelize.define('instruction', {
    text: DataTypes.STRING,
    date: DataTypes.DATE,
  });

  Instruction.associate = (models) => {
    // 1:M
    Instruction.belongsTo(models.Medcin, {
      foreignKey: { name: 'medcinId', allowNull: false },
      field: 'medcin_id',
    });

    Instruction.belongsTo(models.Patient, {
      foreignKey: { name: 'patientId', allowNull: false },
      field: 'patient_id',
    });
  };

  return Instruction;
};
