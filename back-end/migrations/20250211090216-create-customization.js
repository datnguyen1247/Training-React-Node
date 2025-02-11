'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customizations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      input_width: {
        type: Sequelize.INTEGER
      },
      input_height: {
        type: Sequelize.INTEGER
      },
      input_border: {
        type: Sequelize.STRING
      },
      input_border_radius: {
        type: Sequelize.INTEGER
      },
      input_background_color: {
        type: Sequelize.STRING
      },
      button_variant: {
        type: Sequelize.STRING
      },
      border_width: {
        type: Sequelize.INTEGER
      },
      border_color: {
        type: Sequelize.STRING
      },
      button_width: {
        type: Sequelize.INTEGER
      },
      button_height: {
        type: Sequelize.INTEGER
      },
      button_border: {
        type: Sequelize.STRING
      },
      button_background_color: {
        type: Sequelize.STRING
      },
      button_text_color: {
        type: Sequelize.STRING
      },
      direction: {
        type: Sequelize.STRING
      },
      css: {
        type: Sequelize.TEXT
      },
      shop_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Customizations');
  }
};