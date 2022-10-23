'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderList extends Model {
    static associate(models) {
      OrderList.belongsToMany(Order, {through: 'OrderLists'});
      OrderList.belongsToMany(Products, {through: 'OrderLists'});
    }
  }
  OrderList.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    productSumm: DataTypes.INTEGER,
    priceProducts: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderList',
  });
  return OrderList;
};