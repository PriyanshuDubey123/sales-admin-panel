const { StatusCodes } = require("http-status-codes");
const wholesalerService = require("../services/wholesaler-service");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createWholesaler(req, res) {
    try {
        const response = await wholesalerService.createWholesaler(req.body);
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getWholesalerById(req, res) {
    try {
        const response = await wholesalerService.getWholesalerById(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getAllWholesalers(req, res) {
    try {
        const response = await wholesalerService.getAllWholesalers();
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function associateRetailer(req, res) {
    try {
        const { wholesalerId, retailerId } = req.body;

        await wholesalerService.associateRetailer(wholesalerId, retailerId);

        SuccessResponse.data = "Retailer associated successfully";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    createWholesaler,
    getWholesalerById,
    getAllWholesalers,
    associateRetailer
};
