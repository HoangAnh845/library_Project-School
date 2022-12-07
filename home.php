<?php
    // include "ketnoi.php"; // Include được dùng để chèn một file PHP vào một file PHP khác
?>
<?php
    // // Kết nối CSDL
    $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
    mysqli_set_charset($conn, "utf8");

    // // Lấy dữ liệu từ form đăng ký
    // $username = isset($_POST['username']) ? ($_POST['username']) : '';
    // $email = isset($_POST['email']) ? ($_POST['email']) : '';

    // // xử lý phần đăng ký
    // if (isset($_POST['dangky'])) {
    //     // Hàm isset này trả về true nếu biến tồn tại và không phải là NULL, ngược lại, nó trả về false.
    //     // $ _POST là một biến siêu toàn cục PHP được sử dụng để thu thập dữ liệu biểu mẫu sau khi gửi biểu mẫu HTML với method = "post". $ _POST cũng được sử dụng rộng rãi để chuyển các biến.

    //     //Kiểm tra tên đăng nhập này đã có người dùng chưa
    //     if (mysqli_num_rows(mysqli_query($conn,"SELECT User FROM member WHERE User='$username'")) > 0){
    //         // Hàm mysqli_num_rows () trả về số hàng trong tập kết quả.
    //         // Hàm mysqli_query () thực hiện một truy vấn đối với cơ sở dữ liệu.
    //         echo '<script language="javascript">alert("Tên đăng nhập này đã có người sử dụng"); window.location="home.php";</script>';
    //         exit;
    //     }

    // }



?>




<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="style.css" />
    <title>Thư viện sách online</title>
    <link rel="icon" type="images/png" href="img/icon/ok.ico">
    <link rel="stylesheet" href="css/include.main.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
    <script src='https://cdn.inevn.com/js/jquery.main.isj'></script>
    <script src='https://cdn.inevn.com/js/include.core.isj'></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <script type="module">
        
        import {
            header,
            footer,
            banner,
            menu,
            nav,
            đăngNhập,
            đăngKý,
            loadXuLy,
            bốCục_inWeek,
            bốCục_BXH,
            bốCục_new,
            bốCục_most,
            bốCục_speak,
            bốCục_advice,
            bốCục_Menu,
            bốCục_môTả,
            
        } from "http://localhost:8080/Test/js/display.js";
        import { dataBook } from "http://localhost:8080/Test/js/data.js";
        // import { inWeek, bxh, release, newBook } from "http://localhost:8080/Test/js/slider.js";
        $(function() {
            tảiTrước({
                dữLiệu: { // Cấu hình sử dụng các package riêng
                    js: ["package.hanu"],
                    css: ["package.all"]
                },
                biểuTượng: "http://localhost:8080/Test/img/icon/book_logo.png", // Logo chờ
                chờ: 400, //tạo độ trễ khi vào xem nội dung (đảm bảo nội dung render đầy đủ)
                koChe: false, // Hiệu ứng chờ
                màuNền: "#8BA3B7", // Màu nền chờ
                riêng: true, // tải theo thư viện khác
                // cache: true, // tải cache các file package
                xong: function() {
                    // Cấu hình xong
                        $("body").iStyle(Chíp.làmMàu(["#1ba085", "#A18942", "#C38369", "#8BD0DE"]));
                        var d = new Date(),
                            month = d.getMonth() + 1,
                            year = d.getFullYear();
                        $('#wapper').empty().append(
                        // Giao diên phần đầu 
                            header(),

                           
                            // Main
                            $('<main>', { class: 'pr' }).append(
                                // Danh mục thể loại sách
                                menu(),
                                $('<div>', { class: 'thân mr14 bgcd8 pr' }).append(
                                    $('<div>', { class: 'container plr25 đọcSách' }),
                                    $('<div>', { class: 'container plr25 nộiDung'}).append(
                                        // Slider banner
                                        banner(),
                                        // Hôm nay đọc gì ?
                                        $('<div>', { class: 'mt15 pr' }).append(
                                            $('<img>', {
                                                class: 'w1 h150',
                                                src: 'img/bannerButton.jpg'
                                            }),
                                            $('<a>', {
                                                class: 'banner_button_h',
                                                text: 'Khám phá ngay'
                                            }).css({

                                            })
                                        ),
                                        // Thư viện sách online
                                        $('<div>', { class: 'chuyênMục' }),
                                        $('<div>', { class: 'mtb15 pr dsBook' }).append(
                                            // Mới trong tuần
                                            bốCục_inWeek("1"),
                                            // BXH Tháng
                                            bốCục_BXH("1"),
                                            // Lịch phát hành sách
                                            $('<div>', { class: 'pa15 bg4 cf df mb15 aic'}).append(
                                                $('<div>', {
                                                    class: 'pr wh150 pt35'
                                                }).append(
                                                    ['left-top-corner', 'right-top-corner', 'right-bottom-corner', 'left-bottom-corner'].map(function(i) {
                                                        return $('<div>', {
                                                            class: 'pa ' + i
                                                        })
                                                    }),
                                                    $('<div>', {
                                                        class: "wh150 tac"
                                                    }).append(
                                                        $('<p>', {
                                                            class: 'fs13',
                                                            text: 'Lịch Phát Hành'
                                                        }),
                                                        [{
                                                            class: 'wh20 dib b1sd mb5 bt0 blr0 mr5'
                                                        }, {
                                                            class: 'fs13 dib mtb15',
                                                            text: '2022'
                                                        }, {
                                                            class: 'wh20 dib b1sd mb5 bt0 blr0 ml5'
                                                        }, {
                                                            class: 'db fs2',
                                                            text: 'Tháng 10'
                                                        }].map(function(i) {
                                                            return $('<c>', {
                                                                class: i.class,
                                                                text: i.text
                                                            })
                                                        })
                                                    )
                                                ),
                                                // Mốc thời gian phát hành col-md-10 
                                                $('<div>', {
                                                    id: 'release',
                                                    class: 'plr25 pt15 swiper'
                                                }).append(
                                                    $('<div>', {
                                                        class: 'swiper-wrapper'
                                                    }).append(
                                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function() {
                                                            return $('<div>', {
                                                                class: 'bra3 pa15 df bgcf swiper-slide'
                                                            }).append(
                                                                $('<div>', {
                                                                    class: 'bg4 pa7 tac lh13 bra3'
                                                                }).append(
                                                                    $('<div>', {
                                                                        class: '',
                                                                        text: 'Thứ 5'
                                                                    }),
                                                                    $('<div>', {
                                                                        class: 'fwb fs12',
                                                                        text: '01/09'
                                                                    }),
                                                                ),
                                                                $('<div>', {
                                                                    class: 'c3 plr10 tal pt7',
                                                                    text: 'Yêu lại từ đầu'
                                                                })
                                                            )
                                                        }),
                                                    ),
                                                    $('<div>', {
                                                        class: 'swiper-scrollbar'
                                                    })
                                                ),

                                            ),
                                            // Sách đọc nhiều nhất 
                                            bốCục_most("1"),
                                            // Sách mới nhất 
                                            bốCục_new("1"),
                                            // Sách nghe
                                            bốCục_speak("1"),
                                            // Sách khuyên đọc
                                            bốCục_advice("1")
                                        ).each(function() {
                                            var ths = $(this);
                                            ths.find('.baiViet').on('click', function() {
                                                var thsd = $(this);
                                                loadXuLy();
                                                chờ(function () {
                                                    $(".loadTr").sửaLớp('dn');
                                                    var tenSach = thsd.iVal(),
                                                        khungBoc = thsd.closest('.khungBoc'),
                                                        tieuDe = khungBoc.find('.titles').iVal(),
                                                        thanS = thsd.closest('.thân'),
                                                        inWeeks = tieuDe == "Mới trong tuần",
                                                        bxhs = tieuDe == "BXH tháng",
                                                        news = tieuDe == "Sách mới nhất";
                                                    thanS.find('.nộiDung').sửaLớp('dn');
                                                    thanS.find('.đọcSách').sửaLớp('-dn');
                                                    cuộn(0);

                                                    thanS.find('.đọcSách').empty().append(
                                                        bốCục_môTả(inWeeks ? "inWeek" : bxhs ? "bxh" : news ? "new" : "",tenSach),
                                                    );


                                                    // Slider
                                                    var myAdvice = new Swiper(".myAdvice", { // sách khuyên đọc
                                                        slidesPerView: 5,
                                                        spaceBetween: 50,
                                                        pagination: {
                                                            el: ".swiper-pagination",
                                                            clickable: true,
                                                        },
                                                        navigation: {
                                                            nextEl: ".swiper-button-next",
                                                            prevEl: ".swiper-button-prev",
                                                        },
                                                    });
                                                }, 1200)
                                            

                                               
                                            })

                                        })
                                    ),
                                    // Những câu nói của các nhà nổi tiếng 
                                    $('<div>', {
                                        id: 'sayings',
                                        class: 'w1 h150 mt15 bg1 '
                                    }).append(
                                        $('<div>', {
                                            class: 'tac h1 df aic acc cf fww '
                                        }).append(
                                            $('<div>', {
                                                class: 'fs15 w1 fwb',
                                                text: '_ Hành trình về Phương Đông, Baird T. Spalding_'
                                            }),
                                            $('<div>', {
                                                class: 'mt10 w50 mlra',
                                                text: 'Trở ngại lớn nhất của những người luyện tâm rèn chí là sự kiêu ngạo và óc chỉ trích…Trở ngại thứ hai là sự nông nổi, làm điều này chua xong đã nhảy sang việc khác'
                                            })
                                        )
                                    )
                                )
                            ).each(function(){
                                var ths = $(this),
                                    noiDung = ths.find(".nộiDung"),
                                    docSach = ths.find(".đọcSách"),
                                    inWeek = ths.find("#inWeek"),
                                    bxh = ths.find("#bxh"),
                                    news = ths.find("#new"),
                                    thLoai = ths.find(".thểLoại"),
                                    tieuDe = inWeek.find(".book_MTH");

                                // Thể loại tình cảm
                                thLoai.find("#tinhCam").click(function(){
                                    $('.nộiDung').sửaLớp('dn');
                                    $('.đọcSách').sửaLớp('-dn');
                                    cuộn(0);
                                    $('.đọcSách').empty().append(
                                        $("<div>", { class: 'container ptb15 plr7' }).append(
                                            $('<div>', { class: 'mt25 df fww jcfs' }).append(
                                                <?php
                                                    // Kết nối CSDL
                                                    $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
                                                    mysqli_set_charset($conn, "utf8");                                    
                                                    $sql = "SELECT Id, Name, Author, Publisher, img_link, Dibe, Category, Date, Detail, Location, Form FROM ebook WHERE  Location='Sách thể loại' AND Category='Tình cảm';";
                                                    $result = $conn->query($sql);
                                                    // Hiển thị dữ liệu sách trong tuần
                                                    if ($result->num_rows > 0) {
                                                        // Load dữ liệu lên website
                                                        while($row = $result->fetch_assoc()) {
                                                            echo "bốCục_Menu('". $row["Id"] ."','" .$row["Name"] . "','" . $row["img_link"] . "','" . $row["Category"] . "','" . $row["Author"] . "','" . $row["Publisher"] . "','" . $row["Date"] . "','" . $row["Dibe"] . "','" . $row["Detail"] . "','" . $row["Location"] . "','" . $row["Form"] . "','" . 'tinhCam' ."'),";
                                                        }              
                                                    }
                                                ?>
                                            )
                                        )
                                    )
                                });

                                // Thể loại bí ẩn
                                thLoai.find("#biAn").click(function(){
                                    $('.nộiDung').sửaLớp('dn');
                                    $('.đọcSách').sửaLớp('-dn');
                                    cuộn(0);
                                    $('.đọcSách').empty().append(
                                        $("<div>", { class: 'container ptb15 plr7' }).append(
                                            $('<div>', { class: 'mt25 df fww jcfs' }).append(
                                                <?php
                                                    // Kết nối CSDL
                                                    $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
                                                    mysqli_set_charset($conn, "utf8");                                    
                                                    $sql = "SELECT Id, Name, Author, Publisher, img_link, Dibe, Category, Date, Detail, Location, Form FROM ebook WHERE  Location='Sách thể loại' AND Category='Bí ẩn';";
                                                    $result = $conn->query($sql);
                                                    // Hiển thị dữ liệu sách trong tuần
                                                    if ($result->num_rows > 0) {
                                                        // Load dữ liệu lên website
                                                        while($row = $result->fetch_assoc()) {
                                                            echo "bốCục_Menu('". $row["Id"] ."','" .$row["Name"] . "','" . $row["img_link"] . "','" . $row["Category"] . "','" . $row["Author"] . "','" . $row["Publisher"] . "','" . $row["Date"] . "','" . $row["Dibe"] . "','" . $row["Detail"] . "','" . $row["Location"] . "','" . $row["Form"] . "','" . 'biAn' ."'),";
                                                        }              
                                                    }
                                                ?>
                                            )
                                        )
                                    )
                                });
                                
                                // Thể loại kỹ năng
                                thLoai.find("#kyNang").click(function(){
                                    $('.nộiDung').sửaLớp('dn');
                                    $('.đọcSách').sửaLớp('-dn');
                                    cuộn(0);
                                    $('.đọcSách').empty().append(
                                        $("<div>", { class: 'container ptb15 plr7' }).append(
                                            $('<div>', { class: 'mt25 df fww jcfs' }).append(
                                                <?php
                                                    // Kết nối CSDL
                                                    $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
                                                    mysqli_set_charset($conn, "utf8");                                    
                                                    $sql = "SELECT Id, Name, Author, Publisher, img_link, Dibe, Category, Date, Detail, Location, Form FROM ebook WHERE  Location='Sách thể loại' AND Category='Kỹ năng';";
                                                    $result = $conn->query($sql);
                                                    // Hiển thị dữ liệu sách trong tuần
                                                    if ($result->num_rows > 0) {
                                                        // Load dữ liệu lên website
                                                        while($row = $result->fetch_assoc()) {
                                                            echo "bốCục_Menu('". $row["Id"] ."','" .$row["Name"] . "','" . $row["img_link"] . "','" . $row["Category"] . "','" . $row["Author"] . "','" . $row["Publisher"] . "','" . $row["Date"] . "','" . $row["Dibe"] . "','" . $row["Detail"] . "','" . $row["Location"] . "','" . $row["Form"] . "','" . 'kyNang' ."'),";
                                                        }              
                                                    }
                                                ?>
                                            )
                                        )
                                    )
                                });

                                // Thể loại kinh dị
                                thLoai.find("#kinhDi").click(function(){
                                    $('.nộiDung').sửaLớp('dn');
                                    $('.đọcSách').sửaLớp('-dn');
                                    cuộn(0);
                                    $('.đọcSách').empty().append(
                                        $("<div>", { class: 'container ptb15 plr7' }).append(
                                            $('<div>', { class: 'mt25 df fww jcfs' }).append(
                                                <?php
                                                    // Kết nối CSDL
                                                    $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
                                                    mysqli_set_charset($conn, "utf8");                                    
                                                    $sql = "SELECT Id, Name, Author, Publisher, img_link, Dibe, Category, Date, Detail, Location, Form FROM ebook WHERE  Location='Sách thể loại' AND Category='Kinh dị';";
                                                    $result = $conn->query($sql);
                                                    // Hiển thị dữ liệu sách trong tuần
                                                    if ($result->num_rows > 0) {
                                                        // Load dữ liệu lên website
                                                        while($row = $result->fetch_assoc()) {
                                                            echo "bốCục_Menu('". $row["Id"] ."','" .$row["Name"] . "','" . $row["img_link"] . "','" . $row["Category"] . "','" . $row["Author"] . "','" . $row["Publisher"] . "','" . $row["Date"] . "','" . $row["Dibe"] . "','" . $row["Detail"] . "','" . $row["Location"] . "','" . $row["Form"] . "','" . 'kinhDi' ."'),";
                                                        }              
                                                    }
                                                ?>
                                            )
                                        )
                                    )
                                });

                                //Thể loại Tự truyện
                                thLoai.find("#tuTruyen").click(function(){
                                    $('.nộiDung').sửaLớp('dn');
                                    $('.đọcSách').sửaLớp('-dn');
                                    cuộn(0);
                                    $('.đọcSách').empty().append(
                                        $("<div>", { class: 'container ptb15 plr7' }).append(
                                            $('<div>', { class: 'mt25 df fww jcfs' }).append(
                                                <?php
                                                    // Kết nối CSDL
                                                    $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
                                                    mysqli_set_charset($conn, "utf8");                                    
                                                    $sql = "SELECT Id, Name, Author, Publisher, img_link, Dibe, Category, Date, Detail, Location, Form FROM ebook WHERE  Location='Sách thể loại' AND Category='Tự truyện';";
                                                    $result = $conn->query($sql);
                                                    // Hiển thị dữ liệu sách trong tuần
                                                    if ($result->num_rows > 0) {
                                                        // Load dữ liệu lên website
                                                        while($row = $result->fetch_assoc()) {
                                                            echo "bốCục_Menu('". $row["Id"] ."','" .$row["Name"] . "','" . $row["img_link"] . "','" . $row["Category"] . "','" . $row["Author"] . "','" . $row["Publisher"] . "','" . $row["Date"] . "','" . $row["Dibe"] . "','" . $row["Detail"] . "','" . $row["Location"] . "','" . $row["Form"] . "','" . 'tuTruyen' ."'),";
                                                        }              
                                                    }
                                                ?>
                                            )
                                        )
                                    )
                                });

                                // Thể loại truyện Ngắn
                                thLoai.find("#trNgan").click(function(){
                                    $('.nộiDung').sửaLớp('dn');
                                    $('.đọcSách').sửaLớp('-dn');
                                    cuộn(0);
                                    $('.đọcSách').empty().append(
                                        $("<div>", { class: 'container ptb15 plr7' }).append(
                                            $('<div>', { class: 'mt25 df fww jcfs' }).append(
                                                <?php
                                                    // Kết nối CSDL
                                                    $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
                                                    mysqli_set_charset($conn, "utf8");                                    
                                                    $sql = "SELECT Id, Name, Author, Publisher, img_link, Dibe, Category, Date, Detail, Location, Form FROM ebook WHERE  Location='Sách thể loại' AND Category='Truyện ngắn';";
                                                    $result = $conn->query($sql);
                                                    // Hiển thị dữ liệu sách trong tuần
                                                    if ($result->num_rows > 0) {
                                                        // Load dữ liệu lên website
                                                        while($row = $result->fetch_assoc()) {
                                                            echo "bốCục_Menu('". $row["Id"] ."','" .$row["Name"] . "','" . $row["img_link"] . "','" . $row["Category"] . "','" . $row["Author"] . "','" . $row["Publisher"] . "','" . $row["Date"] . "','" . $row["Dibe"] . "','" . $row["Detail"] . "','" . $row["Location"] . "','" . $row["Form"] . "','" . 'trNgan' ."'),";
                                                        }              
                                                    }
                                                ?>
                                            )
                                        )
                                    )
                                });

                                // Thể loại sức khỏe
                                thLoai.find("#sucKhoe").click(function(){
                                    $('.nộiDung').sửaLớp('dn');
                                    $('.đọcSách').sửaLớp('-dn');
                                    cuộn(0);
                                    $('.đọcSách').empty().append(
                                        $("<div>", { class: 'container ptb15 plr7' }).append(
                                            $('<div>', { class: 'mt25 df fww jcfs' }).append(
                                                <?php
                                                    // Kết nối CSDL
                                                    $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
                                                    mysqli_set_charset($conn, "utf8");                                    
                                                    $sql = "SELECT Id, Name, Author, Publisher, img_link, Dibe, Category, Date, Detail, Location, Form FROM ebook WHERE  Location='Sách thể loại' AND Category='Chăm sóc';";
                                                    $result = $conn->query($sql);
                                                    // Hiển thị dữ liệu sách trong tuần
                                                    if ($result->num_rows > 0) {
                                                        // Load dữ liệu lên website
                                                        while($row = $result->fetch_assoc()) {
                                                            echo "bốCục_Menu('". $row["Id"] ."','" .$row["Name"] . "','" . $row["img_link"] . "','" . $row["Category"] . "','" . $row["Author"] . "','" . $row["Publisher"] . "','" . $row["Date"] . "','" . $row["Dibe"] . "','" . $row["Detail"] . "','" . $row["Location"] . "','" . $row["Form"] . "','" . 'sucKhoe' ."'),";
                                                        }              
                                                    }
                                                ?>
                                            )
                                        )
                                    )
                                });

                                // Thể loại thiếu nhi
                                 thLoai.find("#thieuNhi").click(function(){
                                    $('.nộiDung').sửaLớp('dn');
                                    $('.đọcSách').sửaLớp('-dn');
                                    cuộn(0);
                                    $('.đọcSách').empty().append(
                                        $("<div>", { class: 'container ptb15 plr7' }).append(
                                            $('<div>', { class: 'mt25 df fww jcfs' }).append(
                                                <?php
                                                    // Kết nối CSDL
                                                    $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
                                                    mysqli_set_charset($conn, "utf8");                                    
                                                    $sql = "SELECT Id, Name, Author, Publisher, img_link, Dibe, Category, Date, Detail, Location, Form FROM ebook WHERE  Location='Sách thể loại' AND Category='Thiếu nhi';";
                                                    $result = $conn->query($sql);
                                                    // Hiển thị dữ liệu sách trong tuần
                                                    if ($result->num_rows > 0) {
                                                        // Load dữ liệu lên website
                                                        while($row = $result->fetch_assoc()) {
                                                            echo "bốCục_Menu('". $row["Id"] ."','" .$row["Name"] . "','" . $row["img_link"] . "','" . $row["Category"] . "','" . $row["Author"] . "','" . $row["Publisher"] . "','" . $row["Date"] . "','" . $row["Dibe"] . "','" . $row["Detail"] . "','" . $row["Location"] . "','" . $row["Form"] . "','" . 'thieuNhi' ."'),";
                                                        }              
                                                    }
                                                ?>
                                            )
                                        )
                                    )
                                });

                                // Thể loại giả tưởng
                                thLoai.find("#giaTuong").click(function(){
                                    $('.nộiDung').sửaLớp('dn');
                                    $('.đọcSách').sửaLớp('-dn');
                                    cuộn(0);
                                    $('.đọcSách').empty().append(
                                        $("<div>", { class: 'container ptb15 plr7' }).append(
                                            $('<div>', { class: 'mt25 df fww jcfs' }).append(
                                                <?php
                                                    // Kết nối CSDL
                                                    $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
                                                    mysqli_set_charset($conn, "utf8");                                    
                                                    $sql = "SELECT Id, Name, Author, Publisher, img_link, Dibe, Category, Date, Detail, Location, Form FROM ebook WHERE  Location='Sách thể loại' AND Category='Giả tưởng';";
                                                    $result = $conn->query($sql);
                                                    // Hiển thị dữ liệu sách trong tuần
                                                    if ($result->num_rows > 0) {
                                                        // Load dữ liệu lên website
                                                        while($row = $result->fetch_assoc()) {
                                                            echo "bốCục_Menu('". $row["Id"] ."','" .$row["Name"] . "','" . $row["img_link"] . "','" . $row["Category"] . "','" . $row["Author"] . "','" . $row["Publisher"] . "','" . $row["Date"] . "','" . $row["Dibe"] . "','" . $row["Detail"] . "','" . $row["Location"] . "','" . $row["Form"] . "','" . 'giaTuong' ."'),";
                                                        }              
                                                    }
                                                ?>
                                            )
                                        )
                                    )
                                });

                                // Hiển thị dữ liệu sách mới trong tuần
                                inWeek.empty().append(
                                    <?php
                                        // Kết nối CSDL
                                        $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
                                        mysqli_set_charset($conn, "utf8");                                    
                                        $sql = "SELECT Id, Name, Author, Publisher, img_link, Dibe, Category, Date, Detail, Location, Form FROM ebook WHERE  Location='Mới trong tuần';";
                                        $result = $conn->query($sql);
                                        // Hiển thị dữ liệu sách trong tuần
                                        if ($result->num_rows > 0) {
                                            // Load dữ liệu lên website
                                            while($row = $result->fetch_assoc()) {
                                                // echo "tieuDeS.iVal('')"
                                                // echo "cl('".$row["Describe"] ."');";
                                                // echo "cl('".$row["Author"] ."');";
                                                // echo "cl('".$row["img_link"] ."');";
                                              echo " $('<div>', { class: 'ohi bra5 bóng b1sd pr ha mlra df fdc swiper-slide hmni khoiSach', style: 'height:inherit;'}).append(".
                                                   " $('<div>', { class: ' bgpc bgrn bgsc wh1 pa t0', style: 'background-image:url(img/wden_bkgd.jpg)' }),".
                                                    // Bìa sách
                                                    " $('<div>', { class: 'tac pr' }).append(".
                                                      "  $('<img>', { class: 'pr z1 book cpi mlra', src: 'img/trongTuần/". $row["img_link"] ."'}),".
                                                       " $('<div>', { class: 'w1 h1 pa t0 bgpc bgrn bgsc cpi ' }).append(".
                                                            "$('<div>', { class: 'banner_bookh pr z1 wh1 df aic jcsc bgc05 dn' }).append(".
                                                               " $('<a>', { class: 'dib', target: '_self' }).append($.icon('import_contacts::bgcf cl1 pa15 bra50 fs2'))".
                                                    "))),".
                                                    // Mô tả
                                                   " $('<div>', { class: 'pr book_MTH bgcf' }).append(".
                                                        "$('<div>', { class: 'pt15 plr15 pr z1 tal' }).append(".
                                                            "$('<div>', { class: 'wbox fwb fs09 mb15 cpi tduh baiViet cl1h', rows: '1', tip:'". $row["Name"] ."', html: '". $row["Name"] ."' }) .click(function(){".
                                                            "noiDung.sửaLớp('dn');".
                                                            "docSach.sửaLớp('-dn');".
                                                            "cuộn(0);".
                                                            "docSach.empty().append(".
                                                            "bốCục_môTả('". $row["Id"] ."','" .$row["Name"] . "','" . $row["img_link"] . "','" . $row["Category"] . "','" . $row["Author"] . "','" . $row["Publisher"] . "','" . $row["Date"] . "','" . $row["Dibe"] . "','" . $row["Detail"] . "','" . $row["Location"] . "','" . $row["Form"] . "','" . 'inWeek' ."')". ");".
                                                              // Slider
                                                            "var myAdvice = new Swiper('.myAdvice', {".
                                                                "slidesPerView: 5, spaceBetween: 50,".
                                                                "pagination: { el: '.swiper-pagination', clickable: true, },".
                                                                "navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',},".
                                                            "});".

                                                            " }),".
                                                            "$('<div>', { class: 'wbox fs07', rows: '3', html: '". $row["Dibe"] ."'}),".
                                                            "$('<div>', { class: 'ptb10 w1 b1sd blr0 bb0 mt10 ' }).append($('<c>', { class: 'dib c9 fs05 cpi cl1h tduh ttu tar w1', text: '". $row["Author"] ."' })),".
                                                    ")))".
                                                ".hover(function () {".
                                                   " $(this).find('.banner_bookh').sửaLớp('db,-dn');".
                                                   " $(this).find('.book_MTH').sửaLớp('b1sd,bt0,bc1');".
                                              "  }, function () {".
                                                    "$(this).find('.banner_bookh').sửaLớp('dn,-db');".
                                                   " $(this).find('.book_MTH').sửaLớp('-b1sd,-bt0,-bc1');".
                                                "}),";
                                            }
                                        }
                                    ?>
                                ),

                                // Hiển thị dữ liệu sách trong bxh
                                bxh.empty().append(
                                    <?php
                                        // Kết nối CSDL
                                        $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
                                        mysqli_set_charset($conn, "utf8");                                    
                                        $sql = "SELECT Id, Name, Author, Publisher, img_link, Dibe, Category, Date, Detail, Location, Form FROM ebook WHERE  Location='Xếp hạng trong tháng';";
                                        $result = $conn->query($sql);
                                        // Hiển thị dữ liệu sách trong tuần
                                        if ($result->num_rows > 0) {
                                            // Load dữ liệu lên website
                                            while($row = $result->fetch_assoc()) {
                                              echo " $('<div>', { class: 'ohi bra5 bóng b1sd pr ha mlra df fdc swiper-slide hmni khoiSach', style: 'height:inherit;'}).append(".
                                                   " $('<div>', { class: ' bgpc bgrn bgsc wh1 pa t0', style: 'background-image:url(img/wden_bkgd.jpg)' }),".
                                                    // Bìa sách
                                                    " $('<div>', { class: 'tac pr' }).append(".
                                                      "  $('<img>', { class: 'pr z1 book cpi mlra', src: 'img/bxhSách/". $row["img_link"] ."'}),".
                                                       " $('<div>', { class: 'w1 h1 pa t0 bgpc bgrn bgsc cpi ' }).append(".
                                                            "$('<div>', { class: 'banner_bookh pr z1 wh1 df aic jcsc bgc05 dn' }).append(".
                                                               " $('<a>', { class: 'dib', target: '_self' }).append($.icon('import_contacts::bgcf cl1 pa15 bra50 fs2'))".
                                                    "))),".
                                                    // Mô tả
                                                   " $('<div>', { class: 'pr book_MTH bgcf' }).append(".
                                                        "$('<div>', { class: 'pt15 plr15 pr z1 tal' }).append(".
                                                            "$('<div>', { class: 'wbox fwb fs09 mb15 cpi tduh baiViet cl1h', rows: '1', tip:'". $row["Name"] ."', html: '". $row["Name"] ."' }) .click(function(){".
                                                            "noiDung.sửaLớp('dn');".
                                                            "docSach.sửaLớp('-dn');".
                                                            "cuộn(0);".
                                                            "docSach.empty().append(".
                                                            "bốCục_môTả('". $row["Id"] ."','" .$row["Name"] . "','" . $row["img_link"] . "','" . $row["Category"] . "','" . $row["Author"] . "','" . $row["Publisher"] . "','" . $row["Date"] . "','" . $row["Dibe"] . "','" . $row["Detail"] . "','" . $row["Location"] . "','" . $row["Form"] . "','" . 'bxh' ."')". ");".
                                                              // Slider
                                                            "var myAdvice = new Swiper('.myAdvice', {".
                                                                "slidesPerView: 5, spaceBetween: 50,".
                                                                "pagination: { el: '.swiper-pagination', clickable: true, },".
                                                                "navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',},".
                                                            "});".

                                                            " }),".
                                                            "$('<div>', { class: 'wbox fs07', rows: '3', html: '". $row["Dibe"] ."'}),".
                                                            "$('<div>', { class: 'ptb10 w1 b1sd blr0 bb0 mt10 ' }).append($('<c>', { class: 'dib c9 fs05 cpi cl1h tduh ttu tar w1', text: '". $row["Author"] ."' })),".
                                                    ")))".
                                                ".hover(function () {".
                                                   " $(this).find('.banner_bookh').sửaLớp('db,-dn');".
                                                   " $(this).find('.book_MTH').sửaLớp('b1sd,bt0,bc1');".
                                              "  }, function () {".
                                                    "$(this).find('.banner_bookh').sửaLớp('dn,-db');".
                                                   " $(this).find('.book_MTH').sửaLớp('-b1sd,-bt0,-bc1');".
                                                "}),";
                                            }
                                        }
                                    ?>
                                )

                                // Hiển thị dữ liệu sách mới nhất
                                news.empty().append(
                                    <?php
                                        // Kết nối CSDL
                                        $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
                                        mysqli_set_charset($conn, "utf8");                                    
                                        $sql = "SELECT Id, Name, Author, Publisher, img_link, Dibe, Category, Date, Detail, Location, Form FROM ebook WHERE  Location='Sách mới nhất';";
                                        $result = $conn->query($sql);
                                        // Hiển thị dữ liệu sách trong tuần
                                        if ($result->num_rows > 0) {
                                            // Load dữ liệu lên website
                                            while($row = $result->fetch_assoc()) {
                                              echo " $('<div>', { class: 'ohi bra5 bóng b1sd pr ha mlra df fdc swiper-slide hmni khoiSach', style: 'height:inherit;'}).append(".
                                                   " $('<div>', { class: ' bgpc bgrn bgsc wh1 pa t0', style: 'background-image:url(img/wden_bkgd.jpg)' }),".
                                                    // Bìa sách
                                                    " $('<div>', { class: 'tac pr' }).append(".
                                                      "  $('<img>', { class: 'pr z1 book cpi mlra', src: 'img/sáchMới/". $row["img_link"] ."'}),".
                                                       " $('<div>', { class: 'w1 h1 pa t0 bgpc bgrn bgsc cpi ' }).append(".
                                                            "$('<div>', { class: 'banner_bookh pr z1 wh1 df aic jcsc bgc05 dn' }).append(".
                                                               " $('<a>', { class: 'dib', target: '_self' }).append($.icon('import_contacts::bgcf cl1 pa15 bra50 fs2'))".
                                                    "))),".
                                                    // Mô tả
                                                   " $('<div>', { class: 'pr book_MTH bgcf' }).append(".
                                                        "$('<div>', { class: 'pt15 plr15 pr z1 tal' }).append(".
                                                            "$('<div>', { class: 'wbox fwb fs09 mb15 cpi tduh baiViet cl1h', rows: '1', tip:'". $row["Name"] ."', html: '". $row["Name"] ."' }) .click(function(){".
                                                            "noiDung.sửaLớp('dn');".
                                                            "docSach.sửaLớp('-dn');".
                                                            "cuộn(0);".
                                                            "docSach.empty().append(".
                                                            "bốCục_môTả('". $row["Id"] ."','" .$row["Name"] . "','" . $row["img_link"] . "','" . $row["Category"] . "','" . $row["Author"] . "','" . $row["Publisher"] . "','" . $row["Date"] . "','" . $row["Dibe"] . "','" . $row["Detail"] . "','" . $row["Location"] . "','" . $row["Form"] . "','" . 'new' ."')". ");".
                                                              // Slider
                                                            "var myAdvice = new Swiper('.myAdvice', {".
                                                                "slidesPerView: 5, spaceBetween: 50,".
                                                                "pagination: { el: '.swiper-pagination', clickable: true, },".
                                                                "navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',},".
                                                            "});".

                                                            " }),".
                                                            "$('<div>', { class: 'wbox fs07', rows: '3', html: '". $row["Dibe"] ."'}),".
                                                            "$('<div>', { class: 'ptb10 w1 b1sd blr0 bb0 mt10 ' }).append($('<c>', { class: 'dib c9 fs05 cpi cl1h tduh ttu tar w1', text: '". $row["Author"] ."' })),".
                                                    ")))".
                                                ".hover(function () {".
                                                   " $(this).find('.banner_bookh').sửaLớp('db,-dn');".
                                                   " $(this).find('.book_MTH').sửaLớp('b1sd,bt0,bc1');".
                                              "  }, function () {".
                                                    "$(this).find('.banner_bookh').sửaLớp('dn,-db');".
                                                   " $(this).find('.book_MTH').sửaLớp('-b1sd,-bt0,-bc1');".
                                                "}),";
                                            }
                                        }
                                    ?>
                                )
                               
                            }),
                            // Footer
                            footer(),
                            // Mục điều hướng nhỏ
                            nav(),
                        )

                        <?php
                            //Khai báo utf-8 để hiển thị được tiếng việt
                            // header('Content-Type: text/html; charset=UTF-8');

                            // Kết nối CSDL
                            $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
                            mysqli_set_charset($conn, "utf8");

                          
                            if (isset($_POST['dangky'])) { // xử lý phần đăng ký
                                // Hàm isset này trả về true nếu biến tồn tại và không phải là NULL, ngược lại, nó trả về false.
                                // $ _POST là một biến siêu toàn cục PHP được sử dụng để thu thập dữ liệu biểu mẫu sau khi gửi biểu mẫu HTML với method = "post". $ _POST cũng được sử dụng rộng rãi để chuyển các biến.

                                // Lấy dữ liệu từ form đăng ký
                                $username = isset($_POST['username']) ? ($_POST['username']) : '';
                                $fullname = isset($_POST['fullname']) ? ($_POST['fullname']) : '';
                                $password = isset($_POST['password']) ? ($_POST['password']) : '';
                                $email = isset($_POST['email']) ? ($_POST['email']) : '';
                                $birthday = isset($_POST['birthday']) ? ($_POST['birthday']) : '';
                                $gender = isset($_POST['gender']) ? ($_POST['gender']) : '';
                                $purpose = isset($_POST['purpose']) ? ($_POST['purpose']) : '';
                                $phone = isset($_POST['phone']) ? ($_POST['phone']) : '';


                                // Thực thi câu truy vấn thêm dữ liệu vào bảng
                                $sql = "INSERT INTO member VALUES('', '$username', '$fullname','$password','$email', '$birthday','$gender','$purpose','$phone')";
                                // $sql = "UPDATE member SET Birtday  = '$birthday' WHERE member_Id = 12;";                                
                                // if (!$username || !$fullname || !$password || !$birthday || !$gender || !$purpose || !phone){ // Kiểm đẩy đủ thông tin đăng ký
                                //     echo 'alert("Vui lòng nhập đầy đủ thông tin đăng ký"); đăngKý();';
                                // }else 
                                if($conn->query("SELECT User FROM member WHERE User='$username'") -> num_rows > 0){ // Kiểm tra xem tên đăng nhập này được sử dụng được
                                    echo 'alert("Tên đăng nhập đã tồn tại !");đăngKý();';
                                } else if (mysqli_query($conn, $sql)){ // Thêm thông tin đăng ký mới vào bảng 
                                    echo 'alert("Đăng ký thành công");đăngNhập();';
                                }
                                else {
                                    echo 'alert("Đăng ký thất bại");';
                                }                               
                            }else if (isset($_POST['dangnhap'])) { // xử lý phần đăng nhập
                                // Hàm isset này trả về true nếu biến tồn tại và không phải là NULL, ngược lại, nó trả về false.
                                // $ _POST là một biến siêu toàn cục PHP được sử dụng để thu thập dữ liệu biểu mẫu sau khi gửi biểu mẫu HTML với method = "post". $ _POST cũng được sử dụng rộng rãi để chuyển các biến.

                                //Lấy dữ liệu nhập vào
                                $username = trim($_POST['username']);
                                $password = trim($_POST['password']);

                                // $query = mysqli_query( $conn, "SELECT User, Password FROM member WHERE User=''" ); 
                                // mysql_query gửi một truy vấn duy nhất (nhiều truy vấn không được hỗ trợ) đến cơ sở dữ liệu hiện đang hoạt động trên máy chủ được liên kết với chỉ định
                                
                                $rowUser = mysqli_num_rows(mysqli_query($conn,"SELECT User FROM member WHERE User='$username'"));
                                $rowPass =  mysqli_num_rows(mysqli_query($conn,"SELECT Password FROM member WHERE Password='$password'"));

                                // Kiểm tra đầy đủ thông tin
                                if(!$username || !$password){ 
                                    echo 'alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.");đăngNhập();';                                    
                                }else if( $rowUser && $rowPass > 0 ){ // Kiểm tra đúng sai tài khoản
                                    echo 'alert("Bạn đăng nhập tài khoản thành công");';
                                    echo '$(".account").text("'.  $username .'");';
                                }else{
                                    echo 'alert("Thông tin tài khoản bạn nhập bị sai !");đăngNhập();';
                                }
                            }else if (isset($_POST['qmatKhau'])) { // Quên mật khẩu
                                // echo $username;
                        
                                // Lấy dữ liệu
                                $username = $_POST['username'];
                                $email = $_POST['email'];
                                // Hàng của đối tượng thành viên
                                $rowUser = mysqli_num_rows(mysqli_query($conn,"SELECT User FROM member WHERE User='$username'"));
                                $rowEmail =  mysqli_num_rows(mysqli_query($conn,"SELECT Email FROM member WHERE Email='$email'"));
                                // $rowPass =  mysqli_connect($conn -> query("SELECT * FROM member")); 
                                // $row = mysqli_fetch_assoc($rowPass);
                                // "SELECT Password FROM member WHERE member_Id='$email'";
                                // $result = $conn->query($conn,$rowPass);
                                                
                                // echo mysqli_query($conn,"SELECT Email FROM member WHERE Email='$email'");
                                // echo "cl('".  mysqli_query("SELECT Password FROM member WHERE member_Id='$email'") ."')";
                                $sql = "UPDATE member SET Password  = '$username' WHERE Email = '$email';";  

                                if (mysqli_query($conn, $sql)){ // Thêm thông tin đăng ký mới vào bảng 
                                    echo 'alert("Mới khẩu của bạn là ' .  $username  .'");đăngNhập();';
                                }
                            }else if (isset($_POST['doiMatKhau'])) { // đổi mật khẩu
                                // lấy dữ liệu nhập
                                $passOld = $_POST['passOld'];
                                $passNew = $_POST['passNew'];
                                $rowPass =  mysqli_num_rows(mysqli_query($conn,"SELECT Password FROM member WHERE Password='$passOld'"));
                                
                                // Kiểm tra mật mật khẩu cũ
                                if($rowPass > 0){
                                    $sql = "UPDATE member SET Password  = '$passNew' WHERE Password = '$passOld';";  
                                    if (mysqli_query($conn, $sql)){ // Thêm thông tin đăng ký mới vào bảng 
                                        echo 'alert("Mới khẩu của bạn là ' .  $passNew  .'");đăngNhập();';
                                    }
                                }else{
                                    echo 'alert("Vui lòng nhập đúng mật khẩu trước");';
                                }
                            }else if (isset($_POST['capNhat'])) { // Cập nhật sách
                                
                                // Lấy dữ liệu từ form cập nhật
                                $tenSach = isset($_POST['tenSach']) ? ($_POST['tenSach']) : '';
                                $theLoai = isset($_POST['theLoai']) ? ($_POST['theLoai']) : '';
                                $viTri = isset($_POST['viTri']) ? ($_POST['viTri']) : '';
                                $hinhThuc = isset($_POST['hinhThuc']) ? ($_POST['hinhThuc']) : '';
                                $anhSach = isset($_POST['anhSach']) ? ($_POST['anhSach']) : '';
                                $tacGia = isset($_POST['tacGia']) ? ($_POST['tacGia']) : '';
                                $nxb = isset($_POST['nxb']) ? ($_POST['nxb']) : '';
                                $ngayCapNhat = isset($_POST['ngayCapNhat']) ? ($_POST['ngayCapNhat']) : '';
                                $moTa = isset($_POST['moTa']) ? ($_POST['moTa']) : '';
                                $noiDung = isset($_POST['noiDung']) ? ($_POST['noiDung']) : '';

                                // Thực thi câu truy vấn thêm dữ liệu vào bảng
                                $sql = "INSERT INTO ebook VALUES('', '$tenSach', '$theLoai','$viTri', '$hinhThuc','$anhSach', '$tacGia','$nxb','$ngayCapNhat','$moTa','$noiDung','','')";

                                if (mysqli_query($conn, $sql)){ // Thêm thông tin đăng ký mới vào bảng 
                                    echo 'alert("Thêm mới tài liệu thành công");window.location="home.php";';
                                }
                                else {
                                    echo 'alert("Thê mới tài liệu thất bại thất bại");';
                                }                       

                            }else if (isset($_POST['chinhSua'])) { // Chỉnh sửa tài liệu
                                // Lấy dữ liệu từ form chỉnh sửa
                                $idSach = isset($_POST['idSach']) ? ($_POST['idSach']) : '';
                                $tenSach = isset($_POST['tenSach']) ? ($_POST['tenSach']) : '';
                                $theLoai = isset($_POST['theLoai']) ? ($_POST['theLoai']) : '';
                                $viTri = isset($_POST['viTri']) ? ($_POST['viTri']) : '';
                                $hinhThuc = isset($_POST['hinhThuc']) ? ($_POST['hinhThuc']) : '';
                                $anhSach = isset($_POST['anhSach']) ? ($_POST['anhSach']) : '';
                                $tacGia = isset($_POST['tacGia']) ? ($_POST['tacGia']) : '';
                                $nxb = isset($_POST['nxb']) ? ($_POST['nxb']) : '';
                                $ngayCapNhat = isset($_POST['ngayCapNhat']) ? ($_POST['ngayCapNhat']) : '';
                                $moTa = isset($_POST['moTa']) ? ($_POST['moTa']) : '';
                                $noiDung = isset($_POST['noiDung']) ? ($_POST['noiDung']) : '';

                                // echo "cl('". $moTa ."');";
                                // $sql = "UPDATE ebook SET Name  = '$tenSach', Category  = '$theLoai',Location  = '$viTri',Form  = '$hinhThuc',img_link  = '$anhSach',	Author  = '$tacGia',Publisher  = '$nxb',Date  = '$ngayCapNhat',Dibe  = '$moTa', Detail  = '$noiDung',  WHERE Id = '$idSach';";
                                $sql = "UPDATE ebook SET Name = '$tenSach',Category = '$theLoai', Location = '$viTri', Form = '$hinhThuc', img_link  = '$anhSach', 	Author = '$tacGia', Publisher = '$nxb', Date  = '$ngayCapNhat', Dibe  = '$moTa', Detail  = '$noiDung' WHERE Id = '$idSach';";    
                                if (mysqli_query($conn, $sql)){ // Sửa thông tin tài liệu 
                                    echo 'alert("Thông tin tài liệu của bạn đã được sửa !");;window.location="home.php";';
                                }
                            }else if (isset($_POST['xoaBo'])) { // Xóa tài liệu tài liệu
                                // Lấy dữ liệu từ form chỉnh sửa
                                $idSach = isset($_POST['idSach']) ? ($_POST['idSach']) : '';
                                $tenSach = isset($_POST['tenSach']) ? ($_POST['tenSach']) : '';
                                $theLoai = isset($_POST['theLoai']) ? ($_POST['theLoai']) : '';
                                $viTri = isset($_POST['viTri']) ? ($_POST['viTri']) : '';
                                $hinhThuc = isset($_POST['hinhThuc']) ? ($_POST['hinhThuc']) : '';
                                $anhSach = isset($_POST['anhSach']) ? ($_POST['anhSach']) : '';
                                $tacGia = isset($_POST['tacGia']) ? ($_POST['tacGia']) : '';
                                $nxb = isset($_POST['nxb']) ? ($_POST['nxb']) : '';
                                $ngayCapNhat = isset($_POST['ngayCapNhat']) ? ($_POST['ngayCapNhat']) : '';
                                $moTa = isset($_POST['moTa']) ? ($_POST['moTa']) : '';
                                $noiDung = isset($_POST['noiDung']) ? ($_POST['noiDung']) : '';

                                echo "cl('".$idSach."');";
                                $sql =  "DELETE FROM ebook WHERE Id = '$idSach'";
                                if (mysqli_query($conn, $sql)){ // Sửa thông tin tài liệu 
                                    echo 'alert("Thông tin tài liệu của bạn đã được xóa !");;window.location="home.php";';
                                }


                            }else if (isset($_REQUEST['timKiem'])) {
                                // Gán hàm addslashes để chống sql injection
                                $search = $_GET['kqtimKiem'];
                                // Nếu $search rỗng thì báo lỗi, tức là người dùng chưa nhập liệu mà đã nhấn submit.
                                if (empty($search)) {
                                    echo 'cl("Yeu cau nhap du lieu vao o trong")';
                                } else {
                                    // Dùng câu lênh like trong sql và sứ dụng toán tử % của php để tìm kiếm dữ liệu chính xác hơn.
                                    $query = "select * from ebook where Name like '%$search%'";
                                    // Thực thi câu truy vấn
                                    $sql = $conn->query($query);
                    
                                    // Đếm số đong trả về trong sql.
                                    $num = $sql->num_rows;
                    
                                    // Nếu có kết quả thì hiển thị, ngược lại thì thông báo không tìm thấy kết quả
                                    if ($num > 0 && $search != ""){
                                        // Vòng lặp while & mysql_fetch_assoc dùng để lấy toàn bộ dữ liệu có trong table và trả về dữ liệu ở dạng array.
                                        echo "$('.nộiDung').sửaLớp('dn');";
                                        echo "$('.đọcSách').sửaLớp('-dn');";
                                        echo " cuộn(0);";
                                        echo "$('.đọcSách').empty().append(";
                                          echo  "$('<div>', { class: 'container ptb15 plr7'}).append(";
                                            echo "$('<div>', { class: 'mt25 df fww jcfs' }).append(";
                                                    while($row = $sql->fetch_assoc()) {
                                                        echo "bốCục_Menu('". $row["Id"] ."','" .$row["Name"] . "','" . $row["img_link"] . "','" . $row["Category"] . "','" . $row["Author"] . "','" . $row["Publisher"] . "','" . $row["Date"] . "','" . $row["Dibe"] . "','" . $row["Detail"] . "','" . $row["Location"] . "','" . $row["Form"] . "','" . 'timKiem' ."'),";
                                                    }        
                                                echo ")";
                                            echo ")";
                                        echo ");";
                                    } else {
                                        echo 'alert("Không tìm thấy kết quả!");';
                                    }
                                }
                            }
                            // 


                            function default_table(){
                                $tab = 'member'; // tên bảng mặc định
                            return $tab;    
                            }
                            
                            /////////
                            
                            function table($limit) { // xuất toàn bộ dữ liệu từ bảng
                                require 'database.php';
                                $tab = default_table();
                            
                                if (!is_numeric($limit)) {$limit = 10;}
                            
                                if ($limit == -1) {$qr = "SELECT * FROM $tab";} // -1 nghĩa là không giới hạn số lượng bản ghi, các số khác thì tuân theo số đó
                                else {$qr = "SELECT * FROM $tab LIMIT $limit";}
                            
                                $rs = $db->query($qr); // foreach result để lấy một tên cột cụ thể
                            
                            return $rs;}

                            // echo table();
                        ?>
                    


                    //Chức năng
                    // Cuộn thanh menu với điều kiện chiều cao trang web > 0 window.scrollY

                    var headerInnerHeight = $('.header').height();
                    window.onscroll = function() {
                        var position = window.scrollY;
                        if (position >= headerInnerHeight) {
                            $('.header').addClass('fixed');
                        } else {
                            $('.header').removeClass('fixed');
                        }
                    };
                    var swiper = new Swiper("#banner", { // banner
                        pagination: {
                            el: ".swiper-pagination",
                            dynamicBullets: true,
                        },
                        spaceBetween: 30,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        autoplay: {
                            delay: 2000,
                        },
                    });
                    var swipers = new Swiper(".mySwiper", { // sách trong tuần 
                        slidesPerView: 4,
                        spaceBetween: 50,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                    var myAdvice = new Swiper(".myAdvice", { // sách khuyên đọc
                        slidesPerView: 5,
                        spaceBetween: 50,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                    var swiper = new Swiper("#release", {
                        scrollbar: {
                            el: ".swiper-scrollbar",
                            hide: true,
                        },
                        slidesPerView: 4,
                        spaceBetween: 30,
                    });
                },
            })
        });
    </script>
</head>

<body>
    <div id="wapper" class="pr"></div>
</body>

</html>
