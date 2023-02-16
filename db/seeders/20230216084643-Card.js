/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
      {
        name: 'Mountain',
        img: 'https://m.media-amazon.com/images/I/41uQsn5uK0L._AC_.jpg',
        price: 5,
        condition: 'Average',
        owner_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mountain',
        img: 'https://cdn11.bigcommerce.com/s-3b5vpig99v/images/stencil/1280x1280/products/69477/1026360/Mountain343__21409.1651598298.jpg?c=2',
        price: 6,
        condition: 'Average',
        owner_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Blaze',
        img: 'https://cdn11.bigcommerce.com/s-3b5vpig99v/products/66597/images/991436/Blaze__58774.1651514456.386.513.jpg?c=2',
        price: 7,
        condition: 'Average',
        owner_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Forest',
        img: 'https://cdn11.bigcommerce.com/s-3b5vpig99v/products/82897/images/1007729/Forest348__95460.1651541125.386.513.jpg?c=2',
        price: 8,
        condition: 'Good',
        owner_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Island',
        img: 'https://cdn11.bigcommerce.com/s-3b5vpig99v/products/68811/images/1016607/Island335__77617.1651555398.386.513.jpg?c=2',
        price: 9,
        condition: 'Bad',
        owner_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Plains',
        img: 'https://cdn11.bigcommerce.com/s-3b5vpig99v/products/69981/images/1032416/Plains331__35278.1651607885.386.513.jpg?c=2',
        price: 10,
        condition: 'Bad',
        owner_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Plains',
        img: 'https://cdn11.bigcommerce.com/s-3b5vpig99v/products/83077/images/1032440/Plains333__79449.1651607923.386.513.jpg?c=2',
        price: 12,
        condition: 'Good',
        owner_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Swamp',
        img: 'https://cdn11.bigcommerce.com/s-3b5vpig99v/products/83113/images/1071041/Swamp339__78788.1653326515.386.513.jpg?c=2',
        price: 13,
        condition: 'Good',
        owner_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Swamp',
        img: 'https://cdn11.bigcommerce.com/s-3b5vpig99v/products/83131/images/1071053/Swamp341__12910.1653326536.386.513.jpg?c=2',
        price: 14,
        condition: 'Good',
        owner_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Swamp',
        img: 'https://cdn11.bigcommerce.com/s-3b5vpig99v/products/83149/images/1071059/Swamp342__04613.1653326545.386.513.jpg?c=2',
        price: 8,
        condition: 'Average',
        owner_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Card', null, {});
  },
};
