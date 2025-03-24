const express = require("express");
const {StockController} = require("../../controllers");
const {StockMiddlewares} = require("../../middlewares");

const router = express.Router();

router.post("/", StockMiddlewares.validateCreateStock, StockController.createStockEntry);

router.get("/monthly-turnover", StockController.getTotalMonthlyTurnover);

router.get("/max-turnover", StockController.getMaxTurnoverByWholesaler);

module.exports = router;
