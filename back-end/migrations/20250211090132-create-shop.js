'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shopify_domain: {
        type: Sequelize.STRING
      },
      shop_owner: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull:true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull:true
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    })
    ;
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shops');
  }
};