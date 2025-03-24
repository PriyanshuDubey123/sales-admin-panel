const { StatusCodes } = require("http-status-codes");
const retailerService = require("../services/retailer-service");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createRetailer(req, res) {
    try {
        const response = await retailerService.createRetailer(req.body);
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getRetailerById(req, res) {
    try {
        const response = await retailerService.getRetailerById(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getRetailersWithSingleWholesaler(req, res) {
    try {
        const response = await retailerService.getRetailersWithSingleWholesaler();
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    createRetailer,
    getRetailerById,
    getRetailersWithSingleWholesaler
};
