'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const bcrypt = require('bcrypt')
    const user = require('../data/User.json')

    user.map((e) => {
      e.createdAt = new Date()
      e.updatedAt = new Date()
      e.password = bcrypt.hashSync(e.password, 10)
    })

    await queryInterface.bulkInsert('Users', user, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {
      restartIdentity: true,
      truncate: true
    });
    
  }
};
