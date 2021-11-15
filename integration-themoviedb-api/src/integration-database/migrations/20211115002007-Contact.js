'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contact', {
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
      PhoneNuber: {
        allowNull: false,
        type: Sequelize.STRING
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contact');
  }
};
