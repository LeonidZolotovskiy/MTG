const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Vasya',
          password: await bcrypt.hash('123', 10),
          email: 'a.i.kamenev90@icloud.com',
          city: 'Moscow',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Petr',
          password: await bcrypt.hash('123', 10),
          email: 'maga.magamed.maga@mail.ru',
          city: 'Piter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
