'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CinemaSystem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ClusterSystem}) {
      this.hasMany(ClusterSystem, {foreignKey: "clusterList"})
    }
  }
  CinemaSystem.init({
    systemName: DataTypes.STRING,
    systemCode: DataTypes.STRING,
    systemAlias: DataTypes.STRING,
    systemLogo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CinemaSystem',
  });
  return CinemaSystem;
};