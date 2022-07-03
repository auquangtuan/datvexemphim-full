'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clustersystems', [{
      clusterCode: "bhd-star-cineplex-3-2",
      clusterName: "BHD Star Cineplex - 3/2",
      clusterAddress: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
      clusterList: 1,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"

    },
    {
      clusterCode: "bhd-star-cineplex-bitexco",
      clusterName: "BHD Star Cineplex - Bitexco",
      clusterAddress: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
      clusterList: 1,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"

    },
    {
      clusterCode: "bhd-star-cineplex-pham-hung",
      clusterName: "BHD Star Cineplex - Phạm Hùng",
      clusterAddress: "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
      clusterList: 1,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"

    },
    {
      clusterCode: "bhd-star-cineplex-vincom-le-van-viet",
      clusterName: "BHD Star Cineplex - Vincom Lê Văn Việt",
      clusterAddress: "L4-Vincom Plaza, 50 Lê Văn Việt, Q.9",
      clusterList: 1,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"

    },
    {
      clusterCode: "bhd-star-cineplex-vincom-quang-trung",
      clusterName: "BHD Star Cineplex - Vincom Quang Trung",
      clusterAddress: "B1-Vincom QT, 190 Quang Trung, Gò Vấp",
      clusterList: 1,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"

    },
    {
      clusterCode: "bhd-star-cineplex-vincom-thao-dien",
      clusterName: "BHD Star Cineplex - Vincom Thảo Điền",
      clusterAddress: "L5-Megamall, 159 XL Hà Nội, Q.2",
      clusterList: 1,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-aeon-binh-tan",
      clusterName: "CGV - Aeon Bình Tân",
      clusterAddress: "Tầng 3, TTTM Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, Bình Trị Đông B, Bình Tân",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-aeon-tan-phu",
      clusterName: "CGV - Aeon Tân Phú",
      clusterAddress: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-cgv-saigonres-nguyen-xi",
      clusterName: "CGV - CGV Saigonres Nguyễn Xí",
      clusterAddress: "Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P. 26, Bình Thạnh",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-crescent-mall",
      clusterName: "CGV - Crescent Mall",
      clusterAddress: "Lầu 5, Crescent Mall, Đại lộ Nguyễn Văn Linh, Phú Mỹ Hưng, Q. 7",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-ct-plaza",
      clusterName: "CGV - CT Plaza",
      clusterAddress: "60A Trường Sơn,P. 2, Tân Bình",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-golden-plaza",
      clusterName: "CGV - Golden Plaza",
      clusterAddress: "Tầng 4, Trung tâm thương mại Golden Plaza, 922 Nguyễn Trãi, P. 14, Q. 5",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-hoang-van-thu",
      clusterName: "CGV - Hoàng Văn Thụ",
      clusterAddress: "Tầng 1 và 2 Gala Center, 415 Hoàng Văn Thụ, P. 2, Tân Bình",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-hung-vuong-plaza",
      clusterName: "CGV - Hùng Vương Plaza",
      clusterAddress: "Lầu 7, 126 Hùng Vương, Q. 5",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-imc-tran-quang-khai",
      clusterName: "CGV - IMC Trần Quang Khải",
      clusterAddress: "T2&3, TTVH Đa Năng, 62 Trần Quang Khải, P.Tân Định, Q.1",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-liberty-citypoint",
      clusterName: "CGV - Liberty Citypoint",
      clusterAddress: "Tầng M - 1, khách sạn Liberty Center Saigon Citypoint, 59 - 61 Pateur, Q. 1",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-pandora-city",
      clusterName: "CGV - Pandora City",
      clusterAddress: "Lầu 3, Pandora City, 1/1 Trường Chinh, Tân Phú",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-paragon",
      clusterName: "CGV - Paragon",
      clusterAddress: "Tầng 5, toà nhà Parkson Paragon, 03 Nguyễn Lương Bằng, Q. 7",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-parkson-dong-khoi",
      clusterName: "CGV - Parkson Đồng Khởi",
      clusterAddress: "Tầng 5 Parkson Đồng Khởi, 35bis-45 Lê Thánh Tôn, Bến Nghé, Q.1",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-pearl-plaza",
      clusterName: "CGV - Pearl Plaza",
      clusterAddress: "Lầu 5, Pearl Plaza, 561 Điện Biên Phủ, Bình Thạnh",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-satra-cu-chi",
      clusterName: "CGV - Satra Củ Chi",
      clusterAddress: "T3, TTTM Satra Củ Chi, Số 1239, Tỉnh Lộ 8, Ấp Thạnh An, Trung An, Củ Chi, TP.HCM",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-su-van-hanh",
      clusterName: "CGV - Sư Vạn Hạnh",
      clusterAddress: "T6 Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Quận 10",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-vincom-dong-khoi",
      clusterName: "CGV - Vincom Đồng Khởi",
      clusterAddress: "Tầng 3, TTTM Vincom Center B, 72 Lê Thánh Tôn, Bến Nghé, Q. 1",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-vincom-go-vap",
      clusterName: "CGV - Vincom Gò Vấp",
      clusterAddress: "Tầng 5 TTTM Vincom Plaza Gò Vấp, 12 Phan Văn Trị, P. 7, Gò Vấp",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-vincom-landmark-81",
      clusterName: "CGV - Vincom Landmark 81",
      clusterAddress: "T B1 , TTTM Vincom Center Landmark 81, 772 Điện Biên Phủ, P.22, Q. Bình Thạnh, HCM",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-vincom-thu-duc",
      clusterName: "CGV - Vincom Thủ Đức",
      clusterAddress: "Tầng 5 Vincom Thủ Đức, 216 Võ Văn Ngân, Bình Thọ, Thủ Đức",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cgv-vivocity",
      clusterName: "CGV - VivoCity",
      clusterAddress: "Lầu 5, Trung tâm thương mại SC VivoCity - 1058 Nguyễn Văn Linh, Q. ,7",
      clusterList: 2,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cns-hai-ba-trung",
      clusterName: "CNS - Hai Bà Trưng",
      clusterAddress: "135 Hai Bà Trưng, Bến Nghé, Q.1[Bản đồ]",
      clusterList: 3,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "cns-quoc-thanh",
      clusterName: "CNS - Quốc Thanh",
      clusterAddress: "271 Nguyễn Trãi, Q.1",
      clusterList: 3,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "glx-huynh-tan-phat",
      clusterName: "GLX - Huỳnh Tấn Phát",
      clusterAddress: "1362 Huỳnh Tấn Phát, KP1, Phú Mỹ, Q. 7",
      clusterList: 4,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "glx-kinh-duong-vuong",
      clusterName: "GLX - Kinh Dương Vương",
      clusterAddress: "718bis Kinh Dương Vương, Q.6",
      clusterList: 4,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "glx-nguyen-du\r\n",
      clusterName: "GLX - Nguyễn Du",
      clusterAddress: "116 Nguyễn Du, Q.1",
      clusterList: 4,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "glx-nguyen-van-qua",
      clusterName: "GLX - Nguyễn Văn Quá",
      clusterAddress: "119B Nguyễn Văn Quá, Đông Hưng Thuận, Q.12, TPHCM",
      clusterList: 4,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "glx-pham-van-chi",
      clusterName: "GLX - Phạm Văn Chí",
      clusterAddress: "Lầu 5, TTTM Platinum Plaza, 634 Phạm Văn Chí, Q.6",
      clusterList: 4,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "glx-quang-trung",
      clusterName: "GLX - Quang Trung",
      clusterAddress: "L3-Co.opmart Foodcosa, 304A Quang Trung, Gò Vấp",
      clusterList: 4,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "glx-tan-binh",
      clusterName: "GLX - Tân Bình",
      clusterAddress: "246 Nguyễn Hồng Đào, Tân Bình",
      clusterList: 4,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "glx-trung-chanh",
      clusterName: "GLX - Trung Chánh",
      clusterAddress: "TTVH Q12 – 09, Q L 22, Trung Mỹ Tây , Q.12",
      clusterList: 4,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "lotte-cantavil",
      clusterName: "Lotte - Cantavil",
      clusterAddress: "L7-Cantavil Premier, Xa Lộ Hà Nội, Q.2",
      clusterList: 5,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "lotte-cong-hoa",
      clusterName: "Lotte - Cộng Hòa",
      clusterAddress: "L4-Pico Plaza, 20 Cộng Hòa, Tân Bình",
      clusterList: 5,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "lotte-diamond",
      clusterName: "Lotte - Diamond",
      clusterAddress: "L13-Diamond Plaza, 34 Lê Duẩn, Q.1",
      clusterList: 5,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "lotte-go-vap",
      clusterName: "Lotte - Gò Vấp",
      clusterAddress: "L3-Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp",
      clusterList: 5,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "lotte-nam-sai-gon",
      clusterName: "Lotte - Nam Sài Gòn",
      clusterAddress: "L3-Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7",
      clusterList: 5,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "lotte-nowzone",
      clusterName: "Lotte - Nowzone",
      clusterAddress: "L5-Nowzone, 235 Nguyễn Văn Cừ, Q.1",
      clusterList: 5,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "lotte-phu-tho",
      clusterName: "Lotte - Phú Thọ",
      clusterAddress: "L4-Lotte Mart Phú Thọ, Q.11",
      clusterList: 5,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "lotte-thu-duc",
      clusterName: "Lotte - Thủ Đức",
      clusterAddress: "L2-Joy Citipoint, KCX Linh Trung, Thủ Đức",
      clusterList: 5,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    },
    {
      clusterCode: "megags-cao-thang",
      clusterName: "MegaGS - Cao Thắng",
      clusterAddress: "19 Cao Thắng, Q.3",
      clusterList: 6,
      createdAt : "2022-06-07 13:14:15",
      updatedAt : "2022-07-08 14:15:16"
    }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
