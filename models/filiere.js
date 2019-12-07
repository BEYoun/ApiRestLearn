'use strict';
module.exports = (sequelize, DataTypes) => {
  const Filiere = sequelize.define('Filiere', {
    departementId: DataTypes.INTEGER,
    nom: DataTypes.STRING
  }, {});
  Filiere.associate = function(models) {
    // associations can be defined here
    models.Filiere.hasMany(models.Personne)
  };
  return Filiere;
};