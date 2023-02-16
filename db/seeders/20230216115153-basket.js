/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Baskets",
      [
        {
          u_id: 1,
          c_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          u_id: 1,
          c_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Baskets", null, {});
  },
};
