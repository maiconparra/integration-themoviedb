'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      IntegrationId: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
};
