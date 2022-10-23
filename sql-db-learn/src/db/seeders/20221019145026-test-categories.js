'use strict';

function generateTestCategories(){
  const category = [];
  for(let i=1; i<3; i++){
  category.push({
    name: `Test${i}`,
    createdAt: new Date(),
    updatedAt: new Date(), 
  })
  }
  return category;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", generateTestCategories(), {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  }
};
