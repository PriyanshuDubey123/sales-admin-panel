module.exports = {
  up: async (queryInterface) => {
    const stocks = [];
    const startDate = new Date("2021-01-01");
    const endDate = new Date("2021-12-01");

    const wholesalers = [1, 2, 3]; // 3 Wholesalers
    const retailers = [1, 2, 3, 4]; // 4 Retailers

    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      wholesalers.forEach((wholesaler_id) => {
        retailers.forEach((retailer_id) => {
          stocks.push({
            wholesaler_id,
            retailer_id,
            stock_amount: Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000, // Stock amount between 5000 - 10000
            date: new Date(currentDate),
            createdAt: new Date(),
            updatedAt: new Date()
          });
        });
      });

      // Move to the next month
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return queryInterface.bulkInsert("Stocks", stocks);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Stocks", null, {});
  }
};
