const { StatusCodes } = require("http-status-codes");
const RetailerRepository = require("../repositories/retailer-repository");
const AppError = require("../utils/error/app-error");

const retailerRepository = new RetailerRepository();

async function createRetailer(data) {
    try {
        return await retailerRepository.create(data);
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            let explanation = error.errors.map(err => err.message);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create retailer", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getRetailerById(id) {
    try {
        const response = await retailerRepository.getRetailerById(id);
        if (!response) {
            throw new AppError("Retailer not found", StatusCodes.NOT_FOUND);
        }
        return response;
    } catch (error) {
        throw new AppError("Retailer can't be fetched", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getRetailersWithSingleWholesaler() {
    try {
        return await retailerRepository.getRetailersWithSingleWholesaler();
    } catch (error) {
        throw new AppError("Retailers with single wholesaler can't be fetched", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createRetailer,
    getRetailerById,
    getRetailersWithSingleWholesaler
};
