'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('cinemasystems', [{
        systemCode: "BHDStar",
        systemName: "BHD Star Cineplex",
        systemAlias: "bhd-star-cineplex",
        systemLogo: "BHDStar Logo",
        createdAt : "2022-02-02 13:24:25",
        updatedAt : "2022-03-03 14:25:36"
      },
      {
        systemCode: "CGV",
        systemName: "cgv",
        systemAlias: "cgv",
        systemLogo: "CGV Logo",
        createdAt : "2022-02-02 13:24:25",
        updatedAt : "2022-03-03 14:25:36"
      },
      {
        systemCode: "CineStar",
        systemName: "CineStar",
        systemAlias: "cinestar",
        systemLogo: "CineStar Logo",
        createdAt : "2022-02-02 13:24:25",
        updatedAt : "2022-03-03 14:25:36"
      },
      {
        systemCode: "Galaxy",
        systemName: "Galaxy Cinema",
        systemAlias: "galaxy-cinema",
        systemLogo: "Galaxy Logo",
        createdAt : "2022-02-02 13:24:25",
        updatedAt : "2022-03-03 14:25:36"
      },
      {
        systemCode: "LotteCinima",
        systemName: "Lotte Cinema",
        systemAlias: "lotte-cinema",
        systemLogo: "LotteCinima Logo",
        createdAt : "2022-02-02 13:24:25",
        updatedAt : "2022-03-03 14:25:36"
      },
      {
        systemCode: "MegaGS",
        systemName: "MegaGS",
        systemAlias: "megags",
        systemLogo: "MegaGS Logo",
        createdAt : "2022-02-02 13:24:25",
        updatedAt : "2022-03-03 14:25:36"
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
