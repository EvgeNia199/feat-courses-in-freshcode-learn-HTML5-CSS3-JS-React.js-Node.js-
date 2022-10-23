'use strict';

function generateTestProducts1(){
  const product = [];
  for(let i=0; i<10; i++){
    product.push({
      name: `test${i}`,
      price: `${i}`,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return  product;
}

function generateTestProducts2(){
  const product = [];
  for(let i=0; i<10; i++){
    product.push({
      name: `test${i}`,
      price: `${i}`,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return  product;
}

function generateTestProducts3(){
  const product = [];
  for(let i=0; i<10; i++){
    product.push({
      name: `test${i}`,
      price: `${i}`,
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return  product;
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", generateTestProducts1(), generateTestProducts2(), generateTestProducts3(), {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  }
};
