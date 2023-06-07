"use strict";
const bycrpt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Novin",
        profession: "Developer",
        role: "admin",
        email: "novin@dev.com",
        password: await bycrpt.hash("novin", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "savior",
        profession: "Product Manager",
        role: "student",
        email: "savior@dev.com",
        password: await bycrpt.hash("savior", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
