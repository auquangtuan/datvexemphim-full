'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Movies, CinemaDoor}) {
      this.belongsTo(Movies, {foreignKey : "theaterMovie"})
      this.belongsTo(CinemaDoor, {foreignKey : "theaterCode"})
    }
  }
  MovieSchedule.init({
    showTimeCode: DataTypes.INTEGER,
    theaterCode: DataTypes.INTEGER,
    theaterMovie : DataTypes.INTEGER,
    premiereDAT: DataTypes.DATE,
    fareOften: DataTypes.INTEGER,
    fareVIP: DataTypes.INTEGER,
    fareCouple: DataTypes.INTEGER,
    movieTime: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MovieSchedule',
  });
  return MovieSchedule;
};