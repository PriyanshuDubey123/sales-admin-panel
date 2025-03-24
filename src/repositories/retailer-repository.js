const {Retailer,Wholesaler} = require("../models");
const CrudRepository = require("./crud-repository");

class RetailerRepository  extends CrudRepository {
    constructor() {
        super(Retailer);
    }

    async getRetailerById(retailerId) {
      return await Retailer.findOne({
        where: { id: retailerId },
        include: [{ model: Wholesaler, through: { attributes: [] } }]
      });
    }
  
    async getRetailersWithSingleWholesaler() {
      const retailers = await Retailer.findAll({
        include: [{ model: Wholesaler, through: { attributes: [] } }]
      });
      return retailers.filter(r => r.Wholesalers.length === 1); 
    }
}

module.exports = RetailerRepository ;