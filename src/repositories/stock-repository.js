const {Stock, Sequelize} = require("../models");
const CrudRepository = require("./crud-repository");

class StockRepository extends CrudRepository {
    constructor() {
        super(Stock);
    }

  
    
      async getTotalMonthlyTurnover() {
        return await Stock.findAll({
          attributes: [
            "wholesaler_id",
            [Sequelize.fn("DATE_TRUNC", "month", Sequelize.col("date")), "month"],
            [Sequelize.fn("SUM", Sequelize.col("stock_amount")), "total_turnover"]
          ],
          group: ["wholesaler_id", "month"],
          raw: true
        });
      }
    
      async getMaxTurnoverByWholesaler() {
        return await Stock.findAll({
          attributes: [
            "wholesaler_id",
            "retailer_id",
            [Sequelize.fn("SUM", Sequelize.col("stock_amount")), "total_turnover"]
          ],
          group: ["wholesaler_id", "retailer_id"],
          order: [[Sequelize.literal("total_turnover"), "DESC"]],
          raw: true
        });
      }
}

module.exports = StockRepository;