const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");

/**
 * Middleware to validate the creation of a new wholesaler
 */
function validateCreateWholesaler(req, res, next) {
    if (!req.body.name || !req.body.mobile_number) {
        ErrorResponse.message = "Missing required fields while creating a wholesaler.";
        ErrorResponse.error = new AppError(
            ["Name and Mobile Number are required fields."], 
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

/**
 * Middleware to validate wholesaler ID in params
 */
function validateWholesalerId(req, res, next) {
    if (!req.params.id) {
        ErrorResponse.message = "Wholesaler ID is required.";
        ErrorResponse.error = new AppError(
            ["Wholesaler ID is missing in request parameters."], 
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

/**
 * Middleware to validate retailer association with a wholesaler
 */
function validateAssociateRetailer(req, res, next) {
    if (!req.body.wholesalerId || !req.body.retailerId) {
        ErrorResponse.message = "Missing required fields for retailer association.";
        ErrorResponse.error = new AppError(
            ["Both wholesaler_id and retailer_id are required."], 
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateWholesaler,
    validateWholesalerId,
    validateAssociateRetailer
};
