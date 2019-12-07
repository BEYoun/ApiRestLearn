'use strict';
module.exports = (sequelize, DataTypes) => {
  const Personne = sequelize.define('Personne', {
    filiereId: DataTypes.INTEGER,
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    dateNaissance: DataTypes.DATE,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Personne.associate = function(models) {
    // associations can be defined here
    models.Personne.belongsTo(models.Filiere, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Personne;
};