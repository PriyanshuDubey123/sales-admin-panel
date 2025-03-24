'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Retailer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Retailer.belongsToMany(models.Wholesaler, {
        through: "WholesalerRetailers", // Junction Table
        foreignKey: "retailer_id",
        otherKey: "wholesaler_id"
      });

      // One-to-Many Relationship with Stock
      Retailer.hasMany(models.Stock, {
        foreignKey: "retailer_id",
        onDelete: "CASCADE"
      });
    }
  }
  Retailer.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Name is required"
        }
      }
    },
    mobile_number: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        notNull:{
          msg:"Mobile number is required"
        }
    }
  }
  }, {
    sequelize,
    modelName: 'Retailer',
  });
  return Retailer;
};