const express = require("express");
const {WholesalerController} = require("../../controllers");
const {WholeSalerMiddlewares}  = require("../../middlewares");

const router = express.Router();

router.post("/", WholeSalerMiddlewares.validateCreateWholesaler, WholesalerController.createWholesaler);

router.get("/:id", WholeSalerMiddlewares.validateWholesalerId,  WholesalerController.getWholesalerById);

router.get("/", WholesalerController.getAllWholesalers);

router.post("/associateretailer", WholeSalerMiddlewares.validateAssociateRetailer, WholesalerController.associateRetailer);

module.exports = router;
