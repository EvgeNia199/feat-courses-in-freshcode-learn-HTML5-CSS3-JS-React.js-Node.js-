'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
    Order.belongsToMany(OrderList, {through: 'Orders'});
    }
  }
  Order.init({
    date: DataTypes.DATE,
    email: DataTypes.STRING,
    totalSumm: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};