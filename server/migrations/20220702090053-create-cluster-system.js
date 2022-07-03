'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClusterSystems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clusterCode: {
        type: Sequelize.STRING
      },
      clusterName: {
        type: Sequelize.STRING
      },
      clusterAddress: {
        type: Sequelize.STRING
      },
      clusterList: {
        type: Sequelize.INTEGER,
        references : {
          model : "cinemasystems",
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
    await queryInterface.dropTable('ClusterSystems');
  }
};