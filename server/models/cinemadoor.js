'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CinemaDoor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ClusterSystem, CinemaSeets, MovieSchedule}) {
      this.belongsTo(ClusterSystem, {foreignKey: 'beLongCluster'});
      this.hasMany(CinemaSeets, {foreignKey: 'beLongsDoor'})
      this.hasMany(MovieSchedule, {foreignKey : "theaterCode"})
    }
  }
  CinemaDoor.init({
    theaterCode: DataTypes.INTEGER,
    theaterName: DataTypes.STRING,
    beLongCluster: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CinemaDoor',
  });
  return CinemaDoor;
};