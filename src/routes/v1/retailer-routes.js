const express = require("express");
const {RetailerController} = require("../../controllers");
const {RetailerMiddlewares} = require("../../middlewares");

const router = express.Router();

router.post("/", RetailerMiddlewares.validateCreateRetailer, RetailerController.createRetailer);

router.get("/:id", RetailerMiddlewares.validateRetailerId, RetailerController.getRetailerById);

router.get("/single/wholesaler", RetailerController.getRetailersWithSingleWholesaler);

module.exports = router;
