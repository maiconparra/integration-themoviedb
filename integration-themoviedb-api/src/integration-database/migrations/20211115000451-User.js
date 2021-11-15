'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('UsersWorkingDays', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      FirstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Surname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Nickname: {
        allowNull: false,
        type: Sequelize.STRING
      }
    }); 
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
