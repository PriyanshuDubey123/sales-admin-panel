const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");

/**
 * Middleware to validate stock entry creation
 */
function validateCreateStock(req, res, next) {
    if (!req.body.wholesaler_id || !req.body.retailer_id || !req.body.stock_amount || !req.body.date) {
        ErrorResponse.message = "Missing required fields while creating a stock entry.";
        ErrorResponse.error = new AppError(
            ["Wholesaler ID, Retailer ID, Stock Amount, and Date are required."], 
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateStock
};
