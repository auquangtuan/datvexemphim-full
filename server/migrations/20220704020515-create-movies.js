'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movieName: {
        type: Sequelize.STRING
      },
      movieAlias: {
        type: Sequelize.STRING
      },
      movieTrailers: {
        type: Sequelize.STRING
      },
      movieDescribe: {
        type: Sequelize.STRING(1111)
      },
      moviePicture: {
        type: Sequelize.STRING
      },
      hot: {
        type: Sequelize.BOOLEAN
      },
      movieIsPlaying: {
        type: Sequelize.BOOLEAN
      },
      movieRate: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Movies');
  }
};