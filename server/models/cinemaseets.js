'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CinemaSeets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({CinemaDoor}) {
      this.belongsTo(CinemaDoor, {foreignKey : 'beLongsDoor'})
    }
  }
  CinemaSeets.init({
    seetCode: DataTypes.INTEGER,
    seetName: DataTypes.STRING,
    booked: DataTypes.BOOLEAN,
    typeOfChair: DataTypes.STRING,
    oderer : DataTypes.STRING,
    beLongsDoor: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CinemaSeets',
  });
  return CinemaSeets;
};