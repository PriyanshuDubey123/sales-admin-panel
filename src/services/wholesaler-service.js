const { StatusCodes } = require("http-status-codes");
const WholesalerRepository = require("../repositories/wholesaler-repository");
const AppError = require("../utils/error/app-error");

const wholesalerRepository = new WholesalerRepository();

async function createWholesaler(data) {
    try {
        const response = await wholesalerRepository.create(data);
        return response;
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            let explanation = error.errors.map(err => err.message);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create wholesaler", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getWholesalerById(id) {
    try {
        const response = await wholesalerRepository.getWholesalerById(id);
        if (!response) {
            throw new AppError("Wholesaler not found", StatusCodes.NOT_FOUND);
        }
        return response;
    } catch (error) {
        throw new AppError("Wholesaler can't be fetched", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllWholesalers() {
    try {
        return await wholesalerRepository.getAll();
    } catch (error) {
        throw new AppError("Wholesalers can't be fetched", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function associateRetailer(wholesalerId,retailerId) {
    try {
        return await wholesalerRepository.associateRetailer(wholesalerId,retailerId);
    } catch (error) {
        throw new AppError("Wholesalers can't be fetched", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createWholesaler,
    getWholesalerById,
    getAllWholesalers,
    associateRetailer
};
