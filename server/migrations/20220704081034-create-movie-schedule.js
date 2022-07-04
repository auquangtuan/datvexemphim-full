'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MovieSchedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      showTimeCode: {
        type: Sequelize.INTEGER
      },
      theaterCode: {
        type: Sequelize.INTEGER,
        references: {
          model : "cinemadoors",
          key: "id"
        }
      },
      theaterMovie : {
        type: Sequelize.INTEGER,
        references : {
          model : "movies",
          key : "id"
        }
      },
      premiereDAT: {
        type: Sequelize.DATE
      },
      fareOften: {
        type: Sequelize.INTEGER
      },
      fareVIP: {
        type: Sequelize.INTEGER
      },
      fareCouple: {
        type: Sequelize.INTEGER
      },
      movieTime: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('MovieSchedules');
  }
};