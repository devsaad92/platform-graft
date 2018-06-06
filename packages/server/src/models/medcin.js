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
      through: models.Member,
      foreignKey: {
        name: 'medcinId',
        field: 'medcin_id',
      },
    });

    Medcin.belongsTo(models.Role, {
      foreignKey: {
        name: 'roleId',
        field: 'role_id',
      },
    });
  };

  return Medcin;
};
