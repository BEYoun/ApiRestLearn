'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Personnes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      filiereId: {
        allowNull:true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Filieres',
          key: 'id'
        }
      },
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      dateNaissance: {
        type: Sequelize.DATE
      },
      email: {
        allowNull:false,
        type: Sequelize.STRING
      },
      password: {
        allowNull:false,
        type: Sequelize.STRING
      },
      username: {
        allowNull:false,
        type: Sequelize.STRING
      },
      role: {
        allowNull:false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Personnes');
  }
};