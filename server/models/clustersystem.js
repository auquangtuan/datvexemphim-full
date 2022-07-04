'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClusterSystem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({CinemaSystem, CinemaDoor}) {
      this.belongsTo(CinemaSystem, {foreignKey : "clusterList"});
      this.hasMany(CinemaDoor, {foreignKey: 'beLongCluster'});

    }
  }
  ClusterSystem.init({
    clusterCode: DataTypes.STRING,
    clusterName: DataTypes.STRING,
    clusterAddress: DataTypes.STRING,
    clusterList: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ClusterSystem',
  });
  return ClusterSystem;
};