'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CinemaDoors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      theaterCode: {
        type: Sequelize.INTEGER
      },
      theaterName: {
        type: Sequelize.STRING
      },
      beLongCluster: {
        type: Sequelize.INTEGER,
        references : {
          model : "clustersystems",
          key : "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CinemaDoors');
  }
};