'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WholesalerRetailers', {
      wholesaler_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Wholesalers', // Ensure this matches your wholesalers table name
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      retailer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Retailers', // Ensure this matches your retailers table name
          key: 'id'
        },
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('WholesalerRetailers');
  }
};
