'use strict';
const {ROLES}  = require('../../constants.js');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.User, { through: 'UserRoles'});
    }
  }
  Role.init({
    name: DataTypes.ENUM(...Object.values(ROLES)),
    allowNull: false
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};