'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wholesaler_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Wholesalers", // Table name
          key: "id"
        },
        onDelete: "CASCADE"
      },
      retailer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Retailers", // Table name
          key: "id"
        },
        onDelete: "CASCADE"
      },
      stock_amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
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
    await queryInterface.dropTable('Stocks');
  }
};