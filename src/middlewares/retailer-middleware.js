const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");

/**
 * Middleware to validate the creation of a new retailer
 */
function validateCreateRetailer(req, res, next) {
    const { name, mobile_number } = req.body;

    // Check if both fields exist
    if (!name || !mobile_number) {
        ErrorResponse.message = "Missing required fields while creating a retailer.";
        ErrorResponse.error = new AppError(
            ["Name and Mobile Number are required fields."], 
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    // Mobile number validation (Assuming 10-digit Indian phone numbers)
    const mobileRegex = /^[6-9]\d{9}$/;  // Starts with 6-9, followed by 9 digits

    if (!mobileRegex.test(mobile_number)) {
        ErrorResponse.message = "Invalid mobile number.";
        ErrorResponse.error = new AppError(
            ["Mobile number must be a valid 10-digit number starting with 6-9."], 
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

/**
 * Middleware to validate retailer ID in params
 */
function validateRetailerId(req, res, next) {
    if (!req.params.id) {
        ErrorResponse.message = "Retailer ID is required.";
        ErrorResponse.error = new AppError(
            ["Retailer ID is missing in request parameters."], 
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRetailer,
    validateRetailerId
};
