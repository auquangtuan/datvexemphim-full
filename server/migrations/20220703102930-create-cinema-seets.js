'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CinemaSeets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seetCode: {
        type: Sequelize.INTEGER
      },
      seetName : {
        type: Sequelize.STRING
      },
      booked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      oderer : {
        type : Sequelize.STRING
      },
      typeOfChair: {
        type: Sequelize.STRING
      },
      beLongsDoor: {
        type: Sequelize.INTEGER,
        references : {
          model : "cinemadoors",
          key: 'id'
        },
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
    await queryInterface.dropTable('CinemaSeets');
  }
};