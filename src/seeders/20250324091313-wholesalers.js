module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Wholesalers", [
      { id: 1, name: "Wholesaler A", mobile_number: "9876543210", createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: "Wholesaler B", mobile_number: "8765432109", createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: "Wholesaler C", mobile_number: "7654321098", createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Wholesalers", null, {});
  }
};
