const retailer = require("../models/retailer");
const { Wholesaler,Retailer } = require("../models");
const CrudRepository = require("./crud-repository");
const AppError = require("../utils/error/app-error");
const { StatusCodes } = require("http-status-codes");

class WholesalerRepository   extends CrudRepository{
    constructor() {
        super(Wholesaler);
    }

    async getWholesalerById(wholesalerId) {
      return await Wholesaler.findOne({
        where: { id: wholesalerId },
        include: [{ model: Retailer, through: { attributes: [] } }]
      });
    }

    async associateRetailer(wholesalerId, retailerId ) {
      const wholesaler = await Wholesaler.findByPk(wholesalerId);
      const retailer = await Retailer.findByPk(retailerId);
      
      if (!wholesaler || !retailer) {
       throw new AppError("Wholesaler or Retailer not found", StatusCodes.NOT_FOUND);
    }

      return await wholesaler.addRetailer(retailer);
    }
   
}

module.exports = WholesalerRepository  ;