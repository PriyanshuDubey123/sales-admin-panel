const { StatusCodes } = require("http-status-codes");
const StockRepository = require("../repositories/stock-repository");
const AppError = require("../utils/error/app-error");

const stockRepository = new StockRepository();

async function createStockEntry(data) {
    try {
        return await stockRepository.create(data);
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            let explanation = error.errors.map(err => err.message);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create stock entry", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getTotalMonthlyTurnover() {
    try {
        return await stockRepository.getTotalMonthlyTurnover();
    } catch (error) {
        throw new AppError("Total monthly turnover can't be fetched", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getMaxTurnoverByWholesaler() {
    try {
        return await stockRepository.getMaxTurnoverByWholesaler();
    } catch (error) {
        throw new AppError("Max turnover by wholesaler can't be fetched", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createStockEntry,
    getTotalMonthlyTurnover,
    getMaxTurnoverByWholesaler
};
