'use strict';
module.exports = (sequelize, DataTypes) => {
  var Medcin = sequelize.define('Medcin', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateDeNaissance: DataTypes.DATE,
    sexe: DataTypes.STRING,
    specialty: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Medcin.associate = function(models) {
    // associations can be defined here
  };
  return Medcin;
};