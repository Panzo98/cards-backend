'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Game.init({
    r_id: DataTypes.INTEGER,
    u_ids: DataTypes.STRING,
    current_master: DataTypes.INTEGER,
    next_master: DataTypes.INTEGER,
    g_round: DataTypes.INTEGER,
    current_phase: DataTypes.INTEGER,
    current_state: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};