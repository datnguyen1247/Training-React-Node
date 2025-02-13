'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Translations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      locale: {
        type: Sequelize.STRING
      },
      translate: {
        type: Sequelize.JSON
      },
      shop_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Shops',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => {
      queryInterface.addConstraint('Translations', {
          fields: ['shop_id'],
          type: 'foreign key',
          name: 'translations_shop_fk',
          references: {
              table: 'Shops',
              field: 'id',
          },
      });
  })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Translations');
  }
};