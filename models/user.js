'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    experience: DataTypes.INTEGER,
    wins: DataTypes.INTEGER,
    loses: DataTypes.INTEGER,
    games_played: DataTypes.INTEGER,
    last_login: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};