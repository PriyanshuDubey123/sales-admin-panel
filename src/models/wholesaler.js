'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wholesaler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        
      Wholesaler.belongsToMany(models.Retailer,{
        through: "WholesalerRetailers", // Junction Table Name
        foreignKey: "wholesaler_id",
        otherKey: "retailer_id"
      })

      Wholesaler.hasMany(models.Stock, {
        foreignKey: "wholesaler_id",
        onDelete: "CASCADE"
      });
    }
  }
  Wholesaler.init({
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
    modelName: 'Wholesaler',
  });
  return Wholesaler;
};