"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          movieName: "AVATAR : DÒNG CHẢY CỦA NƯỚC 2023",
          movieAlias: "avatar-dong-chay-cua-nuoc-2023",
          movieTrailers: "https://www.youtube.com/watch?v=oeRG9A6bDdY",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/avatar-dong-chay-cua-nuoc-2023_gp01.jpg",
          movieDescribe:
            "Lấy bối cảnh sau hơn một thập kỷ kể từ phần phim đầu tiên, Avatar: Dòng Chảy Của Nước kể về câu chuyện của gia đình Sully (Jake, Neytiri, và con của họ), những vấn đề xung quanh họ, những nỗ lực để bảo vệ sự an toàn của gia đình, những cuộc chiến sinh tồn, và những hiểm họa mà họ phải đối mặt.",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "MÈO ĐI HIA: ĐIỀU ƯỚC CUỐI CÙNG",
          movieAlias: "meo-di-hia-dieu-uoc-cuoi-cung",
          movieTrailers: "https://www.youtube.com/watch?v=ixFHgfKr39Y",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/meo-di-hia-dieu-uoc-cuoi-cung_gp01.jpg",
          movieDescribe:
            "Phần nối tiếp của Puss in Boots đã ra mắt từ 11 năm trước. Chú mèo đi hia sẽ chính thức trở lại màn ảnh lớn trong 1 chuyến phiêu lưu mới, vui nhộn hơn và cũng gay cấn hơn khi đã trót “tiêu xài” 8 trong số 9 cái mạng của mình.",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "NHÍM SONIdff",
          movieAlias: "nhim-sonidff",
          movieTrailers: "https://www.youtube.com/watch?v=G1Mrk6pFqVI",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/nhim-sonic-2_gp01.jpg",
          movieDescribe:
            "Khi Robotnik tìm cách quay trở về Trái Đất thành công, ông ta có một đồng minh mới là Knuckles hùng mạnh, liệu Sonic và người bạn ới Tails có thể ngăn chặn được âm mưu điên rồi để cứu lấy thế giới?",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "ĐÊM TỐI RỰC RỠ",
          movieAlias: "dem-toi-ruc-ro",
          movieTrailers: "https://www.youtube.com/watch?v=tgL4qAcLy4Y",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/dem-toi-ruc-ro_gp01.jpg",
          movieDescribe:
            "Khi người ông qua đời, cả gia đình của Xuân Thanh (Nhã Uyên) tề tựu để đưa tiễn. Đám tang diễn ra hoành tráng, xôm tụ và đầy màu sắc. Bỗng dưng một đám người kéo đến đòi nợ trong sự ngỡ ngàng của tất cả. Những bí mật bị phanh phui, bi kịch chồng bi kịch, như một hệ luỵ tổn thương của nạn bạo hành gia đình đầy ám ảnh.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "NHỮNG CÔ VỢ HÀNH ĐỘNGjhj",
          movieAlias: "nhung-co-vo-hanh-dongjhj",
          movieTrailers: "https://www.youtube.com/watch?v=Y_7BN2q3SUshjhjjk",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/nhung-co-vo-hanh-dong_gp01.jpg",
          movieDescribe:
            "Những Cô Vợ Hành Động với sự tham gia diễn xuất chính của chủ nhân nút kim cương Youtube đầu tiên và duy nhất hiện nay tại Việt Nam - Nhóm FAPTV. Bộ phim xoay quanh những tình huống dở khóc dở cười trong cuộc sống hôn nhân của ba cặp đôi trẻ tuổi, cụ thể là kế hoạch hành động “đặc sắc” của các cô vợ khi phát hiện 3 anh chồng trốn nhà đi chơi xuyên đêm. Liệu rằng khi các quý ông đam mê “chơi bời” bên ngoài thì những cô vợ phải xử lý ra sao và kết cục của quá trình “đánh ghen” này là gì?",
          hot: false, 
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "ÁN MẠNG LIÊN HOÀN LÚC NỬA ĐÊM",
          movieAlias: "an-mang-lien-hoan-luc-nua-dem",
          movieTrailers: "https://www.youtube.com/watch?v=PDq6ww8zEVU",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/an-mang-lien-hoan-luc-nua-dem_gp01.jpg",
          movieDescribe:
            "Bộ phim kể về 3 câu chuyện bí ẩn với những sự thật kinh hoàng dần được hé lộ.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "SINH VẬT HUYỀN BÍ: NHỮNG BÍ MẬT CỦA DUMBLEDORE",
          movieAlias: "sinh-vat-huyen-bi-nhung-bi-mat-cua-dumbledore",
          movieTrailers: "https://www.youtube.com/watch?v=citR_GSenWA",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/sinh-vat-huyen-bi-nhung-bi-mat-cua-dumbledore_gp01.jpg",
          movieDescribe:
            "Câu chuyện của phần phim thứ ba này xoay quanh việc Giáo sư Albus Dumbledore (Jude Law) phát hiện ra việc Phù thủy Bóng tối quyền năng Gellert Grindelwald (Mads Mikkelsen) đang âm mưu chiếm lấy quyền kiểm soát Thế giới Phù thủy. Không thể một mình ngăn chặn đoàn quân hùng mạnh của của Grindelwald, Dumbledore đặt niềm tin vào Nhà nghiên cứu sinh vật huyền bí Newt Scamander (Eddie Redmayne) cùng đồng đội thực hiện nhiệm vụ đầy hiểm nguy này. Trong tình thế ngàn cân treo sợi tóc như vậy, liệu thầy Dumbledore có thể đứng ngoài được bao lâu?",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "JUJUTSU KAISEN 0 - CHÚ THUẬT HỒI CHIẾN",
          movieAlias: "jujutsu-kaisen-0-chu-thuat-hoi-chien",
          movieTrailers: "https://www.youtube.com/watch?v=-B9IXDN-zrA",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/jujutsu-kaisen-0-chu-thuat-hoi-chien_gp01.jpg",
          movieDescribe:
            "Yuta Okkotsu, một học sinh trung học giành được quyền kiểm soát một Linh hồn bị nguyền rủa cực kỳ mạnh mẽ và được Jujutsu Sorcerers đăng ký vào trường trung học Jujutsu tỉnh Tokyo để giúp anh ta kiểm soát sức mạnh của mình và để mắt đến anh ta.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "THẾ GIỚI KHỦNG LONG: LÃNH ĐỊA",
          movieAlias: "the-gioi-khung-long-lanh-dia",
          movieTrailers: "https://www.youtube.com/watch?v=3y0KM5jUnmk",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/the-gioi-khung-long-lanh-dia_gp01.jpg",
          movieDescribe:
            "Bốn năm sau kết thúc Jurassic World: Fallen Kingdom, những con khủng long đã thoát khỏi nơi giam cầm và tiến vào thế giới loài người. Giờ đây, chúng xuất hiện ở khắp mọi nơi. Sinh vật to lớn ấy không còn chỉ ở trên đảo như trước nữa mà gần ngay trước mắt, thậm chí còn có thể chạm tới. Owen Grady may mắn gặp lại cô khủng long mà anh và khán giả vô cùng yêu mến - Blue. Tuy nhiên, Blue không đi một mình mà còn đem theo một chú khủng long con khác. Điều này khiến Owen càng quyết tâm bảo vệ mẹ con cô được sinh sống an toàn. Thế nhưng, hai giống loài quá khác biệt. Liệu có thể tồn tại một kỷ nguyên mà khủng long và con người sống chung một cách hòa bình?",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "RỪNG SĂN NGƯỜI 2",
          movieAlias: "rung-san-nguoi-2",
          movieTrailers: "https://www.youtube.com/watch?v=VCSfP7L00dI",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/rung-san-nguoi_gp01.jpg",
          movieDescribe:
            "Một biệt đội được phái vào rừng sâu để tìm tài liệu tuyệt mật và những người đồng đội mất tích. Nhưng mọi thứ không đơn giản như thế, họ đã tiến vào một vùng đất chất, nơi quỷ dữ thống trị và điều khiển mọi thứ. Đặc biệt, phim có sự góp mặt của Mickey Rourke, phản diện chính từ Iron Man 2.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "ĐIỆN THOẠI ĐEN 2027",
          movieAlias: "dien-thoai-den-2027",
          movieTrailers: "https://www.youtube.com/watch?v=5FdSkHJW884",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/dien-thoai-den_gp01.jpg",
          movieDescribe:
            "Finney Shaw, một cậu bé 13 tuổi nhút nhát nhưng thông minh, bị một kẻ giết người tàn bạo bắt cóc và nhốt trong một tầng hầm cách âm, nơi tiếng la hét trở nên vô ích. Khi một chiếc điện thoại bị ngắt kết nối trên tường bắt đầu đổ chuông, Finney phát hiện ra rằng cậu có thể nghe thấy giọng nói từ những nạn nhân trước đây của kẻ giết người. Và họ đã cố gắng đảm bảo rằng những gì đã xảy ra với họ không xảy ra với Finney.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "THANH SÓI",
          movieAlias: "thanh-soi",
          movieTrailers: "https://www.youtube.com/watch?v=lVBgekemG9E",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/thanh-soi_gp01.jpg",
          movieDescribe:
            'Bộ phim Thanh Sói là một tác phẩm điện ảnh hành động thuộc "vũ trụ" Hai Phượng. Phim là câu chuyện về thời trẻ của nữ trùm Thanh Sói với hướng khai thác thú vị và niềm tin rằng tất cả nhân vật xấu đều xuất phát từ lý do nào đó. Nỗi đau có thể thay đổi tất cả.',
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "LIÊN MINH SIÊU THÚ DC 2",
          movieAlias: "lien-minh-sieu-thu-dc-2",
          movieTrailers: "https://www.youtube.com/watch?v=L2umMe5uRnk",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/lien-minh-sieu-thu-dc_gp01.jpg",
          movieDescribe:
            "Trong “Liên Minh Siêu Thú DC”, Siêu Cún Krypto và Superman là cặp bài trùng không thể tách rời, cùng sở hữu những siêu năng lực tương tự và cùng nhau chiến đấu chống lại tội phạm tại thành phố Metropolis. Khi Superman và những thành viên của Liên Minh Công Lý bị bắt cóc, Krypto phải thuyết phục cậu chàng Ace luộm thuộm, nàng Heo PB, Rùa Merton và Sóc Chip khai phá những sức mạnh tiềm ẩn và cùng nhau giải cứu các siêu anh hùng. “Liên Minh Siêu Thú DC” có sự góp giọng của bộ đôi ngôi sao nổi tiếng bậc nhất Hollywood Dwayne Johnson (lồng tiếng cho Siêu cún Krypto) và Kevin Hart (Superman). Đặc biệt, tài tử Keanu Reeves sẽ đảm nhận những câu thoại chất lừ đến từ Batman.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "the waliking dead",
          movieAlias: "the-waliking-dead",
          movieTrailers: "https://www.youtube.com/watch?v=sfAc2U20uyg",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/the-waliking-dead_gp01.jpg",
          movieDescribe:
            "Xác Sống 11 (The Walking Dead Season 11) là mùa cuối cùng của một loạt phim truyền hình Mỹ thuộc thể loại kinh dị và hậu tận thế của kênh AMC, dựa trên seri truyện tranh cùng tên do Robert Kirkman, Tony Moore và Charlie Adlard sáng tạo. The Walking Dead - series khai sáng cho kỷ nguyên zombie trên màn ảnh nhỏ chuẩn bị đi tới hồi kết.",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Bleach",
          movieAlias: "bleach",
          movieTrailers: "https://youtu.be/oblZrnM9p6A?t=5",
          moviePicture: "http://movieapi.cyberlearn.vn/hinhanh/bleach_gp01.png",
          movieDescribe:
            "Ichigo Kurosaki là một thiếu niên có khả năng nhìn thấy linh hồn. Cuộc sống của anh thay đổi nhanh chóng bởi sự xuất hiện đột ngột của một Soul Reaper - một trong những người điều chỉnh dòng chảy của linh hồn giữa thế giới con người và thế giới bên kia, tên là Kuchiki Rukia, người đến thế giới con người để tìm diệt Hollow, một linh hồn lạc lối rất nguy hiểm. Khi Rukia bị thương nặng vì bảo vệ Ichigo khỏi Hollow, cô cố gắng chuyển một nửa trong số năng lượng reiatsu (sức mạnh linh hồn) của cô cho Ichigo để anh có thể đánh bại Hollow. Tuy nhiên, Ichigo lấy gần như tất cả năng lượng của Rukia và biến đổi thành một Soul Reaper, cho phép anh đánh bại Hollow dễ dàng.",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Moon Knight ",
          movieAlias: "moon-knight",
          movieTrailers: "https://youtu.be/x7Krla_UxRg",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/moon-knight_gp01.jpeg",
          movieDescribe:
            "Steven Grant discovers he's been granted the powers of an Egyptian moon god. But he soon finds out that these newfound powers can be both a blessing and a curse to his troubled life.",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Game of Throne",
          movieAlias: "game-of-throne",
          movieTrailers: "https://youtu.be/KPLWWIOCOOQ",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/game-of-throne_gp01.jpg",
          movieDescribe:
            "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "MAIKA - CÔ BÉ ĐẾN TỪ HÀNH TINH KHÁC",
          movieAlias: "maika-co-be-den-tu-hanh-tinh-khac",
          movieTrailers: "https://youtu.be/mOH-VKJBsh8",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/maika-co-be-den-tu-hanh-tinh-khac_gp01.jpg",
          movieDescribe:
            '"Maika - Cô bé đến từ hành tinh khác" (đạo diễn Hàm Trần) gợi nhớ tuổi thơ với hình ảnh đẹp, cốt truyện cảm động về tình bạn, gia đình. Ra mắt nhân dịp Quốc tế Thiếu nhi 1/6, tác phẩm lấy cảm hứng từ Maika, cô bé từ trên trời rơi xuống - phim truyền hình Tiệp Khắc chiếu ở Việt Nam những năm 1980.',
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "EM VÀ TRỊNH",
          movieAlias: "em-va-trinh",
          movieTrailers: "https://www.youtube.com/watch?v=IosqnBOkk2I",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/em-va-trinh_gp01.jpg",
          movieDescribe:
            "Sau những teaser đầu tiên hé lộ về các nàng thơ, ekip phim vừa tung ra trailer của “EM VÀ TRỊNH” cho thấy rõ hơn về một thời tuổi trẻ oanh liệt của Trịnh Công Sơn, từ chàng trai thư sinh yêu chủ nghĩa lãng mạn đến khi trở thành người nhạc sĩ phản chiến yêu hòa bình.  EM VÀ TRỊNH tái hiện một mùa hè tuổi trẻ rực lửa của Trịnh Công Sơn. Mùa hè đó có các nàng thơ, có âm nhạc, có tình yêu tuổi trẻ, có những chuyến đi phiêu du trên khắp mọi miền tổ quốc và có cả bom đạn, khói lửa, lý tưởng. Câu chuyện mang tính thời đại của một huyền thoại âm nhạc được kể qua từng giai đoạn, những lá thư và từng giai điệu đã trở nên vô cùng quen thuộc qua nhiều thế hệ người Việt Nam.  Một điểm nhấn trong trailer chính là phần phục trang mang phong cách vintage vô cùng bắt mắt và gây tò mò của các diễn viên. Bối cảnh thập niên 1960 trải dài sang thập niên 1970 mang tới những bộ trang phục lãng mạn, đặc trưng cho một thời kỳ văn hóa mà ở đó, sự lãng mạn len lỏi trong từng người trẻ, đặc biệt là những người có tâm hồn nghệ sĩ lãng mạ",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Lion KIng",
          movieAlias: "lion-king",
          movieTrailers: "youtobe",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/lion-king_gp01.jpg",
          movieDescribe: "Một Bộ Phim Siêu Hay",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Thor : Love And Thunder2",
          movieAlias: "thor-love-and-thunder2",
          movieTrailers: "https://youtu.be/6_dk-s57jck",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/thor-tinh-yeu-va-sam-set_gp01.jpg",
          movieDescribe:
            "Vốn từng là một chiến binh hùng mạnh của Asgard, trải qua vô số trận chiến lớn nhỏ nhưng sau sự kiện trong Avengers: Endgame (2019) cùng vô số mất mát, Thần Sấm không còn muốn theo đuổi con đường siêu anh hùng. Từ đây, anh lên đường tìm ra ý nghĩa của cuộc sống và nhìn nhận lại bản thân mình.",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "phim mới",
          movieAlias: "phim-moi",
          movieTrailers: "đay là trailer",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/phim-moi_gp01.jpg",
          movieDescribe: "đay là mota",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Stranger Things",
          movieAlias: "stranger-things",
          movieTrailers:
            "https://www.youtube.com/watch?v=EUXh__4pO_Q&ab_channel=NetflixPhilippines",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/stranger-things_gp01.jpeg",
          movieDescribe:
            "Khi một cậu bé mất tích, một thị trấn nhỏ khám phá ra một bí ẩn liên quan đến các thử nghiệm tối mật, sức mạnh siêu nhiên đáng sợ và một cô bé lạ lùng.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Công tố viên chuyển sinh",
          movieAlias: "cong-to-vien-chuyen-sinh",
          movieTrailers: "https://youtu.be/H8qti-dUUmU",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/cong-to-vien-chuyen-sinh_gp01.jpg",
          movieDescribe: "Công tố viên chuyển sinh tivi show",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Two Phượng",
          movieAlias: "two-phuong",
          movieTrailers: "https://www.youtube.com/watch?v=emif5wruFKs",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/xvxzcxzas_gp01.jpg",
          movieDescribe: "Review phim Loki",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Trạng Quỳnh ",
          movieAlias: "trang-quynh",
          movieTrailers: "https://youtu.be/RM78y39sdik",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/trang-quynh_gp01.jpg",
          movieDescribe:
            'Bộ phim kể về hành trình giải cứu người thầy của Trạng Quỳnh cùng "đồng bọn" là cô gái xinh đẹp Điềm và anh bạn tinh quái Xẩm. Mặc dù chỉ là những người "thấp cổ bé họng" trong xã hội nhưng họ không hề ngần ngại đối đầu với bọn cường hào ác bá, tiêu biểu là Trịnh Bá - công tử con quan lớn và Ả Liễu - người phụ nữ vô cùng mưu mô, xảo quyệt.',
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Trạng Quỳnh",
          movieAlias: "trang-quynh",
          movieTrailers: "https://youtu.be/RM78y39sdik",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/trang-quynh_gp01.jpg",
          movieDescribe:
            'Bộ phim kể về hành trình giải cứu người thầy của Trạng Quỳnh cùng "đồng bọn" là cô gái xinh đẹp Điềm và anh bạn tinh quái Xẩm. Mặc dù chỉ là những người "thấp cổ bé họng" trong xã hội nhưng họ không hề ngần ngại đối đầu với bọn cường hào ác bá, tiêu biểu là Trịnh Bá - công tử con quan lớn và Ả Liễu - người phụ nữ vô cùng mưu mô, xảo quyệt.',
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },

        {
          movieName: 'CHUYỆN "MA" ĐÔ THỊ 2',
          movieAlias: "chuyen-ma-do-thi-2",
          movieTrailers: "https://www.youtube.com/embed/mJ_Q9f0Am9s",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/chuyen-ma-do-thi_gp03.jpg",
          movieDescribe:
            "Tác phẩm gồm 10 câu chuyện ma có nội dung độc lập nhưng đều lấy bối cảnh ở thủ đô Seoul thời hiện đại.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "KẺ THỨ BAA",
          movieAlias: "ke-thu-baa",
          movieTrailers: "https://www.youtube.com/embed/SedcmDaDMKk",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/ke-thu-ba_gp03.jpg",
          movieDescribe:
            "Kẻ Thứ 3 là bộ phim kể về hành trình tìm cách cứu vợ của Quang Kha khi anh nhận ra anh đang có cơ hội rất lớn trong việc thay đổi quá khứ, giúp người vợ của mình có thể sống lại. Nhưng trong hành trình cứu vợ đó, anh đã khám phá ra những góc khuất của người vợ mà anh rất mực yêu thương, vậy liệu anh có còn muốn cứu vợ mình?",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "NGƯỜI KHỞI LỬA",
          movieAlias: "nguoi-khoi-lua",
          movieTrailers: "https://www.youtube.com/watch?v=21rAuAZ-0TI",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/nguoi-khoi-lua_gp03.jpg",
          movieDescribe:
            "Một cô bé cố gắng tìm hiểu làm thế nào mà cô có được sức mạnh để đốt cháy mọi thứ bằng tâm trí của mình một cách bí ẩn.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "NGHỀ SIÊU DỄ",
          movieAlias: "nghe-sieu-de",
          movieTrailers: "https://www.youtube.com/watch?v=1anBxcsV5b8",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/nghe-sieu-de_gp03.jpg",
          movieDescribe:
            "Ông Thái là một cảnh sát về hưu nhưng không chịu an phận thủ thường, hàng ngày vẫn đi tìm bắt tội phạm vặt trong xóm cho đỡ nhớ nghề",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "RỪNG SĂN NGƯỜI",
          movieAlias: "rung-san-nguoi",
          movieTrailers: "https://www.youtube.com/watch?v=BRXHdMcU_co",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/rung-san-nguoi_gp03.jpg",
          movieDescribe:
            "Một biệt đội được phái vào rừng sâu để tìm tài liệu tuyệt mật và những người đồng đội mất tích. Nhưng mọi thứ không đơn giản như thế, họ đã tiến vào một vùng đất chất, nơi quỷ dữ thống trị và điều khiển mọi thứ. Đặc biệt, phim có sự góp mặt của Mickey Rourke, phản diện chính từ Iron Man 2.",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "ÁN MẠNG LIÊN HOÀN LÚC NỬA ĐÊM",
          movieAlias: "an-mang-lien-hoan-luc-nua-dem",
          movieTrailers: "https://www.youtube.com/watch?v=Jt8KkskJmlE",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/an-mang-lien-hoan-luc-nua-dem_gp03.jpg",
          movieDescribe:
            "Bộ phim kể về 3 câu chuyện bí ẩn với những sự thật kinh hoàng dần được hé lộ.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "NHÍM SONIC 2",
          movieAlias: "nhim-sonic-2",
          movieTrailers: "https://www.youtube.com/watch?v=JmJfFmoMDwE",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/nhim-sonic-2_gp03.jpg",
          movieDescribe:
            "Khi Robotnik tìm cách quay trở về Trái Đất thành công, ông ta có một đồng minh mới là Knuckles hùng mạnh, liệu Sonic và người bạn ới Tails có thể ngăn chặn được âm mưu điên rồi để cứu lấy thế giới?",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "NHỮNG BÍ MẬT CỦA DUMBLEDORE",
          movieAlias: "nhung-bi-mat-cua-dumbledore",
          movieTrailers: "https://www.youtube.com/watch?v=DRc7YVRF6MY",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/nhung-bi-mat-cua-dumbledore_gp03.jpg",
          movieDescribe:
            "Câu chuyện của phần phim thứ ba này xoay quanh việc Giáo sư Albus Dumbledore (Jude Law) phát hiện ra việc Phù thủy Bóng tối quyền năng Gellert Grindelwald (Mads Mikkelsen) đang âm mưu chiếm lấy quyền kiểm soát Thế giới Phù thủy. Không thể một mình ngăn chặn đoàn quân hùng mạnh của của Grindelwald, Dumbledore đặt niềm tin vào Nhà nghiên cứu sinh vật huyền bí Newt Scamander (Eddie Redmayne) cùng đồng đội thực hiện nhiệm vụ đầy hiểm nguy này. Trong tình thế ngàn cân treo sợi tóc như vậy, liệu thầy Dumbledore có thể đứng ngoài được bao lâu?",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "NHỮNG CÔ VỢ HÀNH ĐỘNG",
          movieAlias: "nhung-co-vo-hanh-dong",
          movieTrailers: "https://www.youtube.com/embed/Y_7BN2q3SUs",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/nhung-co-vo-hanh-dong_gp03.jpg",
          movieDescribe:
            "Những Cô Vợ Hành Động với sự tham gia diễn xuất chính của chủ nhân nút kim cương Youtube đầu tiên và duy nhất hiện nay tại Việt Nam - Nhóm FAPTV. Bộ phim xoay quanh những tình huống dở khóc dở cười trong cuộc sống hôn nhân của ba cặp đôi trẻ tuổi, cụ thể là kế hoạch hành động “đặc sắc” của các cô vợ khi phát hiện 3 anh chồng trốn nhà đi chơi xuyên đêm. Liệu rằng khi các quý ông đam mê “chơi bời” bên ngoài thì những cô vợ phải xử lý ra sao và kết cục của quá trình “đánh ghen” này là gì?",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "NGÔI ĐỀN KÌ QUÁI 3",
          movieAlias: "ngoi-den-ki-quai-3",
          movieTrailers: "https://www.youtube.com/embed/Rom6Om-eZDU",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/ngoi-den-ki-quai-3_gp03.jpg",
          movieDescribe:
            "Hội tạo nghiệp tụ tập nhau đến dự lễ xuất gia của Aod nhưng phải hoãn lại do lời nguyền từ chiếc lắc chân xuất hiện. Min Jun, Balloon, First phải chay đua với thời gian để tìm ra cách giải lời nguyền trước khi quỷ dữ đến lấy mạng Aod",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "HARRY POTTER VÀ HÒN ĐÁ PHÙ THỦY (RE-RUN)",
          movieAlias: "harry-potter-va-hon-da-phu-thuy-re-run-",
          movieTrailers: "https://www.youtube.com/embed/yBAGclXF3Jk",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/harry-potter-va-hon-da-phu-thuy-re-run-_gp03.jpg",
          movieDescribe:
            "Chuyển thể của phần đầu tiên của cuốn tiểu thuyết dành cho thiếu nhi nổi tiếng của tác giả J.K.Rowling, cậu bé Harry Potter vào sinh nhật lần thứ 11 rằng bố mẹ cậu là hai vị phù thủy nổi tiếng. Bản thân cậu sở hữu phép thuật và năng lực mà ai cũng mong muốn có được sau khi sống sót khỏi Chúa tể Voldermort. Từ cuộc sống của một đứa trẻ mồ côi, cậu trở thành một học sinh tại ngôi trường phù thủy danh giá Hogwarts. Tại đây, cậu đã tìm được những người bạn thân nhất của mình và giúp cậu khám phá ra sự thật về cái chết bí ẩn của cha mẹ mình. (Phim chiếu lại từ 20/5) ",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "HARRY POTTER AND CĂN PHÒNG BÍ MẬT (RUN)",
          movieAlias: "harry-potter-and-can-phong-bi-mat-run-",
          movieTrailers: "https://www.youtube.com/embed/Cy4fjVMOwsY",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/harry-potter-and-can-phong-bi-mat-re-run-_gp03.jpg",
          movieDescribe:
            "Phần tiếp theo của loạt phim Harry Potter vẫn tiếp tục xoay quanh bộ ba Harry Potter - Ron Weasley - Hermione Granger. Bộ ba phù thủy sẽ đối mặt với một thử thách mới trong năm học thứ 2 tại trường Hogwarts. Một thế lực hắc ám đang bao trùm ngôi trường phù thủy này, tấn công hàng loạt học sinh và đe dọa mở Phòng Chứa Bí Mật một lần nữa. (Phim chiếu lại)",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "578 PHÁT ĐẠN CỦA KẺ ĐIÊN",
          movieAlias: "578-phat-dan-cua-ke-dien",
          movieTrailers: "https://www.youtube.com/watch?v=TakNp0Iibt4",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/578-phat-dan-cua-ke-dien_gp03.jpg",
          movieDescribe:
            "Hùng, một người cha sẵn sàng đánh đổi mọi thứ, thậm chí đặt mạng sống của mình vào hiểm nguy trong cuộc truy đuổi đơn độc nhưng vô cùng khốc liệt với kẻ ác để tìm lại công lý cho cô con gái bé nhỏ của mình. Nhưng điều anh không ngờ rằng phía sau kẻ ác đó lại là cả một thế lực ngầm …",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "DORAEMON: NOBITA VÀ CUỘC CHIẾN VŨ TRỤ TÍ HON 2021",
          movieAlias: "doraemon-nobita-va-cuoc-chien-vu-tru-ti-hon-2021",
          movieTrailers: "https://www.youtube.com/watch?v=XsWx71aokYE",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/doraemon-nobita-va-cuoc-chien-vu-tru-ti-hon-2021_gp03.jpg",
          movieDescribe:
            "Nobita tình cờ gặp được người ngoài hành tinh tí hon Papi, vốn là Tổng thống của hành tinh Pirika, chạy trốn tới Trái Đất để thoát khỏi những kẻ nổi loạn nơi quê nhà. Doraemon, Nobita và hội bạn thân dùng bảo bối đèn pin thu nhỏ biến đổi theo kích cỡ giống Papi để chơi cùng cậu bé. Thế nhưng, một tàu chiến không gian tấn công cả nhóm. Cảm thấy có trách nhiệm vì liên lụy mọi người, Papi quyết định một mình đương đầu với quân phiến loạn tàn ác. Doraemon và các bạn lên đường đến hành tinh Pirika, sát cánh bên người bạn của mình.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "THẾ GIỚI KHỦNG LONG: LÃNH ĐỊA",
          movieAlias: "the-gioi-khung-long-lanh-dia",
          movieTrailers: "https://www.youtube.com/watch?v=wPOKNuV9B 0",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/the-gioi-khung-long-lanh-dia_gp03.jpg",
          movieDescribe:
            "Bốn năm sau kết thúc Jurassic World: Fallen Kingdom, những con khủng long đã thoát khỏi nơi giam cầm và tiến vào thế giới loài người. Giờ đây, chúng xuất hiện ở khắp mọi nơi. Sinh vật to lớn ấy không còn chỉ ở trên đảo như trước nữa mà gần ngay trước mắt, thậm chí còn có thể chạm tới. Owen Grady may mắn gặp lại cô khủng long mà anh và khán giả vô cùng yêu mến - Blue. Tuy nhiên, Blue không đi một mình mà còn đem theo một chú khủng long con khác. Điều này khiến Owen càng quyết tâm bảo vệ mẹ con cô được sinh sống an toàn. Thế nhưng, hai giống loài quá khác biệt. Liệu có thể tồn tại một kỷ nguyên mà khủng long và con người sống chung một cách hòa bình?",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "CẢNH SÁT VŨ TRỤ LIGHTYEAR",
          movieAlias: "canh-sat-vu-tru-lightyear",
          movieTrailers: "https://www.youtube.com/watch?v=hB_JdXDnZVQ",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/canh-sat-vu-tru-lightyear_gp03.jpg",
          movieDescribe:
            "Bộ phim kể về chuyến hành trình hành động kết hợp khoa học viễn tưởng nhằm giới thiệu câu chuyện về nguồn gốc của nhân vật Buzz Lightyear — người anh hùng đã truyền cảm hứng sáng tạo ra đồ chơi. “Lightyear” sẽ theo chân Cảnh Sát Vũ Trụ huyền thoại trong cuộc hành trình bước ra ngoài không gian cùng với một nhóm chiến binh đầy tham vọng và người bạn đồng hành là chú mèo máy Sox.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "ĐIỆN THOẠI ĐEN",
          movieAlias: "dien-thoai-den",
          movieTrailers: "https://www.youtube.com/watch?v=oJr_dYFUaCM",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/dien-thoai-den_gp03.jpg",
          movieDescribe:
            "Finney Shaw, một cậu bé 13 tuổi nhút nhát nhưng thông minh, bị một kẻ giết người tàn bạo bắt cóc và nhốt trong một tầng hầm cách âm, nơi tiếng la hét trở nên vô ích. Khi một chiếc điện thoại bị ngắt kết nối trên tường bắt đầu đổ chuông, Finney phát hiện ra rằng cậu có thể nghe thấy giọng nói từ những nạn nhân trước đây của kẻ giết người. Và họ đã cố gắng đảm bảo rằng những gì đã xảy ra với họ không xảy ra với Finney.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "AVATAR: DÒNG CHẢY CỦA NƯỚC",
          movieAlias: "avatar-dong-chay-cua-nuoc",
          movieTrailers: "https://www.youtube.com/watch?v=S3dNmMZE9sc",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/avatar-dong-chay-cua-nuoc_gp03.jpg",
          movieDescribe:
            "Câu chuyện của “Avatar: Dòng Chảy Của Nước” lấy bối cảnh 10 năm sau những sự kiện xảy ra ở phần đầu tiên. Phim kể câu chuyện về gia đình mới của Jake Sully (Sam Worthington thủ vai) cùng những rắc rối theo sau và bi kịch họ phải chịu đựng khi phe loài người xâm lược hành tinh Pandora.",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "LIÊN MINH SIÊU THÚ DC",
          movieAlias: "lien-minh-sieu-thu-dc",
          movieTrailers: "https://www.youtube.com/watch?v=o3bc3RXi0Tc",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/lien-minh-sieu-thu-dc_gp03.jpg",
          movieDescribe:
            "“Liên Minh Siêu Thú DC”, Siêu Cún Krypto và Superman là cặp bài trùng không thể tách rời, cùng sở hữu những siêu năng lực tương tự và cùng nhau chiến đấu chống lại tội phạm tại thành phố Metropolis. Khi Superman và những thành viên của Liên Minh Công Lý bị bắt cóc, Krypto phải thuyết phục cậu chàng Ace luộm thuộm, nàng Heo PB, Rùa Merton và Sóc Chip khai phá những sức mạnh tiềm ẩn và cùng nhau giải cứu các siêu anh hùng. “Liên Minh Siêu Thú DC” có sự góp giọng của bộ đôi ngôi sao nổi tiếng bậc nhất Hollywood Dwayne Johnson (lồng tiếng cho Siêu cún Krypto) và Kevin Hart (Superman). Đặc biệt, tài tử Keanu Reeves sẽ đảm nhận những câu thoại chất lừ đến từ Batman.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Head in the Cloud ",
          movieAlias: "head-in-the-cloud",
          movieTrailers:
            "https://www.youtube.com/watch?v=OB3g37GTALc&ab_channel=MarvelVietnam",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/head-in-the-cloud_gp03.jpg",
          movieDescribe:
            'Duboscq patented such an instrument as the "Stéréoscope-fantascope, ou Bïoscope", but he only marketed it very briefly, without success. One Bïoscope disc with stereoscopic photographs of a machine is in the Plateau collection of the Ghent University, but no instruments or other discs have yet been found.',
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "MỒI CÁ MẬP 1",
          movieAlias: "moi-ca-map-1",
          movieTrailers:
            "https://www.youtube.com/watch?v=iDZPSiZEDao&ab_channel=AnhNg%E1%BB%AFKeyMeans",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/moi-ca-map_gp03.jpg",
          movieDescribe:
            'Duboscq patented such an instrumet the "Stéréoscope-fantascope, ou Bïoscope", but he only marketed it very briefly, without success. One Bïoscope disc with stereoscopic photographs of a machine is in the Plateau collection of the Ghent University, but no instruments or other discs have yet been found.',
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Phù thủy tối thượng trong Đa Vũ trụ hỗn loạn 2022",
          movieAlias: "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan-2022",
          movieTrailers: "https://youtu.be/nBNtRvpCmms",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan-2022_gp03.jpg",
          movieDescribe:
            "Phù thủy tối thượng trong Đa Vũ trụ hỗn loạn là 1 bộ phim siêu anh hùng của Mỹ được công chiếu vào năm 2022, phim dựa trên nhân vật Doctor Strange của Marvel Comics",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Đại náo cung trăng",
          movieAlias: "dai-nao-cung-trang",
          movieTrailers: "https://youtu.be/i7TezW5eueI",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/dai-nao-cung-trang-2021_gp03.jpg",
          movieDescribe:
            "Moonbound là bộ phim hài phiêu lưu giả tưởng hoạt hình Đức-Áo năm 2021 của đạo diễn Ali Samadi Ahadi. ",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },

        {
          movieName: "Ant-man",
          movieAlias: "ant-man",
          movieTrailers: "https://www.youtube.com/embed/1HpZevFifuo",
          moviePicture: "http://movieapi.cyberlearn.vn/hinhanh/sonnic_gp04.jpg",
          movieDescribe:
            "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Jurassic World",
          movieAlias: "jurassic-world",
          movieTrailers: "https://www.youtube.com/embed/RFinNxS5KN4",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/jurassicworld.jpg",
          movieDescribe:
            "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Fantastic Four",
          movieAlias: "fantastic-four",
          movieTrailers: "https://www.youtube.com/embed/AAgnQdiZFsQ",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/fantasticfour.jpg",
          movieDescribe:
            "Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Mad Max: Fury Road",
          movieAlias: "mad-max-fury-road",
          movieTrailers: "https://www.youtube.com/embed/hEJnMQG9ev8",
          moviePicture: "http://movieapi.cyberlearn.vn/hinhanh/madmax.jpg",
          movieDescribe:
            "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "The Walking Dead",
          movieAlias: "the-walking-dead",
          movieTrailers: "https://www.youtube.com/embed/R1v0uFms68U",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/thewalkingdead.jpg",
          movieDescribe:
            "Sheriff's Deputy Rick Grimes leads a group of survivors in a world overrun by zombies.",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Southpaw",
          movieAlias: "southpaw",
          movieTrailers: "https://www.youtube.com/embed/Mh2ebPxhoLs",
          moviePicture: "http://movieapi.cyberlearn.vn/hinhanh/southpaw.jpg",
          movieDescribe:
            "Boxer Billy Hope turns to trainer Tick Willis to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Specter",
          movieAlias: "specter",
          movieTrailers: "https://www.youtube.com/embed/LTDaET-JweU",
          moviePicture: "http://movieapi.cyberlearn.vn/hinhanh/spectre.jpg",
          movieDescribe:
            "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
          hot: true,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "vu duc",
          movieAlias: "vu-duc",
          movieTrailers: "https://www.youtube.com/embed/DKqu9qc-5f4",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/avengers-infinity-war.jpg",
          movieDescribe:
            "Biệt đội siêu anh hùng Avengers và những đồng minh sẽ phải sẵn sàng hi sinh tính mạng để chống lại siêu ác nhân hùng mạnh Thanos trước khi hắn phá huỷ mọi thứ và đặt dấu chấm hết cho vũ trụ. ",
          hot: false,
          movieIsPlaying: false,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "RỪNG THẾ MẠNG",
          movieAlias: "rung-the-mang",
          movieTrailers: "https://www.youtube.com/watch?v=5doqbiauNsE",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/rung-the-mang_gp04.jpg",
          movieDescribe:
            'Tà Năng - Phan Dũng, cung đường trekking đẹp nhất Việt Nam với những câu chuyện tâm linh kỳ bí chưa có lời giải đáp. Dù được cảnh báo sự nguy hiểm và "mỗi năm sẽ có người thế mạng", nhưng một phượt thủ trẻ vẫn quyết định tách đoàn để tìm người bạn thân đi lạc. Hơn 10 ngày đêm kiệt quệ, anh không chỉ rơi vào cuộc chiến sinh tồn chốn rừng thiêng nước độc, mà còn đối mặt với những ám ảnh rùng rợn như ai đó từng nói "ma đưa lối, quỷ dẫn đường”…',
          hot: null,
          movieIsPlaying: null,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "RESIDENT EVIL: QUỶ DỮ TRỖI DẬY",
          movieAlias: "resident-evil-quy-du-troi-day",
          movieTrailers: "https://youtu.be/pBnrL0mSUds",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/resident-evil-quy-du-troi-day_gp04.jpg",
          movieDescribe: "Phim hay lam",
          hot: null,
          movieIsPlaying: null,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "CLIFFORD CHÚ CHÓ ĐỎ KHỔNG LỒ",
          movieAlias: "clifford-chu-cho-do-khong-lo",
          movieTrailers: "https://youtu.be/1AZDVKFjh2Q",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/clifford-chu-cho-do-khong-lo_gp04.jpg",
          movieDescribe:
            "Một cô bé nhỏ đã dành thật nhiều tình yêu cho chú cún màu đỏ đặc biệt của mình và sau một đêm chú cún đã hóa khổng lồ. Cuộc hành trình vui nhộn cùng chú chó đỏ khổng lồ bắt đầu từ đây.",
          hot: null,
          movieIsPlaying: null,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Doctor Strange in the Multiverse of Madness",
          movieAlias: "doctor-strange-in-the-multiverse-of-madness",
          movieTrailers: "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/doctor-strange_gp04.jpg",
          movieDescribe:
            "Lỡ tay làm phép khiến đa vũ trụ nảy sinh vấn đề ở Spider-Man: No Way Home, Doctor Strange “trả nghiệp” thế nào trong Doctor Strange In The Multiverse Of Madness? Có thể nói, chưa bao giờ Stephen Strange phải đối mặt với nhiều mối nguy như hiện tại. “Scarlet Witch” Wanda Maximoff tẩy não cả thị trấn (WandaVision), Loki và Sylvie quậy tung Cơ quan quản lí phương sai thời gian (Loki) và đỉnh điểm là điều ước thay đổi quá nhiều lần của Spider-Man Peter Parker khiến mọi thứ vô cùng hỗn loạn. Cố gắng giải quyết vấn đề, Stephen Strange tìm đến Wanda, nhờ cô giúp đỡ. Tuy nhiên, nữ phù thủy vừa trải qua nỗi đau mất đi những người thân yêu cộng thêm tâm tính bất ổn có phải là cộng sự thích hợp? Wanda đáng thương sẽ thành phản diện ở phần này?",
          hot: null,
          movieIsPlaying: null,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "TOP GUN: MAVERICK ",
          movieAlias: "top-gun-maverick",
          movieTrailers: "https://www.youtube.com/watch?v=ZR99nOkEolM",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/top-gun-maverick_gp04.jpg",
          movieDescribe:
            "Pete “Maverick” Mitchell từng nổi danh là một phi công thử nghiệm quả cảm hàng đầu của Hải quân. Sau hơn ba mươi năm phục vụ, anh né tránh cơ hội thăng chức khiến bản thân cảm thấy bị bó buộc, để trở về làm chính mình - một đại úy. Trong đợt đào tạo biệt đội tại trường quân sự Top Gun cho nhiệm vụ chuyên biệt chưa từng có, Maverick chạm trán với Trung úy Bradley Bradshaw (Miles Teller) - con trai của người bạn thân quá cố Nick Bradshaw.   Với nhiệm vụ lần này, không chỉ đối mặt với những thử thách nguy hiểm đến tính mạng, Pete Mitchell còn đối mặt với bóng ma quá khứ, nỗi sợ hãi sâu thẳm trong thâm tâm.",
          hot: null,
          movieIsPlaying: null,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "DORAEMON: NOBITA NO LITTLE WARS 2021 ",
          movieAlias: "doraemon-nobita-no-little-wars-2021",
          movieTrailers: "https://www.youtube.com/watch?v=XsWx71aokYE",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/doraemon-nobita-no-little-wars-2021_gp04.jpg",
          movieDescribe:
            "Tổng thống hành tinh Pirika – Papi trốn đến địa cầu nhằm thoát khỏi sự càn quét của quân phiến loạn. Tình cờ, Nobita nhặt được phi thuyền mini của cậu. Tuy nhiên, chiến hạm vũ trụ hình cá voi đã đuổi theo Papi đến trái đất, tấn công Doraemon và nhóm Nobita hòng bắt sống Papi. Cảm thấy có trách nhiệm vì liên lụy mọi người, Papi quyết định một mình đương đầu với quân phiến loạn tàn ác… Để bảo vệ người bạn quan trọng và quê hương thân thương của Papi, Doraemon và các bạn lên đường đến hành tinh Pirika! Bên cạnh các nhân vật quen thuộc như Doraemon, Nobita, Shizuka, Jaian, Suneo, Dekisugi; chúng ta còn gặp gỡ nhiều gương mặt mới của riêng bộ phim như tổng thống Papi, chị gái Pina, chú cún Locoroco, tên độc tài Gilmore…",
          hot: null,
          movieIsPlaying: null,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "THE LEDGE",
          movieAlias: "the-ledge",
          movieTrailers: "https://www.youtube.com/watch?v=J5SPKIxBDGs",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/trailer-the-ledge_gp04.jpg",
          movieDescribe:
            "Chuyến leo núi thám hiểm của đôi bạn thân bỗng trở thành cơn ác mộng khi bị bốn kẻ sát nhân truy đuổi. Chọn đường nào để sống sót khi trước mặt là vực thẳm và bọn truy sát đã bao vây mọi đường lui?",
          hot: null,
          movieIsPlaying: null,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "MOBILE SUIT GUNDAM: CUCURUZ DOAN'S ISLAND",
          movieAlias: "mobile-suit-gundam-cucuruz-doan-s-island",
          movieTrailers: "https://www.youtube.com/watch?v=oeSS3ZTt6MI",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/mobile-suit-gundam-cucuruz-doan-s-island_gp04.jpg",
          movieDescribe:
            'Bộ phim được chuyển thể từ tập 15 của series anime nổi tiếng Mobile Suit Gundam. Sau trận chiến ở Jaburo, lực lượng liên bang Trái Đất lên kế hoạch cho một chiến dịch đánh chiếm Odessa, trụ sở của Lực lượng tấn công Zeon. Tàu chiến White Base trên đường hướng đến Belfast để tiếp tế thì nhận được một mệnh lệnh mới: tìm đường đến hòn đảo được mệnh danh là "Đảo Một Đi Không Trở Lại"',
          hot: null,
          movieIsPlaying: null,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "EVERYTHING EVERYWHERE ALL AT ONCE ",
          movieAlias: "everything-everywhere-all-at-once",
          movieTrailers: "https://www.youtube.com/watch?v=wxN1 1uxQ2g",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/everything-everywhere-all-at-once_gp04.jpg",
          movieDescribe:
            "Một phụ nữ trung niên nhập cư người Trung Quốc bị cuốn vào một cuộc phiêu lưu kì quái. Giờ đây, cô phải một mình giải cứu thế giới bằng cách khám phá các vũ trụ khác và các bản thể khác của chính cô. Phim mới Everything Everywhere All At Once ra mắt tại các rạp chiếu phim từ 24.06.2022.",
          hot: null,
          movieIsPlaying: null,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
        {
          movieName: "Lightyear2022",
          movieAlias: "lightyear2022",
          movieTrailers: "https://www.youtube.com/watch?v=wHBBoUtJHhA",
          moviePicture:
            "http://movieapi.cyberlearn.vn/hinhanh/lightyear_gp04.jpg",
          movieDescribe:
            "Bộ phim kể về chuyến hành trình hành động kết hợp khoa học viễn tưởng nhằm giới thiệu câu chuyện về nguồn gốc của nhân vật Buzz Lightyear — người anh hùng đã truyền cảm hứng sáng tạo ra Toy Story. “Lightyear” sẽ theo chân Cảnh Sát Vũ Trụ huyền thoại trong cuộc hành trình bước ra ngoài không gian cùng với một nhóm chiến binh đầy tham vọng và người bạn đồng hành là chú mèo máy Sox. Phim mới Lightyear ra mắt tại các rạp chiếu phim từ 17.06.2022.",
          hot: null,
          movieIsPlaying: null,
          createdAt: "2022-02-02 13:24:25",
          updatedAt: "2022-03-03 14:25:36",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
