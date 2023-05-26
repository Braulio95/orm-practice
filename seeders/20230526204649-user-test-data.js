"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        name: "anakin skywalker",
        username: "anakinjedi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "obi wan",
        username: "obiwanjedimaster",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
