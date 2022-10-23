'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
     Products.belongsTo(models.Categories, {
      foreignKey: {field: 'categoryId'}, as: 'owner'
     } );
     Products.belongsToMany(models.OrderList, {through: 'Products' })
    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};