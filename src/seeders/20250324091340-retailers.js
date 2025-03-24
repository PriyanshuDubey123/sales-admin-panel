module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Retailers", [
      { id: 1, name: "Retailer X", mobile_number: "1234567890", createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: "Retailer Y", mobile_number: "2345678901", createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: "Retailer Z", mobile_number: "3456789012", createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: "Retailer W", mobile_number: "4567890123", createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Retailers", null, {});
  }
};
