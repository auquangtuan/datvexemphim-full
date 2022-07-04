'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({MovieSchedule}) {
      this.hasMany(MovieSchedule, {foreignKey : "theaterMovie"})
    }
  }
  Movies.init({
    movieName: DataTypes.STRING,
    movieAlias: DataTypes.STRING,
    movieTrailers: DataTypes.STRING,
    movieDescribe: DataTypes.STRING(111),
    moviePicture: DataTypes.STRING,
    hot: DataTypes.BOOLEAN,
    movieIsPlaying: DataTypes.BOOLEAN,
    movieRate: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Movies',
  });
  return Movies;
};