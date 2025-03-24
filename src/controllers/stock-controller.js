const { StatusCodes } = require("http-status-codes");
const stockService = require("../services/stock-service");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createStockEntry(req, res) {
    try {
        const response = await stockService.createStockEntry(req.body);
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getTotalMonthlyTurnover(req, res) {
    try {
        const response = await stockService.getTotalMonthlyTurnover();
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getMaxTurnoverByWholesaler(req, res) {
    try {
        const response = await stockService.getMaxTurnoverByWholesaler();
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    createStockEntry,
    getTotalMonthlyTurnover,
    getMaxTurnoverByWholesaler
};
