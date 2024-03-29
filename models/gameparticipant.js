'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameParticipant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GameParticipant.init({
    game_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    join_time: DataTypes.DATE,
    role: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GameParticipant',
  });
  return GameParticipant;
};