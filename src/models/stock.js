'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Stock.belongsTo(models.Wholesaler, {
        foreignKey: "wholesaler_id",
        onDelete: "CASCADE"
      });

      // Stock belongs to a Retailer
      Stock.belongsTo(models.Retailer, {
        foreignKey: "retailer_id",
        onDelete: "CASCADE"
      });
    }
  }
  Stock.init({
    wholesaler_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Wholesaler ID is required"
        }
      }
    },
    retailer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Retailer ID is required"
        }
      }
    },
    stock_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Stock amount is required"
        }
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Date is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};