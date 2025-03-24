'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Fetch existing wholesalers and retailers
    const wholesalers = await queryInterface.sequelize.query(
      `SELECT id FROM "Wholesalers";`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const retailers = await queryInterface.sequelize.query(
      `SELECT id FROM "Retailers";`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Manually define associations
    const wholesalerRetailerData = wholesalers.flatMap(wholesaler => {
      return retailers
        .filter(retailer => retailer.id === 4 ? wholesaler.id === 1 : retailer.id !== 4)
        .map(retailer => ({
          wholesaler_id: wholesaler.id,
          retailer_id: retailer.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }));
    });
    
    // Insert data into the junction table
    await queryInterface.bulkInsert('WholesalerRetailers', wholesalerRetailerData);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('WholesalerRetailers', null, {});
  }
};
