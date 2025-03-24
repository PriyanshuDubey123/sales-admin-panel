const express = require('express');


const router = express.Router();
const wholesalerRoutes = require('./wholesaler-routes');
const retailerRoutes = require("./retailer-routes");
const stockRoutes = require("./stock-routes");


router.use('/wholesaler', wholesalerRoutes);

router.use('/retailer', retailerRoutes);

router.use('/stock', stockRoutes);


module.exports = router;