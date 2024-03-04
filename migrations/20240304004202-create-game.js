'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      r_id: {
        type: Sequelize.INTEGER
      },
      u_ids: {
        type: Sequelize.STRING
      },
      current_master: {
        type: Sequelize.INTEGER
      },
      next_master: {
        type: Sequelize.INTEGER
      },
      g_round: {
        type: Sequelize.INTEGER
      },
      current_phase: {
        type: Sequelize.INTEGER
      },
      current_state: {
        type: Sequelize.JSON
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Games');
  }
};