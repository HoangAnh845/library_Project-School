import { dataBook, dataKhac } from "http://localhost:8080/Test/js/data.js";

const đăngKý = function () {
    return chờ(function () {
        khung( //echo $ _SERVER [ 'PHP_SELF' ];
            $("<form>", {
                // action: "xuly.php",
                id: "formĐK",
                // onsubmit: "return false",
                method: 'POST',
                class: "ptb15 plr25"
            }).append(
                $('<div>', {
                    class: 'wh64 mlra mb25'
                }).append($('<img>', {
                    src: 'img/icon/book_logo.png'
                })),
                $('<div>', {
                    class: 'mtb10 conTai'
                }).append(
                    // Thông tin đăng nhập
                    [
                        { plder: 'Tên đăng nhập', icon: 'person', type: 'text', names: 'username', hopLe: 'tên' },
                        { plder: 'Mật khẩu', icon: 'lock', type: 'password', names: 'password', hopLe: '' },
                        { plder: 'Email', icon: 'mail', type: 'text', names: 'email', hopLe: 'em' },
                        { plder: 'Số điện thoại', icon: 'phone_android', type: 'text', names: 'phone', hopLe: 'dt' },
                        { plder: 'Tên đầy đủ', icon: 'person', type: 'text', names: 'fullname', hopLe: 'tên' },
                        {
                            id: "pur", plder: 'Mục đích', icon: 'crisis_alert', type: 'select', names: 'purpose',
                            menu: [
                                { tên: "Nâng cao kiến thức" },
                                { tên: "Cải thiện viết lách" },
                                { tên: "Thói quen lành mạnh" },
                                { tên: "Giải tỏa căng thẳng" },
                            ]
                        },
                        { plder: 'Sinh nhật', icon: 'calendar_month', type: 'date', names: 'birthday', hopLe: 'ngàySinh' },
                        {
                            id: "gen", plder: 'Giới tính', icon: 'favorite', type: 'select', names: 'gender', menu: [
                                { tên: "Nam" },
                                { tên: "Nữ" },
                                { tên: "Khác" },
                            ]
                        }
                    ].map(function (i) {
                        return $('<div>', {
                            class: 'b1sd bra15 plr15 df aic mb10 ktTT'
                        }).each(function () {
                            switch (i.type) {
                                case "text":
                                    $(this).append(
                                        $('<input>', {
                                            class: "plr15 bra5 on w1 inFor bn",
                                            placeholder: i.plder,
                                            name: i.names,
                                            type: i.type
                                        }).iInput({
                                            bo: ' w1,-b1sd,-bra3 '
                                        }).sửaLớp('-bsi'),
                                    ).icon(i.icon + '::fs15,cl1').on("keydown", function () {
                                        $(this).sửaLớp('-bcr')
                                    })
                                    break;
                                case "password":
                                    $(this).append(
                                        $('<input>', {
                                            class: "plr15 bra5 on w1 inFor bn",
                                            placeholder: i.plder,
                                            name: i.names,
                                            type: i.type
                                        }).iInput({
                                            bo: ' w1,-b1sd,-bra3 '
                                        }).sửaLớp('-bsi'),
                                    ).icon(i.icon + '::fs15,cl1').on("keydown", function () {
                                        $(this).sửaLớp('-bcr')
                                    })
                                    break;
                                case "select":
                                    $(this).append(
                                        $("<select>", { class: "plr15 ptb7 bra5 on w1 inFor bn c6 cpi", name: i.names }).append(
                                            $.map((i.menu || []), function (é) {
                                                return $('<option>', { class: "", value: é.tên, text: é.tên })
                                            })
                                        ).on("keydown", function () {
                                            $(this).sửaLớp('-bcr')
                                        })
                                    ).icon(i.icon + '::fs15,cl1')
                                    break;
                                case "date":
                                    $(this).append(
                                        $('<input>', { class: "plr15 ptb7 bra5 on w1 inFor bn c6 cpi", placeholder: i.plder, name: i.names }).chọnNgày({
                                            nổi: true,//lựa chọn này thể hiện có cho làm nổi thời gian hay không
                                            ẩn: ["giờ", "phút", "giây"], // lựa chọn này để ẩn đi giờ phút giây, có thể cho ẩn đi để hiện giờ
                                            địnhDạng: "{f}-{n}-{j}",//đây là chọn định dạng ngày/tháng/năm
                                            quáKhứ: true,//đây là nơi cho lựa chọn ngày trong quá khứ
                                        })
                                    ).icon(i.icon + '::fs15,cl1').on("keydown", function () {
                                        $(this).sửaLớp('-bcr')
                                    })
                                    break;
                            };
                        })
                    }),
                    // Điều khoản
                    $('<input>', { class: 'cpi', checked: false }).iCheck({
                        nhãn: "Tôi đồng ý với điều khoản các sử dụng", // Tiêu đề. Chỉ muốn hiển thị icon thì để giá trị này empty string
                        bo: "mb10 w90 mlra", // Class bo
                        boChọn: "", // Sửa lớp sau khi chọn
                        ngay: true,
                        đổi: function (v) { }
                    }),
                    // Đăng ký
                    $('<button>', {
                        class: 'bg1 cf mlra ptb10 tac fs11 bra25 ttu shineh mb10 mt25 cpi db bn w1',
                        type: 'submit',
                        name: 'dangky',
                        text: 'Đăng ký tài khoản'
                    })
                    // .click(function () {
                    //     var icol = $(this);
                    //     chờ(function () {
                    //         $('.conTai').each(function () {
                    //             var ktTT = $(this).find(".ktTT"),
                    //                 icol = $(this).find('[name]'); // id của các thẻ cần điền

                    //             cl(icol, icol.iVal())


                    //             if (icol.iVal() == "") {
                    //                 ktTT.sửaLớp('bcr');
                    //                 cuộn(0);
                    //                 return false;
                    //             }
                    //             $(this).sửaLớp('-bcr');
                    //             icol.trigger("click");
                    //             $('#formĐK').attr("onsubmit", "retrun true");

                    //         })
                    //     }, 123)
                    // })
                    ,
                    $('<div>', { class: 'tac' }).append(
                        $('<c>', { class: 'mtb10 dib', html: 'Bạn đã có tài khoản?' }),
                        $('<c>', { class: 'cl1 ml5 dib cpi', html: 'Đăng nhập' }).on('click', function () {
                            $('#regIsr').trigger('đóng')
                            đăngNhập();
                        }),
                    ),
                    $('<div>', { class: 'tac mtb15 pr z9 w70 mlra' }).append(
                        $('<div>', { class: 'bgcf pr z9 mlra w50 cl1', text: 'Đăng nhập nhanh' }),
                        $('<div>', { class: 'w1 h20 pa t50 b1sd bt0 blr0  ' })
                    ),
                    // Đăng nhập nhanh
                    $('<div>', { class: 'df jcsc' }).append(
                        $('<div>', { class: 'wh35 mr15' }).append(
                            $('<img>', { src: 'img/icon/facebook_login.png' })
                        ),
                        $('<div>', { class: 'wh35' }).append(
                            $('<img>', { src: 'img/icon/google_login.png' })
                        ),
                    ),
                )
            ), "regIsr", {
            tiêuĐề: "Đăng ký tài khoản",
            ngoài: "",
            trong: "col-xs-12,col-md-3",
            koTắt: true,
            onShow: function () {
                //Lúc khung đã hiển thị
            },
        })
    }, 200)
};

const loadXuLy = function () {
    return $(".thân").append(
        $('<div>', { class: "loadTr pf z99 wh1", style: "bottom:-9.2%" }).append(
            $('<div>', { class: 'loader loader-1 pr', style: 'top:25%;left:-7%;' }).append(
                $('<div>', { class: "loader-outter" }),
                $('<div>', { class: "loader-inner" }),
                $('<div>', { class: "wh1 cf ", style: 'transform: translateY(86px);', html: 'Đang xử lý <br> dữ liệu...' })
            )
        ).sửaLớp('-dn')
    )
};

const xlSlider = function () {
    return myAdvice = new Swiper(".myAdvice", { // sách khuyên đọc
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
}

const trichDan = function () {
    return $('<div>', { id: 'sayings', class: 'w1 h150 mt15 bg1 ' }).append(
        $('<div>', { class: 'tac h1 df aic acc cf fww ' }).append(
            $('<div>', { class: 'fs15 w1 fwb', text: '_ Hành trình về Phương Đông, Baird T. Spalding_' }),
            $('<div>', { class: 'mt10 w50 mlra', text: 'Trở ngại lớn nhất của những người luyện tâm rèn chí là sự kiêu ngạo và óc chỉ trích…Trở ngại thứ hai là sự nông nổi, làm điều này chua xong đã nhảy sang việc khác' })
        )
    )
}

const đăngNhập = function () {
    return khung( //echo $ _SERVER [ 'PHP_SELF' ];
        $("<form>", {
            method: 'POST', // GET: Thêm dữ liệu biểu mẫu vào URL trong các cặp tên / giá trị, POST: dữ liệu không được hiển thị trong URL
            // onsubmit: "return false",
            id: 'myForm',
            class: "ptb15 plr25"
        }).append( //i == logIn && 'login.php' || i == regIsr && "xuly.php",   
            $('<div>', {
                class: 'wh64 mlra mb25'
            }).append($('<img>', {
                src: 'img/icon/book_logo.png'
            })),
            $('<div>', {
                class: 'mtb10 conTai'
            }).append(
                // Thông tin đăng nhập
                [{
                    plder: 'Tên đăng nhập',
                    icon: 'person',
                    names: 'username',
                    type: 'text'
                },
                {
                    plder: 'Mật khẩu',
                    icon: 'lock',
                    names: 'password',
                    type: 'password'
                }
                ].map(function (i) {
                    return $('<div>', {
                        class: 'b1sd bra15 plr15 df aic mb10 bọcTT'
                    }).append(
                        $('<input>', {
                            class: "plr15 bra5 on w1 inFor bn thôngTinĐN",
                            placeholder: i.plder,
                            name: i.names,
                            type: i.type,
                        }).iInput({
                            bo: ' w1,-b1sd,-bra3 '
                        }).sửaLớp('-bsi'),
                    ).icon(i.icon + '::fs15,cl1')
                }),
                // Thông tin phụ
                $('<div>', {
                    class: 'mb10 df jcsb cl1 plr10'
                }).append(
                    $('<div>', {
                        class: 'cpi tduh',
                        text: 'Đăng ký ngay'
                    }).click(function () {
                        đăngKý();
                        $('#logIn').trigger('đóng')
                    }),
                    $('<div>', { class: 'cpi tduh', text: 'Quên mật khẩu' }).click(function () {
                        // Quên mật khẩu
                        $('#logIn').trigger('đóng');
                        khung(
                            $("<form>", {
                                method: 'POST', // GET: Thêm dữ liệu biểu mẫu vào URL trong các cặp tên / giá trị, POST: dữ liệu không được hiển thị trong URL
                                class: ""
                            }).append(
                                $('<div>', { class: 'plr25 ptb15' }).append(
                                    $('<div>', {
                                        class: 'wh64 mlra mb25'
                                    }).append($('<img>', {
                                        src: 'img/icon/book_logo.png'
                                    })),
                                    $('<div>', {
                                        class: 'mtb10'
                                    }).append(
                                        [{ ten: 'Tên đăng nhập', names: "username", icon: 'person' }, { ten: 'Email', icon: 'mail', names: "email" }].map(function (i) {
                                            return $('<div>', {
                                                class: 'b1sd bra15 plr15 df aic mb10'
                                            }).append(
                                                $('<input>', {
                                                    class: "plr15 bra5 on w1 inFor bn",
                                                    placeholder: i.ten,
                                                    name: i.names,
                                                    type: 'text'
                                                }).iInput({
                                                    bo: ' w1,-b1sd,-bra3 '
                                                }).sửaLớp('-bsi'),
                                            ).icon(i.icon + '::fs15,cl1')
                                        }),
                                    ),
                                    $('<button>', {
                                        class: 'bg1 cf mlra ptb7 tac fs11 bra25 ttu shineh mb10 mt25 cpi db bn w1',
                                        type: 'submit',
                                        icon: 'outbox::fs12 dib mb3',
                                        name: 'qmatKhau',
                                        text: 'Xác nhận gửi'
                                    }),
                                )
                            ), "khQue", {
                            tiêuĐề: "Quên mật khẩu",
                            ngoài: "",
                            trong: "col-xs-12,col-md-2",
                            koTắt: true,
                        })
                    }),
                ),
                // Đăng nhập
                $('<button>', {
                    id: 'btnSubmit',
                    class: 'bg1 cf mlra ptb10 tac fs11 bra25 ttu shineh mb10 mt25 cpi db bn w1',
                    type: 'submit',
                    name: 'dangnhap',
                    text: 'Đăng nhập'
                })
                // .click(function () {
                //     // Kiểm tra đẩy đủ thông tin
                //     $.map((['username', 'password'] || []), function (i, index) {
                //         // Kiểm tra đầy đủ thông tin
                //         var ktTT = $(".thôngTinĐN[name|='" + i + "']");
                //         // cl("LGOGOGOGOG",$('.texT'),$('.texT').iVal())
                //         // if (ktTT.iVal() == '') {
                //         //     alert("Vui lòng bạn nhập đầy đủ thông tin!");
                //         //     $('form#myForm').attr("onsubmit", "return false")
                //         // } else if ($('.texT').iVal() !== "") {
                //         //     alert("Bạn đăng nhập thành công!");
                //         //     $('form#myForm').attr("onsubmit", "");
                //         //     $('#logIn').trigger('đóng');
                //         //     // if (i == 'username') {
                //         //     //     $('.account').iVal(ktTT.iVal());
                //         //     // }
                //         //     $('.account').iVal($('.texT').iVal());
                //         // }
                //         //Lấy dữ liệu trong form login
                //         var data = $('form#myForm').serialize();
                //         // cl("LOG_______",data)
                //         //Sử dụng hàm $.ajax()
                //         $.ajax({
                //             type: 'POST', //kiểu post
                //             url: 'home.php', //gửi dữ liệu sang trang submit.php
                //             data: data,
                //             success: function (data) {
                //                 // if (data == 'false') {
                //                 //     cl('Sai Email hoặc mật khẩu');
                //                 // } else {
                //                 //     cl('Đăng nhập thành công!');
                //                 //     // Xử lý sau khi đăng nhập thành công
                //                 // }
                //             }
                //         });
                //         return false;
                //     })
                // })
                ,
                $('<div>', { class: 'tac mtb15 pr z9 w70 mlra' }).append(
                    $('<div>', { class: 'bgcf pr z9 mlra w50 cl1', text: 'Đăng nhập nhanh' }),
                    $('<div>', { class: 'w1 h20 pa t50 b1sd bt0 blr0  ' })
                ),
                // Đăng nhập nhanh
                $('<div>', { class: 'df jcsc' }).append(
                    $('<div>', { class: 'wh35 mr15' }).append(
                        $('<img>', { src: 'img/icon/facebook_login.png' })
                    ),
                    $('<div>', { class: 'wh35' }).append(
                        $('<img>', { src: 'img/icon/google_login.png' })
                    ),
                ),


            )
        ), "logIn", {
        tiêuĐề: "Đăng nhập tài khoản",
        ngoài: "",
        trong: "col-xs-12,col-md-3",
        koTắt: true,
        onRender: function () {
            //Khi đang render khung
        },
        onShow: function () {
            //Lúc khung đã hiển thị
        },
        onHiding: function () {
            //Lúc khung đang tắt
        },
        onHide: function () {
            //Lúc đã tắt khung
            // cl("LGO",$(this))
        },
    })
};

// Giao diên phần đầu 
const header = function (á, à) {
    return $('<header>').append(
        $('<div>', { class: 'bg1 header' }).append(
            $('<div>', { class: 'df aic ptb10 plr15' }).append(
                $('<div>', { class: 'col-md-4' }).append(
                    // Danh mục
                    $('<div>', { class: 'b1sd bgcf lh2 plr15 bra3 cpi shineh df aic hmn03 fl wmxc allDanhMuc' }).append(
                        $.icon('menu:: mr5 c3'),
                        $('<div>', { class: 'ttu fwb c3 fwb', text: 'Tất cả danh mục' })
                    ).click(function () {
                        $('.thểLoại').toggle(500);
                        $('.header').toggleClass('l0i');
                        if (!$('.thân').hasClass('active')) {
                            $('.thân').animate({ 'margin-right': "14%", }, 800);
                            $('.thân').sửaLớp('active');
                        } else {
                            $('.thân').animate({ 'margin-right': "0%", }, 800);
                            $('.thân').sửaLớp('-active')
                        }
                    }),
                    // Tìm kiếm
                    $('<div>', { class: 'ml5 w35 fl b1sd plr15 bgcf bra3 oh ', style: 'height:30.19px' }).append(
                        $('<form>', { id: "formTK", class: "df aic", method: "GET", style: 'height: inherit;' }).append(
                            $('<input>', { class: 'bn pa0 w1 on', name: "kqtimKiem", type: "text", placeholder: 'Tìm kiếm tài liệu...' }),
                            $('<button>', { type: "sumbit", name: "timKiem", class: "bgcf bn" }).icon("search:: cpi shineh c6c fs12")
                        )
                    )
                ),
                $('<div>', { class: 'col-md-4 hmn03 df aic jcsc' }).append(
                    //logo
                    $('<a>', { class: 'bgso bgpc bgrn wh50 shineh db', target: '_self', href: 'http://localhost:8080/Test/home.php', style: 'background-image:url(img/icon/book_logo.png)' }),
                    $('<div>', { class: 'fs15 fwb ml15 cf', text: 'Thư viện sách online' })
                ),
                $('<div>', { class: 'col-md-4 df aic jcfe' }).append(
                    // Lựa chọn của bạn
                    $.map({ ngônNgữ: "bgcfh", cửaHàng: "bgcfh mlr5", tàiKhoản: "" }, function (i, index) {
                        return $('<div>', { class: 'hmn03 cpi brtl3 brtr3 brbr3  pr ' + (i || "") }).each(function () {
                            switch (index) {
                                case "ngônNgữ":
                                    $(this).append(
                                        $('<div>', { class: 'df plr10 aic boChọn' }).append(
                                            $('<div>', { class: 'bgsc bgpc bgrn wh20 mb3', style: 'background-image:url(img/icon/vietNam.png)' }),
                                            $('<div>', { class: 'lh2 fs09 fwb ml7 mr3 cf ', text: 'Tiếng Việt' }),
                                            $.icon("arrow_drop_down:: cf fs15 mb3")
                                        ),
                                        $('<div>', { class: 'pa t1 bgcf dsngônNgữ dn z9' }).append(
                                            [
                                                { text: 'Tiếng Anh', img: 'background-image:url(img/icon/english.png)' },
                                                { text: 'Tiếng Pháp', img: 'background-image:url(img/icon/phap.png)' },
                                                { text: 'Tiếng Đức', img: 'background-image:url(img/icon/duc.png)' }
                                            ].map(function (i, index) {
                                                return $('<div>', { class: 'df aic b1sd pa7 ' + (index == 1 ? "bt0" : index == 2 ? " bt0 brbl5 brbr5" : "") }).append(
                                                    $('<div>', { class: 'bgso bgpc bgrn wh20 bieuTuong', style: i.img }),
                                                    $('<div>', { class: 'lh2 fs08 fwb mlr7 ', text: i.text }),
                                                )
                                            })
                                        )
                                    ).hover(
                                        function () {
                                            $(this).find('.boChọn div, .boChọn i').addClass('cl1');
                                            $(this).find('.dsngônNgữ').removeClass('dn').each(function () {
                                                $(this).children().hover(function () {
                                                    $(this).addClass('cl1');
                                                    $(this).click(function () {
                                                        var text = $(this).find('div:last').text(),
                                                            img = $(this).find('div:first').attr('style');
                                                        $('.boChọn div:nth-child(2)').text(text);
                                                        $('.boChọn div:nth-child(1)').attr('style', img);
                                                    })
                                                }, function () {
                                                    $(this).removeClass('cl1');
                                                });
                                            });
                                        },
                                        function () {
                                            $(this).find('.boChọn div, .boChọn i').removeClass('cl1')
                                            $(this).find('.dsngônNgữ').addClass('dn')
                                        }
                                    )
                                    break;
                                case "cửaHàng":
                                    $(this).append(
                                        $('<div>', { class: 'df aic pl10 pr3' }).append(
                                            $('<div>', { class: 'lh2 fwb mlr7 cf ', icon: 'storefront::fs12,mr7,mb2,dib,-mr02', text: 'Cửa hàng' }),
                                        ),
                                        $('<div>', { class: 'pa t1 wh200 bgcf z9 pa15 df aic fdc jcsc bra5 b1sd dn sảnPhẩm' }).css({ 'left': '-55%' }).append(
                                            $.icon("remove_shopping_cart:: cl1 fs12 mb3"),
                                            $('<div>', { class: 'fs08 tac c6 fsi', text: 'Tính năng chưa cập nhật' })
                                        ).click(function () { thôngBáo.lưuÝ("Chức năng hiện tại chưa có !") })
                                    ).hover(function () {
                                        $(this).find('.sảnPhẩm').toggleClass('dn');
                                        $(this).find('div:first').children().toggleClass('cl1');
                                    })
                                    break;
                                case "tàiKhoản":
                                    $(this).append(
                                        $('<div>', { class: 'account w1 pa7 bn bra3 cf fwb bgct cpi tduh o1a wsn o1b ml0b ml0a fwba ', icon: 'account_circle::fs12,mr7,mtb3,dib,-mr02', text: 'Đăng nhập' }).on('click',
                                            function () {
                                                if ($(this).iVal() !== "Đăng nhập") { // Đăng nhập
                                                    $(this).chọn([
                                                        {
                                                            ê: "Trang cá nhân", i: "home::vam,cl1",
                                                            f: function () {
                                                                cáNhân();
                                                            }
                                                        },
                                                        $(this).iVal() !== "Admin" ? "" :
                                                            {
                                                                ê: "Thống kế sách", i: "update::vam,cl1,fwb",
                                                                f: function () {
                                                                    thốngKê();
                                                                }
                                                            },
                                                        $(this).iVal() !== "Admin" ? "" : {
                                                            ê: "Cập nhật sách", i: "update::vam,cl1,fwb",
                                                            f: function () {
                                                                cậpNhật("thêm");
                                                            }
                                                        },
                                                        {
                                                            ê: "Đổi mật khẩu", i: "lock_reset::vam,cl1,fwb",
                                                            f: function () {
                                                                khung(
                                                                    $('<div>', { class: 'plr25 ptb15' }).append(
                                                                        $("<form>", {
                                                                            // action: "xuly.php",
                                                                            // id: "formĐK",
                                                                            method: 'POST',
                                                                            class: ""
                                                                        }).append(
                                                                            $('<div>', {
                                                                                class: 'wh64 mlra mb25'
                                                                            }).append($('<img>', {
                                                                                src: 'img/icon/book_logo.png'
                                                                            })),
                                                                            $('<div>', {
                                                                                class: 'mtb10'
                                                                            }).append(
                                                                                [
                                                                                    { ten: 'Nhập mật khẩu cũ', names: "passOld", icon: 'app_registration' },
                                                                                    { ten: 'Nhập mật khẩu mới', names: "", icon: 'app_registration' },
                                                                                    { ten: 'Xác nhận khẩu mới', names: "passNew", icon: 'password' },
                                                                                ].map(function (i) {
                                                                                    return $('<div>', {
                                                                                        class: 'b1sd bra15 plr15 df aic mb10'
                                                                                    }).append(
                                                                                        $('<input>', {
                                                                                            class: "plr15 bra5 on w1 inFor bn",
                                                                                            placeholder: i.ten,
                                                                                            name: i.names,
                                                                                            type: 'text'
                                                                                        }).iInput({
                                                                                            bo: ' w1,-b1sd,-bra3 '
                                                                                        }).sửaLớp('-bsi'),
                                                                                    ).icon(i.icon + '::fs15,cl1')
                                                                                }),
                                                                            ),
                                                                            $('<button>', {
                                                                                class: 'bg1 cf mlra ptb7 tac fs11 bra25 ttu shineh mb10 mt25 cpi db bn w1',
                                                                                type: 'submit',
                                                                                icon: 'outbox::fs12 dib mb3',
                                                                                name: 'doiMatKhau',
                                                                                text: 'Xác nhận gửi'
                                                                            })
                                                                        ),
                                                                    ), "đổiMậtKhẩu", {
                                                                    tiêuĐề: "Đổi mật khẩu",
                                                                    ngoài: "",
                                                                    trong: "col-xs-12,col-md-2",
                                                                    koTắt: true,
                                                                })
                                                            }
                                                        },
                                                        {
                                                            ê: "Tủ sách", i: "book::vam,cl1,",
                                                            f: function () {
                                                                tủSách();
                                                            }
                                                        },
                                                        {
                                                            ê: "Đơn hàng ", i: "storefront::vam,cl1,fwb",
                                                            f: function () {
                                                                $(this).sửaLớp("vôHiệu")
                                                                alert("Tính năng hiện chưa có !")
                                                            }
                                                        },
                                                        {
                                                            ê: "Đăng xuất", i: "logout::vam,cl1,fwb",
                                                            f: function () {
                                                                cl("LGOGOG", $('.account')),
                                                                    $('.account').iVal("Đăng nhập");
                                                            }
                                                        },
                                                    ], {
                                                        position: { // Cấu hình vị trí hiển thị iMsg so với thẻ click
                                                            at: "right bottom",
                                                            my: "right top",
                                                        }
                                                    })
                                                } else {
                                                    loadXuLy();
                                                    chờ(function () {
                                                        $(".loadTr").sửaLớp('dn');
                                                        đăngNhập();
                                                    }, 1200)

                                                }
                                            })
                                    )
                                    break;
                            }
                        })
                    }),
                ),
            )

        ),
    )
};

const banner = function () {
    return $('<div>', { id: 'banner', class: 'swiper b1sd' }).append(
        $('<div>', { class: 'swiper-wrapper' }).append(
            ["img/banner_1.jpg", "img/banner_2.png", "img/banner_3.jpg", "img/banner_4.png", "img/banner_5.png"].map(function (i) {
                return $('<div>', { class: 'swiper-slide' }).append(
                    $('<img>', { class: 'brbl5 brbr5 b1sd bóng cpi', src: i }),
                )
            })
        ),
        $('<div>', { class: 'swiper-button-next cpi' }),
        $('<div>', { class: 'swiper-button-prev cpi' }),
        $('<div>', { class: 'swiper-pagination' }),
    )
};

// Bố cục cho trang chủ kiểu một
const bốCục1_cap1 = function (á, à) {
    return $('<div>', { class: 'ohi bra5 bóng b1sd pr ha mlra df fdc swiper-slide hmni khoiSach', style: 'height:inherit;' }).append(
        $('<div>', { class: ' bgpc bgrn bgsc wh1 pa t0', style: 'background-image:url("img/wden_bkgd.jpg")' }),
        // Bìa sách
        $('<div>', { class: 'tac pr' }).append(
            $('<img>', { class: 'pr z1 book cpi mlra', src: á.anhSach }),
            $('<div>', { class: 'w1 h1 pa t0 bgpc bgrn bgsc cpi ' }).append(
                $('<div>', { class: 'banner_bookh pr z1 wh1 df aic jcsc bgc05 dn' }).append(
                    $('<a>', { class: 'dib', target: '_self' }).append($.icon('import_contacts::bgcf cl1 pa15 bra50 fs2'))
                )
            ),
        ),
        // Mô tả
        $('<div>', { class: 'pr book_MTH bgcf' }).append(
            $('<div>', { class: 'pt15 plr15 pr z1 tal' }).append(
                $('<div>', { class: 'wbox fwb fs09 mb15 cpi tduh baiViet cl1h', rows: '1', tip: á.tenSach, html: á.tenSach }), //
                $('<div>', { class: 'wbox fs07', rows: '3', html: á.moTa }),
                $('<div>', { class: 'ptb10 w1 b1sd blr0 bb0 mt10 ' }).append($('<c>', { class: 'dib c9 fs05 cpi cl1h tduh ttu tar w1', text: á.tacGia })),
            ),
        ),
    ).hover(function () {
        $(this).find('.banner_bookh').sửaLớp('db,-dn');
        $(this).find('.book_MTH').sửaLớp('b1sd,bt0,bc1');
    }, function () {
        $(this).find('.banner_bookh').sửaLớp('dn,-db');
        $(this).find('.book_MTH').sửaLớp('-b1sd,-bt0,-bc1');
    })

};

// Bố cục cho trang chủ kiểu hai 
const bốCục2_cap1 = function (đốiTượng, danhSach) {
    var mosts = đốiTượng == "most",
        speaks = đốiTượng == "speak",
        nauAns = đốiTượng == "nauAn",
        biAns = đốiTượng == "biAn",
        giaTuongs = đốiTượng == "giaTuong",
        camHungs = đốiTượng == "camHung",
        kinhDoanhs = đốiTượng == "kinhDoanh",
        taiChinhs = đốiTượng == "taiChinh";
    var xhRead = [
        { stt: '2', per: 'thanhtuyen16032', time: '1,046 phút' },
        { stt: '3', per: 'fb1565812936', time: '956 phút' },
        { stt: '4', per: 'hongnga***', time: '955 phút' },
        { stt: '5', per: 'voyage***', time: '910 phút' },
        { stt: '6', per: 'tuyenlanh8***', time: '859 phút' },
        { stt: '7', per: 'tel_01643332*', time: '849 phút' },
        { stt: '8', per: 'tel_0978046***', time: '800 phút' },
        { stt: '9', per: 'baomin***', time: '910 phút' },
        { stt: '10', per: 'tel_0983417***', time: '759 phút' },
        { stt: '11', per: 'tel_0983417***', time: '759 phút' },
        { stt: '12', per: 'tel_0983417***', time: '759 phút' },
        { stt: '13', per: 'tel_0983417***', time: '759 phút' },
        { stt: '14', per: 'tel_0983417***', time: '759 phút' },
        { stt: '15', per: 'tel_0983417***', time: '759 phút' },
    ],
        xhListen = [
            { per: 'Hành tẩu âm dương', time: '10 0' },
            { per: 'Không thể chạm vào em', time: '9,582' },
            { per: 'Nơi giấy mơ em thuộc về', time: '9,582' },
            { per: 'Hoàng Hà phục yêu ', time: '9,582' },
            { per: '99 phương án khuyến mãi', time: '9,582' },
            { per: 'Mộ Khẩu tử', time: '9,582' },
            { per: '50 sắc thái', time: '9,582' },
            { per: 'Kẻ trộm băng', time: '9,582' },
            { per: 'Ve sầu lười học', time: '9,582' },
            { per: 'Ve sầu lười học', time: '9,582' },
            { per: 'Ve sầu lười học', time: '9,582' },
            { per: 'Ve sầu lười học', time: '9,582' },
            { per: 'Ve sầu lười học', time: '9,582' },
            { per: 'Ve sầu lười học', time: '9,582' },
        ],
        menu_Most = ["Tất cả", "Nấu ăn", "Bí Ẩn", "Giả tượng"],
        menu_Speak = ["Tư duy về kinh doanh", "Tài chính", "Câu truyện truyền cảm hứng", "Lời khuyên kinh doanh"];
    return $('<div>', { class: 'df mb15' }).append(
        // BXH (cột trái)
        nauAns || biAns || giaTuongs || taiChinhs || camHungs || kinhDoanhs ? "" :
            $('<div>', { class: 'bgcf ptb15 w20 ha', }).append(
                $('<div>', { class: 'plr15 mb15', text: '' }).append(
                    $('<c>', {
                        class: 'dib fwb df aic fs12 jcsc', text: mosts ? 'BXH THÁNG 11/2022' : speaks ? 'NGHE NHIỀU NHẤT' : ''
                    }).icon(mosts ? 'star_half::mr5' : speaks ? 'headphones::mr5' : '')),
                // Xếp hạng một
                mosts ? $('<div>', { class: 'mtb15 pr' }).append(
                    $('<img>', { class: 'w1 ha ', src: 'img/top_1.png' }),
                    $('<div>', { class: 'bgcf w1 h40 pa b0 o07' }),
                    $('<div>', { class: 'pa z1 cr2 b0 pb10 fs09 w1 plr7' }).append(
                        $('<c>', { class: 'dib', text: 'tel_01239777***' }),
                        $('<c>', { class: 'dib fr', text: '1,168 phút' }),
                    )
                ) : '',
                // Xếp hạng còn lại
                $.map((mosts ? xhRead : speaks ? xhListen : ''), function (i, index) {
                    return $('<div>', { class: 'plr7 mb7' }).append(
                        $('<div>', { class: 'b1sd bt0 blr0 pb7 df aic jcsb' }).append(
                            $('<c>', { class: 'dib' }).append(
                                mosts ? $('<c>', { class: 'fs11' + (i.stt == '2' ? ' co' : i.stt == '3' ? ' cg' : ' cs'), text: i.stt }) : '',
                                mosts ? $('<img>', { class: 'wh20 ml7 mb5', src: 'img/icon/user-rank-icon.png' }) : '',
                                $('<c>', { class: 'pl5 pr10  ', text: i.per })
                            ),
                            $('<c>', { class: 'dib fr' + (mosts ? index == 0 ? ' co' : index == 1 ? ' cg' : ' cs' : speaks ? index == 0 ? ' cr1' : index == 1 ? ' co' : index == 2 ? ' cg ' : 'cs' : ''), text: i.time }),
                        )
                    )
                }),
                // Tìm hiểu thêm
                $('<div>', { class: 'w1 cl1 tac cpi tduh', text: 'TÌM HIỂU' })

            ),

        // Cột phải
        $('<div>', { class: 'plr15 bgcf khungCha ' + (nauAns || biAns || giaTuongs || taiChinhs || camHungs || kinhDoanhs ? "" : " w80") }).append(
            // Tiêu đề
            nauAns || biAns || giaTuongs || taiChinhs || camHungs || kinhDoanhs ? "" :
                $('<div>', { class: 'b1sd bc6 blr0 bt0 ptb15 lh12 pr mb15' }).append(
                    $('<div>', { class: 'w20 dib fs15 c3 cpi z1 pr pl15 cl1h titles', text: mosts ? 'Đọc nhiều nhất' : speaks ? "Nghe nhiều nhất" : "" }).click(function () {
                        loadXuLy();
                        chờ(function () {
                            $(".dsBook").sửaLớp('dn');
                            $(".loadTr").sửaLớp('dn');
                            $('.chuyênMục').sửaLớp('-dn');
                            $(".chuyênMục").empty().append(
                                bốCục_most('2'),
                            )
                            cuộn(0)
                            var swiper = new Swiper("#release", {
                                scrollbar: {
                                    el: ".swiper-scrollbar",
                                    hide: true,
                                },
                                slidesPerView: 4,
                                spaceBetween: 30,
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
                        }, 1200)
                    }),
                    $('<c>', { class: 'w80 dib tar fs12 cpi pt3 c3 z1 pr' }).append(
                        (
                            mosts ? menu_Most :
                                speaks ? menu_Speak : '' || []
                        ).map(function (i, index) {
                            return mosts ? $('<c>', { class: 'tduh dib cl1h pr10 b1sd bl0 btb0 mr10 oksa ' + (index == 3 ? ' br0 ' : index == 0 ? "cl1" : ""), text: i }).click(function () {
                                var ths = $(this);
                                loadXuLy(); //
                                chờ(function () {
                                    $(".loadTr").sửaLớp('dn');
                                    $(".khungChứaS").sửaLớp('dn');
                                    switch (i) {
                                        case "Tất cả":
                                            $(".khungChứaS").sửaLớp('-dn');
                                            $(".khungPhụ").sửaLớp('dn');
                                            break;
                                        case "Nấu ăn":
                                            $(".khungChứaS").sửaLớp('dn');
                                            $(".khungPhụ").sửaLớp('-dn');
                                            $(".khungPhụ").empty().append(
                                                bốCục2_cap1("nauAn")
                                            );
                                            break;
                                        case "Bí Ẩn":
                                            $(".khungChứaS").sửaLớp('dn');
                                            $(".khungPhụ").sửaLớp('-dn');
                                            $(".khungPhụ").empty().append(
                                                bốCục2_cap1("biAn")
                                            );
                                            break;
                                        case "Giả tượng":
                                            $(".khungChứaS").sửaLớp('dn');
                                            $(".khungPhụ").sửaLớp('-dn');
                                            $(".khungPhụ").empty().append(
                                                bốCục2_cap1("giaTuong")
                                            );
                                            break;
                                    }
                                }, 1200)
                            }) : speaks ? $('<c>', { class: 'tduh dib cl1h pr10 b1sd bl0 btb0 mr10 oksa ' + (index == 3 ? ' br0 ' : index == 0 ? "cl1" : ""), text: i }).click(function () {
                                loadXuLy();
                                chờ(function () {
                                    $(".loadTr").sửaLớp('dn');
                                    $(".khungPhụ1").sửaLớp('dn');
                                    switch (i) {
                                        case "Tư duy về kinh doanh":
                                            $(".khungChứaN").sửaLớp('-dn');
                                            $(".khungPhụ1").sửaLớp('dn');
                                            break;
                                        case "Tài chính":
                                            $(".khungChứaN").sửaLớp('dn');
                                            $(".khungPhụ1").sửaLớp('-dn');
                                            $(".khungPhụ1").empty().append(
                                                bốCục2_cap1("taiChinh")
                                            );
                                            break;
                                        case "Câu truyện truyền cảm hứng":
                                            $(".khungChứaN").sửaLớp('dn');
                                            $(".khungPhụ1").sửaLớp('-dn');
                                            $(".khungPhụ1").empty().append(
                                                bốCục2_cap1("camHung")
                                            );
                                            break;
                                        case "Lời khuyên kinh doanh":
                                            $(".khungChứaN").sửaLớp('dn');
                                            $(".khungPhụ1").sửaLớp('-dn');
                                            $(".khungPhụ1").empty().append(
                                                bốCục2_cap1("kinhDoanh")
                                            );
                                            break;
                                    }
                                }, 1200)
                            }) : ""
                        })
                    ),
                ),
            // Mô tả 

            $('<div>', { class: 'df fww ' + (mosts ? "khungChứaS" : speaks ? " khungChứaN" : "") }).append(
                // Nội dung sách
                $('<div>', { class: 'col-md-12' }).append(
                    $.map((
                        mosts ? dataBook.data_most :
                            speaks ? dataBook.data_speak :
                                nauAns ? dataBook.data_nauAn :
                                    biAns ? dataBook.data_biAn :
                                        giaTuongs ? dataBook.data_giaTuong :
                                            taiChinhs ? dataBook.data_taiChinh :
                                                camHungs ? dataBook.data_camHung :
                                                    kinhDoanhs ? dataBook.data_kinhDoanh : '' || []
                    ), function (á, à) {
                        return $('<div>', { class: 'col-md-4 hfc pb15 plr10' }).append(
                            $('<div>', { class: 'df bóng bra5 b1sd pr khungBoc', style: 'height:233px;' }).append(
                                $('<div>').append(
                                    $('<img>', { class: ' bóng', src: á.anhSach }).css({ 'height': '-webkit-fill-available' })
                                ),
                                $('<div>', { class: 'w1 pr bgcf b1sd btb0 br0' }).append(
                                    $('<div>', { class: 'pa10 pr z9 h1' }).append(
                                        $('<div>', { class: 'tac fwb wbox tenSach', tip: á.tenSach, rows: '2', text: á.tenSach }),
                                        $('<div>', { class: 'wbox mtb7 fs08', rows: '5', tip: á.moTa, html: á.moTa }), // mô tả sách
                                        $('<div>', { class: 'pb10 w1 tar pa b0 l0 pr15 pt15 b1sd blr0 bb0 bc6' }).append(
                                            $('<c>', { class: 'dib c9 fs08 cpi ', text: (mosts ? ' Lượt xem: 160 ' : speaks ? ' Lượt nghe: 150' : '') }),
                                            $('<c>', { class: 'dib c9 fs08 cpi cl1h tduh ttu tar wbox', rows: '1', text: á.tacGia })
                                        ),
                                    ),
                                ),
                                $('<div>', { class: 'pa z9 z1 wh1 df aic jcsc bgc05 bokHT dn' }).append(
                                    $('<a>', { class: 'dib', href: á.href, target: '_self' }).append(
                                        $.icon((á.id == 'listen' ? 'headphones' : 'import_contacts') + ' ::bgcf cl1 pa15 bra50 fs2 cpi')
                                    ).on("click", function () {
                                        // Hiện thị mô tả bài viếtviết
                                        var thsd = $(this);
                                        // loadXuLy();
                                        chờ(function () {
                                            var khungBoc = thsd.closest('.khungBoc'),
                                                khungCha = thsd.closest('.khungCha'),
                                                tieuDeP = khungCha.find('.oksa'),
                                                tieuDe = khungCha.find('.titles').iVal(),
                                                thanS = thsd.closest('.thân'),
                                                tenSach = khungBoc.find('.tenSach').iVal(),
                                                mosts = tieuDe == "Đọc nhiều nhất",
                                                speaks = tieuDe == "Nghe nhiều nhất";
                                            // nauAns = $('.oksa').iVal() == "Nấu ăn";
                                            // thanS.find('.nộiDung').sửaLớp('dn');
                                            // thanS.find('.đọcSách').sửaLớp('-dn');



                                            cl("LGOOGOGOG", khungCha.find('.oksa').iVal())
                                            /* 
                                            moss = $(this).hasClass("mos"),
                                            speaks = $(this).hasClass("spe"),
                                            nauAns = $(this).hasClass("nauA"),
                                            tinhCams = $(this).hasClass("tinhC"),
                                            biAns = $(this).hasClass("biA"),
                                            kyNangs = $(this).hasClass("kyNa"),
                                            kinhDis = $(this).hasClass("kiD"),
                                            tuTruyens = $(this).hasClass("tuTr"),
                                            trNgans = $(this).hasClass("trNg"),
                                            thieuNhis = $(this).hasClass("thieuN"),
                                            giaTuongs = $(this).hasClass("giaT");
                                            */

                                            // $(".loadTr").sửaLớp('dn');
                                            // thanS.find('.đọcSách').empty().append(
                                            //     bốCục_môTả(mosts ? "most" : speaks ? "speak" : "", tenSach)
                                            // )

                                            // cuộn(0);
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
                                        }, 500)
                                    })
                                )
                            ).hover(function () {
                                $(this).find('.bokHT').sửaLớp('db,-dn')
                            }, function () {
                                $(this).find('.bokHT').sửaLớp('dn,-db')
                            })
                        )
                    }),
                ),
            ),
            mosts ? $('<div>', { class: 'df fww khungPhụ ' }) : speaks ? $('<div>', { class: 'df fww khungPhụ1 ' }) : "",
        ),
    )
};

// Bộ cục cho chuyên mục kiểu 1
const bốCục1_cap2 = function (đốiTượng, á, à) {
    var inWeek = đốiTượng == "inWeek",
        news = đốiTượng == "new";
    return $('<div>').append(
        // $('<div>', { class: 'container plr25 đọcSách' }),
        $('<div>', { class: '' }).append( //nộiDung
            $('<div>', { class: 'mtb15 pr' }).append(
                $('<div>', { class: 'col-md-12' }).append(
                    // Lịch phát hành sách
                    $('<div>', { class: 'pa15 bg4 cf df mb15 aic' }).append(
                        $('<div>', { class: 'pr wh150 pt35' }).append(
                            ['left-top-corner', 'right-top-corner', 'right-bottom-corner', 'left-bottom-corner'].map(function (i) {
                                return $('<div>', { class: 'pa ' + i })
                            }),
                            $('<div>', { class: "wh150 tac" }).append(
                                $('<p>', { class: 'fs13', text: 'Lịch Phát Hành' }),
                                [{ class: 'wh20 dib b1sd mb5 bt0 blr0 mr5' }, { class: 'fs13 dib mtb15', text: '2022' }, { class: 'wh20 dib b1sd mb5 bt0 blr0 ml5' }, { class: 'db fs2', text: 'Tháng 10' }].map(function (i) {
                                    return $('<c>', { class: i.class, text: i.text })
                                })
                            )
                        ),
                        // Mộc thời gian phát hành col-md-10 
                        $('<div>', { id: 'release', class: 'plr25 pt15 swiper' }).append(
                            $('<div>', { class: 'swiper-wrapper' }).append(
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function () {
                                    return $('<div>', { class: 'bra3 pa15 df bgcf swiper-slide' }).append(
                                        $('<div>', { class: 'bg4 pa7 tac lh13 bra3' }).append(
                                            $('<div>', { class: '', text: 'Thứ 5' }),
                                            $('<div>', { class: 'fwb fs12', text: '01/09' }),
                                        ),
                                        $('<div>', { class: 'c3 plr10 tal pt7', text: 'Yêu lại từ đầu' })
                                    )
                                }),
                            ),
                            $('<div>', { class: 'swiper-scrollbar' })
                        ),

                    ),
                ),
                // Nội dung
                $('<div>', { class: 'col-md-12 bgcf' }).append(
                    $('<div>', { class: 'bgcf plr15 pt10' }).append(
                        // Tiêu đề
                        $('<div>', { class: 'ptb10 b1sd bt0 blr0 lh12 pr' }).append(
                            $('<div>', { class: 'dib fs15 cpi z1 pr cpi o05', text: 'Trang chủ / ' }).click(function () {
                                loadXuLy();
                                chờ(function () {
                                    $('.dsBook').sửaLớp('-dn');
                                    $('.chuyênMục').sửaLớp('dn');
                                    $(".loadTr").sửaLớp('dn');
                                }, 1200)
                            }),
                            $('<div>', {
                                class: 'dib fs15 cpi z1 pr cpi cl1 ml7',
                                html: inWeek ? "Mới trong tuần" : news ? "Sách mới nhất" : ""
                            }),
                        ),
                        // Mô tả 
                        $.map((
                            inWeek ? dataBook.data_inWeek :
                                news ? dataBook.data_new : "" || []
                        ), function (á, à) {
                            return $('<div>', { class: '' }).append(
                                $('<div>', { class: 'col-md-4' }).append(
                                    $('<div>', { class: 'hfc pa15' }).append(
                                        $('<div>', { class: 'df bóng bra5 h200 b1sd pr khungSach' }).append(
                                            $('<div>').append(
                                                $('<img>', { class: ' bóng', src: á.anhSach }).css({ 'height': '-webkit-fill-available' })
                                            ),
                                            $('<div>', { class: 'w1 pr bgcf b1sd btb0 br0' }).append(
                                                $('<div>', { class: 'pa15 pr z9 h1' }).append(
                                                    $('<div>', { class: 'tac fwb wbox tenSach', rows: '1', tip: á.tenSach, text: á.tenSach }),
                                                    $('<div>', { class: 'wbox mtb7 fs08', rows: '5', tip: á.moTa, html: á.moTa, }),
                                                    $('<div>', { class: 'pb10 w1 tar pa b0 l0 plr15 pt15 b1sd blr0 bb0 bc6' }).append(
                                                        $('<c>', { class: 'wbox dib c9 fs08 cpi cl1h tduh ttu tar ', rows: '1', tip: á.tacGia, text: á.tacGia })
                                                    ),
                                                ),
                                            ),
                                            $('<div>', { class: 'pa z9 z1 wh1 df aic jcsc bgc05 bokHT dn' }).append(
                                                $('<div>', { class: 'dib' }).append(
                                                    $.icon('import_contacts::bgcf cl1 pa15 bra50 fs2 cpi')
                                                ).on("click", function () {
                                                    // Đọc sách 
                                                    var noiDung = $(this).closest('.nộiDung'),
                                                        docSach = $(this).closest('.đọcSách'),
                                                        khungSach = $(this).closest('.khungSach'),
                                                        tenSach = khungSach.find('.tenSach').iVal();
                                                    cl("LOG__________", noiDung)
                                                    noiDung.sửaLớp('dn');
                                                    docSach.append(
                                                        bốCục_môTả('inWeek', tenSach)
                                                    )
                                                })
                                            )
                                        ).hover(function () {
                                            $(this).find('.bokHT').sửaLớp('db,-dn')
                                        }, function () {
                                            $(this).find('.bokHT').sửaLớp('dn,-db')
                                        })
                                    )
                                ),
                            )
                        })

                    )
                )
            ),
            // sách khuyên đọc
            bốCục_advice('1'),

        )
    )

};

// Bộ cục cho chuyên mục kiểu 2
const bốCục2_cap2 = function (á, à) {
    // BXH sách trong tháng
    return $('<div>', { class: 'mtb15 pr' }).append(
        $('<div>', { class: 'col-md-9 pr pr15' }).append(
            $('<div>', { class: 'pa15 bgcf' }).append(
                // Tiêu đề
                $('<div>', { class: 'b1sd bt0 blr0 lh12 pr pb10 mb10' }).append(
                    $('<div>', { class: 'dib fs15 cpi z1 pr cpi o05', text: 'Trang chủ / ' }).click(function () {
                        loadXuLy();
                        chờ(function () {
                            $('.dsBook').sửaLớp('-dn');
                            $('.chuyênMục').sửaLớp('dn');
                            $(".loadTr").sửaLớp('dn');
                        }, 1200)
                    }),
                    $('<a>', { class: 'dib fs15 cpi z1 pr pl15 cpi cl1', href: '', text: 'BXH trong tháng' }),
                    $('<c>', { class: 'fr dib tar fs12 cpi pt3 z1 pr' }).append(
                        (["Sách", "Sách nói"] || []).map(function (i, index) {
                            return $('<c>', { class: 'tduh dib cl1h ' + (index !== 1 ? 'pr10 b1sd bl0 btb0 mr10' : ''), text: i })
                        })
                    ),
                ),
                // Mô tả 
                $('<div>', { class: 'df fww' }).append(
                    // xếp hạng sách
                    $.map(dataBook.data_bxh, function (á, à) {
                        return $('<div>', { class: 'col-md-12' }).append(
                            $('<div>', { class: 'col-md-12 hfc pa15' }).append(
                                $('<div>', { class: 'df bóng bra5 h100 b1sd pr' }).append(
                                    $('<div>').append(
                                        $('<img>', { class: ' bóng', src: á.anhSach }).css({ 'height': '-webkit-fill-available' })
                                    ),
                                    $('<div>', { class: 'w1 pr' }).append(
                                        $('<div>', { class: 'pa15 pr z9 h1' }).append(
                                            $('<div>', { class: '' }).append(
                                                $('<div>', { class: 'fwb', text: á.tenSach }),
                                                $('<div>', { class: 'dib c9 fs08 cpi cl1h tduh ttu tar ', text: á.tacGia })
                                            ),
                                            $('<div>', { class: 'tar' }).append(
                                                $('<c>', { class: 'dib fs09 mr15', text: '353' }).icon('visibility'),
                                                $('<c>', { class: 'dib fs09', text: '353' }).icon('favorite')
                                            )
                                        ),
                                    ),
                                    $('<div>', { class: 'pa z9 z1 wh1 df aic jcsc bgc05 dn' }).append(
                                        $('<a>', { class: 'dib', target: '_self' }).append(
                                            $.icon('import_contacts::bgcf cl1 pa10 bra50 fs15 cpi')
                                        )
                                    )
                                ).hover(function () {
                                    $(this).find('div:nth-child(3)').sửaLớp('db,-dn')
                                }, function () {
                                    $(this).find('div:nth-child(3)').sửaLớp('dn,-db')
                                }),

                            )
                        )
                    })
                ),
            )
        ),
        // sách khuyên đọc
        $('<div>', { class: 'col-md-3 bgcf bóng pa15', style: 'height:124vh;overflow:scroll;' }).append(
            // Tiêu đề
            $('<div>', { class: 'b1sd bt0 blr0 lh12 pr pb10 mb10' }).append(
                $('<a>', { class: 'dib fs15 cpi z1 pr pl15 cpi cl1h', href: 'http://localhost:8080/dashboard/do_an/advice.html', text: 'Sách khuyên đọc' }),
            ),
            $.map(dataBook.data_advice, function (á, à) {
                return $('<div>', { class: 'col-md-12 hfc pa15' }).append(
                    $('<div>', { class: 'df bóng bra5 h100 b1sd pr' }).append(
                        $('<div>').append(
                            $('<img>', { class: ' bóng', src: á.anhSach }).css({ 'height': '-webkit-fill-available' })
                        ),
                        $('<div>', { class: 'w1 pr' }).append(
                            $('<div>', { class: 'pa15 pr z9 h1 bgcf' }).append(
                                $('<div>', { class: '' }).append(
                                    $('<div>', { class: 'fwb', text: á.tenSach }),
                                    $('<div>', { class: 'dib c9 fs08 cpi cl1h tduh ttu tar ', text: 'Richard Templar' })
                                ),
                            ),
                        ),
                        $('<div>', { class: 'pa z9 z1 wh1 df aic jcsc bgc05 dn' }).append(
                            $('<a>', { class: 'dib', target: '_self' }).append(
                                $.icon('import_contacts::bgcf cl1 pa10 bra50 fs15 cpi')
                            )
                        )
                    ).hover(function () {
                        $(this).find('div:nth-child(3)').sửaLớp('db,-dn')
                    }, function () {
                        $(this).find('div:nth-child(3)').sửaLớp('dn,-db')
                    }),

                )
            }),
        )
    )
};

// Bố cục mô tả sách 
const bốCục_môTả = function (Id, tenSach, anhSach, theLoai, tacGia, nxb, ngayCapNhat, moTa, noiDung, viTri, hinhThuc, đốiTượng) { //đốiTượng, conTrỏ
    var inWeekS = đốiTượng == "inWeek",
        bxhs = đốiTượng == "bxh",
        news = đốiTượng == "new",
        adviceS = đốiTượng == "advice",
        mosts = đốiTượng == "most",
        speaks = đốiTượng == "speak",
        tinhCams = đốiTượng == 'tinhCam',
        biAns = đốiTượng == 'biAn',
        kyNangs = đốiTượng == 'kyNang',
        kinhDis = đốiTượng == 'kinhDi',
        tuTruyens = đốiTượng == 'tuTruyen',
        trNgans = đốiTượng == 'trNgan',
        sucKhoes = đốiTượng == 'sucKhoe',
        thieuNhis = đốiTượng == 'thieuNhi',
        giaTuongs = đốiTượng == 'giaTuong',
        timKiem = đốiTượng == "timKiem";
    return $('<div>', { class: '' }).append(
        $('<div>', {
            class: 'col-md-12 bgcf pa15 bóng bra3 bốCục_môTả ma15 mlr0 h500'
        }).append(
            // Tiêu đề
            $('<div>', { class: 'b1sd bt0 blr0 ptb7 lh12 pr col-md-12 mb15 ' }).append( // target: '_self', href: 'http://localhost:8080/Test/home.php',
                $('<div>', { class: 'dib fs15 cpi z1 pr pl15 cpi cl1h', text: "Trang chủ /" }).on("click", function () {
                    loadXuLy();
                    chờ(function () {
                        $(".loadTr").sửaLớp('dn');
                        $('.đọcSách').sửaLớp('dn');
                        $('.nộiDung').sửaLớp('-dn');
                    }, 1200)

                    // cuộn(0);
                }),
                $('<a>', { class: 'dib fs15 cpi z1 pr pl15 cpi cl1 tenSach', target: '_self', text: tenSach }),
            ),
            // Nội dung: cột phải 
            $('<div>', { class: 'col-md-8  mb15' }).append(
                $('<div>', { class: 'col-md-4' }).append(
                    $('<img>', {
                        class: 'cpi mlra w1', src: (
                            // inWeekS ? "img/trongTuần/" :
                            //     bxhs ? "img/bxhSách/" :
                            timKiem && anhSach.split("_")[0] == "BXH" || bxhs ? "img/bxhSách/" :
                                timKiem && anhSach.split("_")[0] == "newBook" ? "img/sáchMới/" :
                                    timKiem && anhSach.split("_")[0] == "trongTuần" || inWeekS ? "img/trongTuần/" :
                                        timKiem && anhSach.split("_")[0] == "tinhCam" || tinhCams ? "img/mụcLục/tìnhCảm/" :
                                            timKiem && anhSach.split("_")[0] == "biAn" || biAns ? "img/mụcLục/bíẨn/" :
                                                timKiem && anhSach.split("_")[0] == "kyNang" || kyNangs ? "img/mụcLục/kỹNăng/" :
                                                    timKiem && anhSach.split("_")[0] == "kinhDi" || kinhDis ? "img/mụcLục/kinhDị/" :
                                                        timKiem && anhSach.split("_")[0] == "tuTruyen" || tuTruyens ? "img/mụcLục/tựTruyện/" :
                                                            timKiem && anhSach.split("_")[0] == "trNgan" || trNgans ? "img/mụcLục/truyệnNgắn/" :
                                                                timKiem && anhSach.split("_")[0] == "sucKhoe" || sucKhoes ? "img/mụcLục/chamSoc/" :
                                                                    timKiem && anhSach.split("_")[0] == "thieuNhi" || thieuNhis ? "img/mụcLục/thieuNhi/" :
                                                                        timKiem && anhSach.split("_")[0] == "giaTuong" || giaTuongs ? "img/mụcLục/giaTuong/" : ""
                        ) + anhSach
                    }) //
                ),
                $('<div>', { class: 'col-md-8 plr15 lh15' }).append(
                    $('<div>').append(
                        $('<div>').append(
                            $('<span>', { class: 'c9 ml5 db fwb', text: 'Tác giả: ', z: tacGia }),
                            $('<span>', { class: 'c9 ml5 db fwb', text: 'Thể loại: ', z: theLoai }),
                            $('<span>', { class: 'c9 ml5 db fwb', text: 'Nhà xuất bản: ', z: nxb }),
                            $('<span>', { class: 'c9 ml5 db fwb', text: 'Ngày cập nhật: ', z: ngayCapNhat }),
                        ),
                        $('<div>', { class: "df aic" }).append(
                            $('<div>', { class: 'ptb5 bg1 tac cf fs12 mtb10 bra5 cpi shineh plr15 wfc', text: "Đọc Sách" }).click(function () {
                                $(".đọcSách").empty().append(
                                    bốCục_đọcSách(Id, tenSach, anhSach, theLoai, tacGia, nxb, ngayCapNhat, moTa, noiDung, viTri, hinhThuc, đốiTượng)
                                )
                            }),
                            $(".account").iVal() == "Admin" ?
                                $.icon("edit_square::fs2 cl1 ml15 cpi").tip("Chỉnh sửa sách").click(function () {
                                    cậpNhật(Id, tenSach, anhSach, theLoai, tacGia, nxb, ngayCapNhat, moTa, noiDung, viTri, hinhThuc, "sửa");
                                }) : "",
                            $(".account").iVal() !== "Đăng nhập" ?
                                $.icon("download_for_offline::fs2 cl1 ml15 cpi").tip("tải xuống").click(function () {
                                    downloadFile(noiDung, tenSach + ".doc")
                                }) : ""
                        ),
                        // Giới thiệu nội dung sách 
                        $('<div>', {
                            class: 'fs09', style: 'font-style:oblique;height:230px;overflow:scroll;', html: $.map([1, 2, 3, 4, 5], function () {
                                return moTa + '<br>';
                            })
                        }),

                    )
                ),
            ),
        ).each(function () {
            //  Nội dung: cột trái
            $(this).append(
                $('<div>', { class: 'col-md-4 df fww jcsc mb15 cLeft jcfs pl35', style: 'height:406px;overflow:scroll;' }).empty().append(
                    $.map(
                        inWeekS ? dataBook.data_inWeek :
                            bxhs ? dataBook.data_bxh :
                                news ? dataBook.data_new :
                                    // moss ? dataBook.data_most :
                                    //     speaks ? dataBook.data_speak :
                                    tinhCams ? dataBook.data_tinhCam :
                                        biAns ? dataBook.data_biAn :
                                            kyNangs ? dataBook.data_kyNang :
                                                kinhDis ? dataBook.data_kinhDi :
                                                    tuTruyens ? dataBook.data_tuTruyen :
                                                        trNgans ? dataBook.data_trNgan :
                                                            sucKhoes ? dataBook.data_nauAn :
                                                                thieuNhis ? dataBook.data_thieuNhi :
                                                                    giaTuongs ? dataBook.data_giaTuong : "" || []
                        , function (á, à) {
                            return $('<div>', { class: 'ohi bra5 bóng b1sd pr fdc w100 oh mb15 mr15 hfc ' }).append(
                                // Bìa sách
                                $('<div>', { class: 'tac pr b1sd bt0 blr0' }).append(
                                    $('<img>', { class: 'pr z1 book cpi mlra w200 ', style: 'width:100px;', src: á.anhSach }),
                                    $('<div>', { class: 'pa z9 z1 wh1 df aic jcsc bgc05 dn t0 hoVer' }).append(
                                        $('<a>', { class: 'dib', target: '_self' }).append(
                                            $.icon('import_contacts::bgcf cl1 pa15 bra50 fs2 cpi')
                                        )
                                    )
                                ).hover(function () {
                                    $(this).find('.hoVer').sửaLớp('db,-dn')
                                }, function () {
                                    $(this).find('.hoVer').sửaLớp('dn,-db')
                                }),
                                // Mô tả
                                $('<div>', { class: 'pr w1 bgcf' }).append(
                                    $('<div>', { class: 'ptb10 plr15 pr z1' }).append(
                                        $('<c>', { class: 'dib c9 fs07 cpi cl1h tduh ttu tac w1 wbox  ', rows: '1', tip: á.tenSach, text: á.tacGia }).on("click", function () {
                                            $('.đọcSách').empty().append(
                                                bốCục_môTả(
                                                    inWeeks ? "inWeek" :
                                                        bxhs ? "bxh" :
                                                            news ? "new" :
                                                                moss ? "most" :
                                                                    speaks ? "speak" :
                                                                        nauAns ? "nauAnns" :
                                                                            tinhCams ? "tinhCam" :
                                                                                biAns ? "biAn" :
                                                                                    kyNangs ? "kyNang" :
                                                                                        kinhDis ? "kiDinh" :
                                                                                            tuTruyens ? "tuTruyen" :
                                                                                                trNgans ? "trNgan" :
                                                                                                    thieuNhis ? "thieuNhig" :
                                                                                                        giaTuongs ? "giaTuong" : "",
                                                    $(this).attr("tip")
                                                ),
                                            ); // inWeeks ? "inWeek" : bxhs ? "bxh" : 

                                        }),
                                    ),
                                ),
                            )
                        })
                )
            );
            // Slider

        }),


        // Sách khuyên đọc
        bốCục_advice("1")
    )

};

// Bố cục đọc sách
const bốCục_đọcSách = function (Id, tenSach, anhSach, theLoai, tacGia, nxb, ngayCapNhat, moTa, noiDung, viTri, hinhThuc, đốiTượng) {
    var inWeekS = đốiTượng == "inWeek",
        bxhS = đốiTượng == "bxh",
        news = đốiTượng == "new",
        adviceS = đốiTượng == "advice",
        mosts = đốiTượng == "most",
        speaks = đốiTượng == "speak",
        tinhCams = đốiTượng == 'tinhCam',
        biAns = đốiTượng == 'biAn',
        kyNangs = đốiTượng == 'kyNang',
        kiDinhs = đốiTượng == 'kiDinh',
        tuTruyens = đốiTượng == 'tuTruyen',
        trNgans = đốiTượng == 'trNgan',
        nauAns = đốiTượng == 'nauAn',
        thieuNhigs = đốiTượng == 'thieuNhig',
        giaTuongs = đốiTượng == 'giaTuong';
        cl("ssssss",Id, tenSach, anhSach, theLoai, tacGia, nxb, ngayCapNhat, moTa, noiDung, viTri, hinhThuc, đốiTượng) 
    return $('<div>', { class: '  ma10 bgcf pa15' }).append(
        $('<div>', { class: 'tac w1 fs15 mb10 cl1 df' }).append(
            $.icon('arrow_back::bấmĐc').click(function () {
                loadXuLy();
                chờ(function () {
                    $(".loadTr").sửaLớp('dn');
                    $('.nộiDung').sửaLớp('-dn');
                    $('.đọcSách').sửaLớp('dn');
                }, 1200)
            }),
            $('<div>', { class: 'w1', text: tenSach }),
        ),
    ).each(function () {
        // cl("aaaaaaaaa",noiDung) 
        // $('<div>', { class: '', text: noiDung  }) 
        for (let i = 0; i < 10; i++) {
            $(this).append(
                $('<div>', { class: '', html: Id + tenSach + anhSach + theLoai + tacGia + nxb + ngayCapNhat + moTa + noiDung + viTri + hinhThuc + đốiTượng  })
            )
        }
    })
};

// Sách trong menu
const bốCục_Menu = function (Id, tenSach, anhSach, theLoai, tacGia, nxb, ngayCapNhat, moTa, noiDung, viTri, hinhThuc, đốiTượng) {
    var tinhCams = đốiTượng == "tinhCam",
        biAns = đốiTượng == "biAn",
        kyNangs = đốiTượng == "kyNang",
        kinhDis = đốiTượng == "kinhDi",
        tuTruyens = đốiTượng == "tuTruyen",
        trNgans = đốiTượng == "trNgan",
        sucKhoes = đốiTượng == "sucKhoe",
        thieuNhis = đốiTượng == "thieuNhi",
        giaTuongs = đốiTượng == "giaTuong",
        timKiem = đốiTượng == "timKiem";

    cl("gloooo", anhSach.split("_")[0], đốiTượng);
    return $("<div>", { class: 'w30  bóng b1sd df bgcf mr25 mb40' }).append(
        // Ảnh
        $('<div>', { class: 'w50 h1 pr' }).append($('<img>', {
            class: 'cpi w1 h1', src: (
                timKiem && anhSach.split("_")[0] == "tinhCam" || tinhCams ? "img/mụcLục/tìnhCảm/" :
                    timKiem && anhSach.split("_")[0] == "biAn" || biAns ? "img/mụcLục/bíẨn/" :
                        timKiem && anhSach.split("_")[0] == "kyNang" || kyNangs ? "img/mụcLục/kỹNăng/" :
                            timKiem && anhSach.split("_")[0] == "kinhDi" || kinhDis ? "img/mụcLục/kinhDị/" :
                                timKiem && anhSach.split("_")[0] == "tuTruyen" || tuTruyens ? "img/mụcLục/tựTruyện/" :
                                    timKiem && anhSach.split("_")[0] == "trNgan" || trNgans ? "img/mụcLục/truyệnNgắn/" :
                                        timKiem && anhSach.split("_")[0] == "sucKhoe" || sucKhoes ? "img/mụcLục/chamSoc/" :
                                            timKiem && anhSach.split("_")[0] == "thieuNhi" || thieuNhis ? "img/mụcLục/thieuNhi/" :
                                                timKiem && anhSach.split("_")[0] == "giaTuong" || giaTuongs ? "img/mụcLục/giaTuong/" :
                                                    timKiem && anhSach.split("_")[0] == "BXH" ? "img/bxhSách/" :
                                                        timKiem && anhSach.split("_")[0] == "newBook" ? "img/sáchMới/" :
                                                            timKiem && anhSach.split("_")[0] == "trongTuần" ? "img/trongTuần/" : ""
            ) + anhSach
        })),
        // Mô tả
        $('<div>', { class: 'ml5 w50 h1 plr5 ptb10 khungSach' }).append(
            $('<div>', { class: 'fs12 mb3 wbox cpi cl1h tduh tenSach', rows: '2', text: tenSach }),
            $('<div>', { class: 'mb3 wbox', rows: '1', text: 'Tác giả: ' + tacGia }),
            $.map([1, 2, 3, 4, 5], function () { return $.icon('stars::co,mr3') }),
            $('<div>', { class: 'wbox cpi', rows: '5', html: moTa }),
            // xem chi tiết
            $('<div>', { class: 'bg1 cf w50 tac mla ptb7 mt15 mr10 bra3 shineh cpi', text: 'Xem chi tiết' }).click(function () {
                var docSach = $(this).closest('.đọcSách'),
                    noiDung = $(this).closest('.nộiDung');

                // Sửa lớp
                noiDung.sửaLớp("dn");
                docSach.sửaLớp("-dn");

                docSach.empty().append(
                    // Nội dung sách  
                    bốCục_môTả(Id, tenSach, anhSach, theLoai, tacGia, nxb, ngayCapNhat, moTa, noiDung, viTri, hinhThuc, đốiTượng)
                )
                cuộn(0);
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
            })
        )
    )

};

// Sách trong tuần 
const bốCục_inWeek = function (cấp, i, index) {
    var cấp_1 = cấp == "1", //  Hiển thị ở trang chủ 
        cấp_2 = cấp == "2", //  Hiển thị trang của sách 
        cấp_3 = cấp == "3"; //  Hiển thị trang đọc

    return cấp_1 ?
        $('<div>', { class: 'bgcf mb25 pb25 pt10 bóng plr25 khungBoc inWeek' }).append(
            // Tiêu đề
            $('<div>', { class: 'ptb10 b1sd bt0 blr0 lh12 pr' }).append(
                $('<div>', { class: 'dib fs15 cpi z1 pr cpi cl1h titles ', html: "Mới trong tuần" }),
                $('<div>', { class: 'dib fr fs12 tduh cpi z1 pr cl1h', text: 'Xem tất cả' }),
            ).click(function () {
                loadXuLy();
                chờ(function () {
                    $(".dsBook").sửaLớp('dn');
                    $(".loadTr").sửaLớp('dn');
                    $('.chuyênMục').sửaLớp('-dn');
                    $(".chuyênMục").empty().append(
                        bốCục_inWeek('2'),
                    )
                    var swiper = new Swiper("#release", {
                        scrollbar: {
                            el: ".swiper-scrollbar",
                            hide: true,
                        },
                        slidesPerView: 4,
                        spaceBetween: 30,
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
                }, 1200)
            }),
            // Nội dung
            $('<div>', { class: 'swiper mySwiper' }).append(
                $('<div>', { id: 'inWeek', class: ' ptb15 swiper-wrapper' }).append(
                    // $.map((dataBook.data_inWeek || []), function (á, à) {
                    //     return bốCục1_cap1(á, à)
                    // })
                )
            )
        ) :
        cấp_2 ?
            bốCục1_cap2("inWeek")
            : cấp_3 ?
                ""
                : ""
};

// Sách xếp hạng trong tháng
const bốCục_BXH = function (cấp, i, index) {
    var cấp_1 = cấp == "1", //  Hiển thị ở trang chủ 
        cấp_2 = cấp == "2", //  Hiển thị trang của sách 
        cấp_3 = cấp == "3"; //  Hiển thị trang đọc
    return cấp_1 ?
        $('<div>', { class: 'bgcf mb25 pb25 pt10 bóng plr25 khungBoc' }).append(
            // Tiêu đề
            $('<div>', { class: 'ptb10 b1sd bt0 blr0 lh12 pr' }).append(
                $('<div>', { class: 'dib fs15 cpi z1 pr cpi cl1h titles ', html: "BXH tháng" }),
                $('<div>', { class: 'dib fr fs12 tduh cpi z1 pr cl1h', text: 'Xem tất cả' }),
            ).click(function () {
                loadXuLy();
                chờ(function () {
                    $(".dsBook").sửaLớp('dn');
                    $(".loadTr").sửaLớp('dn');
                    $('.chuyênMục').sửaLớp('-dn');
                    $(".chuyênMục").empty().append(
                        bốCục2_cap2(),
                    )
                    var swiper = new Swiper("#release", {
                        scrollbar: {
                            el: ".swiper-scrollbar",
                            hide: true,
                        },
                        slidesPerView: 4,
                        spaceBetween: 30,
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
                }, 1200)


            }),
            // Nội dung
            $('<div>', { class: 'swiper mySwiper' }).append(
                $('<div>', { id: 'bxh', class: ' ptb15 swiper-wrapper' }).append(
                    // $.map((dataBook.data_bxh || []), function (á, à) {
                    //     return bốCục1_cap1(á, à)
                    // })
                )
            )
        ) : cấp_2 ?
            'bốCục1_cap2("bxh")'
            : cấp_3 ?
                ""
                : ""
};

// Sách mới nhất 
const bốCục_new = function (cấp, i, index) {
    var cấp_1 = cấp == "1", //  Hiển thị ở trang chủ 
        cấp_2 = cấp == "2", //  Hiển thị trang của sách 
        cấp_3 = cấp == "3"; //  Hiển thị trang đọc
    return cấp_1 ?
        $('<div>', { class: 'bgcf mb25 pb25 pt10 bóng plr25 khungBoc' }).append(
            // Tiêu đề
            $('<div>', { class: 'ptb10 b1sd bt0 blr0 lh12 pr' }).append(
                $('<div>', { class: 'dib fs15 cpi z1 pr cpi cl1h titles ', html: "Sách mới nhất" }),
                $('<div>', { class: 'dib fr fs12 tduh cpi z1 pr cl1h', text: 'Xem tất cả' }),
            ).click(function () {
                loadXuLy();
                chờ(function () {
                    $(".dsBook").sửaLớp('dn');
                    $(".loadTr").sửaLớp('dn');
                    $('.chuyênMục').sửaLớp('-dn');
                    $(".chuyênMục").empty().append(
                        bốCục_new('2'),
                        cuộn(0)
                    )
                    var swiper = new Swiper("#release", {
                        scrollbar: {
                            el: ".swiper-scrollbar",
                            hide: true,
                        },
                        slidesPerView: 4,
                        spaceBetween: 30,
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
                }, 1200)
            }),
            // Nội dung
            $('<div>', { class: 'swiper mySwiper' }).append(
                $('<div>', { id: 'new', class: ' ptb15 swiper-wrapper' }).append(
                    // $.map((dataBook.data_new || []), function (á, à) {
                    //     return bốCục1_cap1(á, à)
                    // })
                )
            )
        ) :
        cấp_2 ?
            bốCục1_cap2("new")
            : ""
};

// Sách đọc nhiều nhất
const bốCục_most = function (cấp, i, index) {
    var cấp_1 = cấp == "1", //  Hiển thị ở trang chủ 
        cấp_2 = cấp == "2", //  Hiển thị trang của sách 
        cấp_3 = cấp == "3"; //  Hiển thị trang đọc
    return cấp_1 ?
        bốCục2_cap1('most')
        : cấp_2 ?
            $('<div>', { class: 'mtb15 pr' }).append(
                $('<div>', { class: '' }).append(
                    $('<div>', { class: "col-md-9 bgcf plr15 pt10" }).append(
                        // Tiêu đề
                        $('<div>', { class: 'b1sd bc6 blr0 bt0 ptb7 lh12 pr mb15 df jcsb' }).append(
                            $('<div>').append(
                                $('<div>', { class: 'dib fs15 cpi z1 pr cpi o05', text: 'Trang chủ / ' }).click(function () {
                                    loadXuLy();
                                    chờ(function () {
                                        $('.dsBook').sửaLớp('-dn');
                                        $('.chuyênMục').sửaLớp('dn');
                                        $(".loadTr").sửaLớp('dn');
                                    }, 1200)
                                }),
                                $('<a>', { class: 'dib fs15 cpi z1 pr cpi cl1 ml7', target: '_self', html: 'Sách đọc nhiều nhất' })
                            ),
                            $('<c>', { class: 'fr dib tar fs12 cpi pt3 c3 z1 pr' }).append(
                                (["Kỹ thuật - Công nghệ", "Quản lý thời gian", "Văn hóa nghệ thuật"] || []).map(function (i, index) {
                                    return $('<c>', { class: 'tduh dib cl1h ' + (index !== 4 ? 'pr10 b1sd bl0 btb0 mr10' : ''), text: i })
                                })
                            ),
                        ),
                        // Nội dung
                        $('<div>', { id: 'recoRead', class: 'df fww' }).append(
                            $.map(dataBook.data_most, function (i) {
                                return $('<div>', { class: 'ohi bra5 bóng b1sd pr h1 mlr15 mb15' }).append(
                                    $('<div>', { class: 'tac pr' }).append(
                                        $('<img>', { class: 'pr z1  book cpi mlra b1sd bc1 bt0 blr0 w200 ', style: 'width:160px;', src: i.anhSach }),
                                        $('<div>', { class: 'pa t0 z9 wh1 df aic jcsc bgc05 dn' }).append(
                                            $('<a>', { class: 'dib', target: '_self' }).append(
                                                $.icon('import_contacts::bgcf cl1 pa15 bra50 fs2 cpi')
                                            )
                                        ),
                                    ).hover(function () {
                                        $(this).find('div').sửaLớp('db,-dn')
                                    }, function () {
                                        $(this).find('div').sửaLớp('dn,-db')
                                    }),
                                    // Mô tả
                                    $('<div>', { class: 'pr' }).append(
                                        $('<div>', { class: 'ptb10 plr15 pr z1' }).append(
                                            $('<c>', { class: 'dib c9 fs07 cpi cl1h tduh ttu tac w1', text: i.tacGia }),
                                        ),
                                    ),
                                )
                            })
                        ),
                    ),
                    $('<div>', { class: 'col-md-3 bgcf bóng pa15', style: 'height:124vh;overflow:scroll;' }).append(
                        // Tiêu đề
                        $('<div>', { class: 'b1sd bt0 blr0 lh12 pr pb10 mb10' }).append(
                            $('<a>', { class: 'dib fs15 cpi z1 pr pl15 cpi cl1h', href: 'http://localhost:8080/dashboard/do_an/advice.html', text: 'Sách khuyên đọc' }),
                        ),
                        $.map(dataBook.data_advice, function (á, à) {
                            return $('<div>', { class: 'col-md-12 hfc pa15' }).append(
                                $('<div>', { class: 'df bóng bra5 h100 b1sd pr' }).append(
                                    $('<div>').append(
                                        $('<img>', { class: ' bóng', src: á.anhSach }).css({ 'height': '-webkit-fill-available' })
                                    ),
                                    $('<div>', { class: 'w1 pr' }).append(
                                        $('<div>', { class: 'pa15 pr z9 h1 bgcf' }).append(
                                            $('<div>', { class: '' }).append(
                                                $('<div>', { class: 'fwb', text: á.tenSach }),
                                                $('<div>', { class: 'dib c9 fs08 cpi cl1h tduh ttu tar ', text: 'Richard Templar' })
                                            ),
                                        ),
                                    ),
                                    $('<div>', { class: 'pa z9 z1 wh1 df aic jcsc bgc05 dn' }).append(
                                        $('<a>', { class: 'dib', target: '_self' }).append(
                                            $.icon('import_contacts::bgcf cl1 pa10 bra50 fs15 cpi')
                                        )
                                    )
                                ).hover(function () {
                                    $(this).find('div:nth-child(3)').sửaLớp('db,-dn')
                                }, function () {
                                    $(this).find('div:nth-child(3)').sửaLớp('dn,-db')
                                }),

                            )
                        }),
                    )
                ),
            )
            : ""
};

// Sách nói
const bốCục_speak = function (cấp, i, index) {
    var cấp_1 = cấp == "1", //  Hiển thị ở trang chủ 
        cấp_2 = cấp == "2", //  Hiển thị trang của sách 
        cấp_3 = cấp == "3"; //  Hiển thị trang đọc
    return cấp_1 ?
        bốCục2_cap1('speak')
        : ""
};

// Sách khuyên đọc
const bốCục_advice = function (cấp, i, index) {
    var cấp_1 = cấp == "1", //  Hiển thị ở trang chủ 
        cấp_2 = cấp == "2", //  Hiển thị trang của sách 
        cấp_3 = cấp == "3"; //  Hiển thị trang đọc
    return cấp_1 ?
        $('<div>', { class: 'col-md-12 mt10 bgcf pa15 pt0' }).css({
            "height": "fit-content"
        }).append(
            // Tiêu đề
            $('<div>', { class: 'ptb10 b1sd bt0 blr0 lh12 pr' }).append(
                $('<div>', { class: 'dib fs15 cpi z1 pr cpi cl1h titles ', html: "Sách khuyên đọc" }),
                $('<div>', { class: 'dib fr fs12 tduh cpi z1 pr cl1h', text: 'Xem tất cả' }),
            ).click(function () {
                loadXuLy();
                chờ(function () {
                    $(".dsBook").sửaLớp('dn');
                    $(".loadTr").sửaLớp('dn');
                    $('.chuyênMục').sửaLớp('-dn');
                    $(".chuyênMục").empty().append(
                        bốCục_advice('2'),
                        cuộn(0)
                    )
                    var swiper = new Swiper("#release", {
                        scrollbar: {
                            el: ".swiper-scrollbar",
                            hide: true,
                        },
                        slidesPerView: 4,
                        spaceBetween: 30,
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
                }, 1200)
            }),
            // Nội dung
            $('<div>', { id: 'recoRead', class: 'df jcsb fww pa15 swiper myAdvice' }).append(
                $('<div>', { class: 'swiper-wrapper' }).append(
                    $.map((dataBook.data_advice || []), function (á, à) {
                        return $('<div>', { class: 'ohi bra5 bóng b1sd pr fdc h1 swiper-slide ' }).append(
                            // Bìa sách
                            $('<div>', { class: 'tac pr b1sd bt0 blr0' }).append(
                                $('<img>', { class: 'pr z1 book cpi mlra w200 ', style: 'width:160px;', src: á.anhSach }),
                                $('<div>', { class: 'pa z9 z1 wh1 df aic jcsc bgc05 dn t0 hoVer' }).append(
                                    $('<a>', { class: 'dib', target: '_self' }).append(
                                        $.icon('import_contacts::bgcf cl1 pa15 bra50 fs2 cpi')
                                        //bốCục_môTả("advice",)
                                    )
                                )
                            ).hover(function () {
                                $(this).find('.hoVer').sửaLớp('db,-dn')
                            }, function () {
                                $(this).find('.hoVer').sửaLớp('dn,-db')
                            }),
                            // Mô tả
                            $('<div>', { class: 'pr w1 bgcf' }).append(
                                $('<div>', { class: 'ptb10 plr15 pr z1' }).append(
                                    $('<c>', { class: 'dib c9 fs07 cpi cl1h tduh ttu tac w1 wbox', rows: '1', tip: á.tacGia, text: á.tacGia }),
                                ),
                            ),
                        )
                    })
                )
            ),
        ) :
        cấp_2 ?
            $('<div>', { class: 'mtb15 pr' }).append(
                $('<div>', { class: 'bgcf plr15 pt10' }).append(
                    $('<div>').append(
                        // Tiêu đề
                        $('<div>', { class: 'b1sd bc6 blr0 bt0 ptb7 lh12 pr mb15 tieuDes' }).append(
                            $('<div>', { class: 'dib fs15 cpi z1 pr cpi o05', text: 'Trang chủ / ' }).click(function () {
                                loadXuLy();
                                chờ(function () {
                                    $('.dsBook').sửaLớp('-dn');
                                    $('.chuyênMục').sửaLớp('dn');
                                    $(".loadTr").sửaLớp('dn');
                                }, 1200)
                            }),
                            $('<a>', { class: 'dib fs15 cpi z1 pr cpi cl1 ml7', target: '_self', html: 'Sách khuyên đọc' }),
                        ),
                        // Nội dung
                        $('<div>', { id: 'recoRead', class: 'df fww' }).append(
                            $.map((dataBook.data_advice || []), function (á, à) {
                                return $('<div>', { class: 'ohi bra5 bóng b1sd pr h1 mlr15 mb15 wmnc' }).append(
                                    $('<div>', { class: 'tac pr' }).append(
                                        $('<img>', { class: 'pr z1  book cpi mlra b1sd bc1 bt0 blr0 w200 ', style: 'width:160px;', src: á.anhSach }),
                                        $('<div>', { class: 'pa t0 z9 wh1 df aic jcsc bgc05 dn' }).append(
                                            $('<a>', { class: 'dib', target: '_self' }).append(
                                                $.icon('import_contacts::bgcf cl1 pa15 bra50 fs2 cpi')
                                            )
                                        ),
                                    ).hover(function () {
                                        $(this).find('div').sửaLớp('db,-dn')
                                    }, function () {
                                        $(this).find('div').sửaLớp('dn,-db')
                                    }),
                                    // Mô tả
                                    $('<div>', { class: 'pr' }).append(
                                        $('<div>', { class: 'ptb10 plr15 pr z1' }).append(
                                            $('<c>', { class: 'dib c9 fs07 cpi cl1h tduh ttu tac w1 wbox', rows: '1', text: á.tacGia }),
                                        ),
                                    ),
                                )
                            })
                        ),
                    )
                ),
            )
            : cấp_3 ? ""
                : ""
};

// Trang tin tức- sự kiện
const tinTức = function (conTrỏ) {
    return $('<div>', { class: 'pa15 bgcf bóng' }).append(
        $.map((dataKhac.data_tinTuc || []), function (á) {
            var texTT = conTrỏ == " Sách 'Cũ': Sắp xếp lại ký ức";
            cl("LOG", texTT, á.ten)
            return texTT && $('<div>', { class: '' }).append(
                $('<div>', { class: 'fs15 mb15 fwb tac', text: á.ten }),
                $('<div>', { class: '', html: á.noiDung }),
            )
        })
    )
};

// Tính năng tìm kiếm
const tìmKiếm = function () {

};

// Trang cá nhân
const cáNhân = function (i, index) {
    var dauCh = Array.apply(0, Array(50)).map((function (v) { return "●" })).join("");
    return khung(
        $("<div>", { class: "bgce" }).append(
            // header
            $('<div>', { class: 'df pr' }).append(
                $('<div>', { class: "w75" }).append(
                    $('<img>', { class: "wh1", src: 'img/bia-trangDN.png' })
                ),
                $('<div>', { class: "w25", style: "height:244px;" }).append(
                    $('<div>', { class: "save-circle save-circle-1" }),
                    $('<div>', { class: "save-circle save-circle-2" }),
                    $('<div>', { class: "save-circle save-circle-3" }),
                    $('<div>', { class: "pa tac", style: "left: 80.5%;top: 39%;" }).append(
                        $('<div>', { class: 'fs11', text: "Bạn đã tiết kiệm được" }),
                        $.icon("savings::dib,co,mtb10,fs25"),
                        $('<div>', { class: "co fs15", text: "120,000 đ" })
                    )
                ),
            ),
            // main
            $('<div>', { class: 'w1 plr25 mt25 df jcsa fww' }).append(
                // cá nhân
                $('<div>', { class: "w75 pa10 bóng bgcf" }).append(
                    $("<div>", { class: "ttu b1sd bt0 blr0 ptb7 fs13 bra3 c3 fwb", text: "Thông tin cá nhân" }),
                    $('<div>', { class: "col-xs-12 pa7" }).append(
                        $('<div>', { class: "col-md-6" }).append(
                            $('<div>', { class: "bgpc bgrn bgsc w1 pb32", style: "background-image:url('img/anh_dep.jpg')" })
                        ),
                        $('<div>', { class: "col-md-6 plr15 h1 lh2" }).append(
                            [
                                { ê: "Username:", ô: "Uông Hoàng Anh", icon: "account_circle" },
                                { ê: "Email:", ô: "uonghoanganh45@gmail.com", icon: "mail" },
                                { ê: "Ngày sinh:", ô: "18/04/2000", icon: "calendar_month" },
                                { ê: "Giới tính:", ô: "Nam", icon: "favorite" },
                                { ê: "Hình thức thanh toán:", ô: "Chưa xác định", icon: "account_balance_wallet" },
                                { ê: "Lịch sử giao dịch", ô: "", icon: "history" },
                                { ê: "Gói cước:", ô: "Chưa đăng ký tài khoản VIP", icon: "analytics" },
                            ].map(function (i) {
                                return $('<div>').append(
                                    $('<div>', { class: "fs12 dib mr5", html: i.ê }).icon(i.icon + "::dib mb3 fwb co"),
                                    $('<div>', { class: "fs12 dib c6", html: i.ô })
                                )
                            }),
                            // Đăng ký gói cước
                            $('<div>', { class: "b1sd bra5 w25 mla plr15 bgcf bw2 shineh tac mt15 bc1 ttu cl1 cpi", tip: "Đăng ký gói cược", text: "Đăng ký" })
                        )
                    )
                ),
                // hồ sơ
                $('<div>', { class: "w20 pa10 bóng bgcf" }).append(
                    $("<div>", { class: "ttu b1sd bt0 blr0 pa7 fs13 bra3 c3 fwb tac", text: "Hồ sơ về bạn" }),
                    $('<div>', { class: "col-md-12 plr7 " }).append(
                        // $('<div>', { class: "ttu tac", text: "Hôm nay của bạn" }),
                        $('<div>', { class: "pr" }).append(
                            $('<div>', { class: "wh100 mlra mtb15 pr" }).append(
                                $.icon("schedule:: pa tac fs12 dib co fs7").css({
                                    "top": "-2%",
                                    "left": "-3%",
                                })
                            ),
                            $('<div>', { class: "pa tac", style: "top: 96%;left: -3%;", html: "Đọc: <b>0</b> phút" }),
                            $('<div>', { class: "pa tac w50", style: "top: 97%;left:58%;", html: "Nghe: <b>0</b> phút" }),
                        )
                    ),
                    $('<div>', { class: "col-md-12 mt15 lh15" }).append(
                        [
                            { ê: "Thời gian đồng hành: ", ô: "", icon: "schedule" },
                            { ê: "Số sách bạn đã đọc: ", ô: "", icon: "book" },
                            { ê: "Chi phí bỏ ra: ", ô: "0 <sup>đ</sup>", icon: "payments" },
                        ].map(function (i) {
                            return $('<div>').append(
                                $('<div>', { class: "fs12 dib mr5", html: i.ê }).icon(i.icon + "::dib mb3 fwb co"),
                                $('<div>', { class: "fs12 dib c6", html: i.ô })
                            )
                        }),
                    )
                ),
                // Thành tích đọc sách
                $('<div>', { class: "w45 pa10 bóng bgcf mtb25 pr" }).append(
                    $("<div>", { class: "ttu b1sd bt0 blr0 pa7 fs13 fwb bra3 c3", html: iDate(now().u, "THÀNH TÍCH ĐỌC SÁCH THÁNG {n}/{f}") }),
                    $('<div>', { class: 'h200 pb25 df aife jcsc c9 oh pr', style: "letter-spacing:0.5em", text: dauCh }).append(
                        $('<div>', { class: "pb41 w2 b1sd btb0 bl0 bw2 bc6 pa" }).css({ "top": "15%" })
                    ),
                    $('<div>', { class: "df pa b0 w1 c3 tac" }).css({
                        "bottom": "4%",
                    }).append(
                        ["1", "8", "Hôm nay", "22", "29"].map(function (i) {
                            return $('<div>', { class: "wh1", text: i })
                        })
                    )
                ),
                // Bảng đồ tháng hiện tại 
                $('<div>', { class: "w50 pa10 bóng bgcf mtb25" }).append(
                    $("<div>", { class: "ttu b1sd bt0 blr0 pa7 fs13 fwb bra3 c3", html: iDate(now().u, "BẢN ĐỒ THÁNG {n}/{f}") }),
                    $('<div>', { class: 'pt15' }).append(
                        $('<img>', { class: "wh1", src: "img/ban_do_doc_sach.jpg" })
                    )
                    // $('<div>',{class:"bgpc bgrn bgsc w1 pb51" , style:"background-image:url('img/ban_do_doc_sach.jpg')"})
                ),
                // Đọc gần đây 
                bốCục_advice("1"),
            ),
            // Những câu nói của các nhà nổi tiếng 
            trichDan()
        )
        , "trangCáNhân", {
        tiêuĐề: "Trang cá nhân của " + $(".account").iVal(),
        ngoài: "",
        trong: "col-xs-12,col-md-10",
        koTắt: true,
        onRender: function () {
            //Khi đang render khung
        },
        onShow: function () {
            //Lúc khung đã hiển thị
            xlSlider();
        },
        onHiding: function () {
            //Lúc khung đang tắt
        },
        onHide: function () {
            //Lúc đã tắt khung
        },
    })
};

// Cập nhật sách lên trang 
const cậpNhật = function (Id, tenSach, anhSach, theLoai, tacGia, nxb, ngayCapNhat, moTa, noiDung, viTri, hinhThuc, thaoTác) {
    var đangThêm = thaoTác == "thêm",
        đangSửa = thaoTác == "sửa";
    return khung(
        $("<form>", {
            // action: "xuly.php",
            // id: "formĐK",
            method: 'POST',
            class: "ptb15 plr25"
        }).append(
            $('<div>', { class: 'cl1 w1 ttu pb15 tac fwb fs12 tiêuĐề pt15', icon: "assignment::dib mb2", text: "Cập nhật thông tin tài liệu" }),
            $('<div>', { class: "w1 mt5 ghiChú", icon: "warning::co dib", text: "" }).append(
                $("<c>", { class: "tdu fsi fwb mr3", text: "Lưu ý:" }),
                $("<c>", { class: "", text: "Các thông tin có dấu sao " }),
                $('<c>', { class: "", html: " <b class='cr1'>*</b> là bắt buộc." })
            ),
            $('<div>', { class: 'thôngTinNhập lh14' }).append(
                // Thông tin cập nhật sách
                [
                    { ê: 'ID', type: 'text', l: "Tính tự động", name: "idSach" },
                    { ê: 'Tên sách', type: 'text', name: "tenSach" },
                    { ê: 'Thẻ loại', type: 'text', name: "theLoai", value: "" },
                    {
                        ê: 'Vị trí', type: 'select',
                        name: "viTri",
                        l: "Chọn ví trị sách",
                        menu: [
                            { ten: "Mới trong tuần" },
                            { ten: "Xếp hạng trong tháng" },
                            { ten: "Sách mới nhất" },
                            { ten: "Sách Kỹ năng" },
                            { ten: "Sách đọc nhiều" },
                            { ten: "Sách khuyên đọc" },
                            { ten: "Sách thể loại" },
                        ]
                    },
                    {
                        ê: 'Hình thức', type: 'select',
                        name: "hinhThuc",
                        l: "Hình thức đọc",
                        menu: [
                            { ten: "Đọc Sách" },
                            { ten: "Nghe Sách" },
                        ]
                    },
                    { ê: 'Ảnh sách', type: 'file', name: "anhSach" },
                    { ê: 'Tác giả', type: 'text', name: "tacGia" },
                    { ê: 'Nhà xuất bản', type: 'text', name: "nxb" },
                    { ê: 'Ngày cập nhật', type: "date", name: "ngayCapNhat" },
                    { ê: 'Mô tả', type: 'editor', name: "moTa" },
                    { ê: 'Nội dung', type: 'editor', name: "noiDung" }
                ].map(function (i, index) {
                    return $('<div>', { class: 'w1 pa10 cb dòngThôngTin ' + (index == 0 ? " vôHiệu" : "o1") }).append(
                        $('<div>', { class: "o1b o1a crb ptb7 ê ml0b col-xs-3", z: ":", y: "*", text: i.ê }),
                        $('<div>', { class: "pl15 nhậpTT col-xs-9" })
                    ).each(function () {
                        var W = $(this).find('.nhậpTT')
                        switch (i.type) {
                            case "text":
                                W.append( // contenteditable: true, 
                                    $('<input>', { class: 'b1sd bra25 plr10 ptb7 col-xs-12 wspw lấyĐc nhậpTay fsib wbbw', type: i.type, name: i.name, value: i.value, placeholder: i.l })
                                )
                                break;
                            case "file":
                                W.append(
                                    $('<input>', { class: 'b1sd bra25 plr10 ptb7 col-xs-12 wspw lấyĐc nhậpTay fsib wbbw', type: i.type, name: i.name, value: "", placeholder: i.l })
                                )
                                break;
                            case "select":
                                W.append(
                                    $("<select>", { class: "b1sd bra25 plr10 ptb7 col-xs-12 wspw lấyĐc nhậpTay fsib wbbw", name: i.name }).append(
                                        $.map((i.menu || []), function (é) {
                                            return $('<option>', { class: "", value: é.ten, text: é.ten })
                                        })
                                    )
                                )
                                break;
                            case "date":
                                W.append(
                                    $('<input>', { class: 'b1sd bra25 plr10 ptb7 col-xs-12 wspw lấyĐc nhậpTay fsib wbbw', name: i.name, value: iDate(now().u, "{f}-{n}-{j}") })
                                )
                                break;
                            case "editor":
                                W.append(
                                    $('<div>', { class: "  bra3 cpi bgcf c6 fs11 b1sd w1" }).soạnThảo({
                                        html: false, // Cho phép soạn thảo thẻ HTML
                                        nhãn: "", // Placeholder
                                        cỡ: 18, // Cỡ chữ
                                        // name: i.name,
                                        nhãn: "Nhập nội dung ghi chú tại đây", // Placeholder
                                        khảDụng: ["cl", "bcl", "fs", "taj", "tar"], // Mảng chứa các công cụ soạn thảo được sử dụng. Nếu không khởi tạo option này sẽ có đầy đủ công cụ. Xem tên các công cụ bằng cách inspect vào các thẻ nút công cụ
                                    }).each(function () {
                                        $(this).find('.soạnThảo').empty().append(
                                            $('<textarea >', { class: 'bn on w1', type: i.type, name: i.name, rows: "6", placeholder: i.l })
                                        ).sửaLớp("-pb50,-hmn1 ")
                                    })
                                )
                                break;
                        }
                    })
                }),
                // Cập nhật

                đangSửa ? $('<div>', { class: "df jcsc" }).append(
                    $('<button>', {
                        class: 'bg1 cf ptb10 tac fs11 bra25 ttu shineh mb10 mt25 cpi db bn w1 mr15',
                        type: 'submit',
                        name: "chinhSua",
                        style: "width: 20%;",
                        text: 'Chỉnh sửa'
                    }),
                    $('<button>', {
                        class: 'bg1 cf ptb10 tac fs11 bra25 ttu shineh mb10 mt25 cpi db bn w1',
                        type: 'submit',
                        name: "xoaBo",
                        style: "width: 20%;",
                        text: 'Xóa bỏ'
                    })
                ) : $('<button>', {
                    class: 'bg1 cf mlra ptb10 tac fs11 bra25 ttu shineh mb10 mt25 cpi db bn w1',
                    type: 'submit',
                    name: "capNhat",
                    style: "width: 20%;",
                    text: 'Cập nhật'
                })

                // Sửa hoặc xóa tài liệu

            )
        ), "capNhatS", {
        tiêuĐề: "",
        ngoài: "",
        trong: "col-xs-12,col-md-5",
        koTắt: true,
        onShow: function () {

            //Lúc khung đã hiển thị
            //tenSach, anhSach, theLoai, tacGia, nxb, ngayCapNhat, moTa, noiDung, viTri, hinhThuc
            var objSach = { idSach: Id, tenSach: tenSach, anhSach: anhSach, theLoai: theLoai, tacGia: tacGia, nxb: nxb, ngayCapNhat: ngayCapNhat, moTa: moTa, noiDung: noiDung, viTri: viTri, hinhThuc: hinhThuc };
            // nameS = $(this).find(".dòngThôngTin").find("[name]").attr("name");
            cl("GLGOGOG", objSach);
            đangSửa ? $(this).find(".dòngThôngTin").each(function () {
                var nameS = $(this).find("[name]").attr("name");

                if (nameS == "moTa" || nameS == "noiDung") {
                    $(this).find("[name]").text(objSach[nameS]);
                    // cl(nameS)
                } else if (nameS == "anhSach") {
                    $(this).find("[name]").attr("value", objSach[nameS]);
                    $(this).find("[name]").attr("type", "text");
                    $(this).find("[name]").click(function () {
                        $(this).attr("type", "file")
                    })
                } else {
                    $(this).find("[name]").attr("value", objSach[nameS]);
                }
            }) : ""
        },
    })
};

// Tủ sách cá nhân
const tủSách = function () {
    return khung(
        $("<div>", { class: "" }).append(
            //Code giao diện bên trong tại đây
            bốCục_advice("2").each(function () {
                $(this).find(".tieuDes").empty().append(
                    $('<div>', { class: "dib fs15 cpi z1 pr cpi o05", text: "Tủ sách cá nhân" })
                )
            }),
            trichDan(),

        )
        , "tuSach", {
        tiêuĐề: "Tủ sách cá nhân",
        ngoài: "",
        trong: "col-xs-12,col-md-8",
        koTắt: true,
        onRender: function () {
            //Khi đang render khung
        },
        onShow: function () {
            //Lúc khung đã hiển thị
        },
        onHiding: function () {
            //Lúc khung đang tắt
        },
        onHide: function () {
            //Lúc đã tắt khung
        },
    })
};

// Trang thông báo
const thôngBáo = function (i, index) {
    return khung(
        $("<div>", { class: "" }).append(
            //Code giao diện bên trong tại đây
            $('<div>', { class: 'pa15' }).append(
                $('<div>', { class: 'b1sd ptb7 w1 tac bt0 blr0 dib fs15 cpi z1 pr pl15 cl1h', text: "Danh sách thông báo" }),
                $('<div>', { class: "nộiDung h300" }).append(
                    $("<div>", { class: "oh ml-15 mr-15 pt10 flex pr" }).append(
                        $("<div>", { class: "pa15 tac wh1 fs14 c8", icon: "search_off", text: "Hiện chưa có thông tin gì về thông báo." })
                    )
                )
            ),
            // bốCục_advice("1"),
            trichDan(),
        )
        , "thongBao", {
        tiêuĐề: "Thông báo",
        ngoài: "",
        trong: "col-xs-12,col-md-8",
        koTắt: true,
        onRender: function () {
            //Khi đang render khung
        },
        onShow: function () {
            //Lúc khung đã hiển thị
        },
        onHiding: function () {
            //Lúc khung đang tắt
        },
        onHide: function () {
            //Lúc đã tắt khung
        },
    })
};

// Trang đơn hàng 
const đơnHàng = function (i, index) {
    return $('<div>').append(
        $('<div>', { text: 'ssss' })
    )
};

const downloadFile = function (data, name) {
    const blob = new Blob([data], { type: "msword" }); // loại sử dụng
    const href = URL.createObjectURL(blob); // tạo một chuỗi chứa một URL biểu thị đối tượng được đưa ra trong tham số
    const a = Object.assign(document.createElement("a"), { // tạo phần tử html
        style: "display:none",
        href,
        download: name,
    });
    document.body.appendChild(a);

    a.click();
    URL.revokeObjectURL(href);
    a.remove();
};

const thốngKê = function () {
    return khung(
        $("<div>", { class: "df jcsc" }).append(
            //Code giao diện bên trong tại đây
            // THÔNG KẾ ĐỐI TƯỢNG THAM GIA
            $('<div>', { class: "donut-chart-block block ma25", style: "height:436px;" }).append(
                $('<div>', { class: "titular cf fs12", html: "THỐNG KẾ MỤC ĐÍCH THAM GIA" }),
                $('<div>', { class: 'donut-chart' }).append(
                    [
                        { id: "porcion1", tên: "ios", data: "21" },
                        { id: "porcion2", tên: "mac", data: "39" },
                        { id: "porcion3", tên: "win", data: "31" },
                        { id: "porcionFin", tên: "linux", data: "9" }
                    ].map(function (i, index) {
                        return $('<div>', { id: i.id, class: "recorte" }).append(
                            $('<div>', { class: "quesito " + i.tên, "data-rel": i.data })
                        )
                    }),
                    $('<div>', { class: "center-date cf", html: 'JUNE<br><span class="scnd-font-color">2022</span>' })
                ),
                $('<ul>', { class: "os-percentages horizontal-list" }).append(
                    [
                        { ô: "Nâng cao <br> kiến thức", tên: "ios", data: "21" },
                        { ô: "Cải thiện <br> viết lách", tên: "mac", data: "39" },
                        { ô: "Thói quen <br> lành mạnh", tên: "win", data: "9" },
                        { ô: "Giải tỏa <br> căng thẳng", tên: "linux", data: "31" }
                    ].map(function (i, index) {
                        return $('<li>').append(
                            $('<div>', { class: "os scnd-font-color " + i.tên, html: i.ô }),
                            $('<div>', { class: "os-percentage cf", html: i.data + "<sup>%</sup>" })
                        )
                    }),
                )
            ),
            // Thống kê số lượt truy cập
            $('<div>', { class: "line-chart-block block ma25", style: "height:436px;" }).append(
                $('<div>', { class: "line-chart" }).append(
                    $('<div>', { class: "grafico" }).append(
                        $('<ul>', { class: "eje-y" }).append(
                            ["30", "20", "10", "0"].map(function (i) {
                                return $('<li>', { "data-ejeY": i, class: "lsn" })
                            })
                        ),
                        $('<ul>', { class: "eje-x" }).append(
                            ["Apr", "May", "Jun"].map(function (i) {
                                return $('<li>', { class: "lsn", text: i })
                            })
                        ),
                        $('<span>', { "data-valor": "25" }).append(
                            $('<span>', { "data-valor": "8" }).append(
                                $('<span>', { "data-valor": "13" }).append(
                                    $('<span>', { "data-valor": "5" }).append(
                                        $('<span>', { "data-valor": "23" }).append(
                                            $('<span>', { "data-valor": "12" }).append(
                                                $('<span>', { "data-valor": "15" })
                                            )
                                        )
                                    )
                                )
                            )
                        )

                    )
                ),
                $('<ul>', { class: "time-lenght horizontal-list df jcsc cpi cf" }).append(
                    ["Week", "Month", "Year"].map(function (i) {
                        return $('<li>').append(
                            $("<a>", { class: "time-lenght-btn", text: i })
                        )
                    })
                ),
                $("<ul>", { class: "month-data clear" }).append(
                    [
                        { ten: "APR", soLieu: "21" },
                        { ten: "MAY", soLieu: "48" },
                        { ten: "JUN", soLieu: "35" }
                    ].map(function (i) {
                        return $('<li>', { class: 'lsn' }).append(
                            $('<div>', { class: 'dib w85 cf fs11 ', html: i.ten }).append(
                                $("<span>", { class: "scnd-font-color dib ml5", text: "2022" })
                            ),
                            $('<div>', { class: 'dib' }).append(
                                $("<span>", { class: "entypo-plus increment cf", html: i.soLieu + "<sup>%</sup>" })
                            )
                        )
                    })
                )
            ),
            // Thống kê số liệu đọc sách theo chủ đề
            $('<div>', { class: "bar-chart-block block ma25", style: "height:436px;" }).append(
                $('<div>', { class: "titular fs12 cf", text: "THỐNG KÊ SỐ LIỆU ĐỌC SÁCH" }),
                $('<div>', { class: "grafico bar-chart" }).append(
                    $('<ul>', { class: "eje-y" }).append(
                        ["60", "45", "30", "15", "0"].map(function (i) {
                            return $('<li>', { "data-ejeY": i, class: "lsn" })
                        }),
                    ),
                    $('<ul>', { class: "eje-x" }).append(
                        [
                            { ten: "Tình cảm", soLieu: "37" },
                            { ten: "Bí ẩn", soLieu: "56" },
                            { ten: "Kỹ năng", soLieu: "25" },
                            { ten: "Kinh dị", soLieu: "18" },
                            { ten: "Sức khỏe", soLieu: "45" },
                            { ten: "Thiếu nhi", soLieu: "50" },
                            { ten: "Giả tưởng", soLieu: "33" },
                        ].map(function (i) {
                            return $('<li>', { class: "lsn", "data-ejeX": i.soLieu, html: "<i>" + i.ten + "</i>" })
                        })
                    ),
                )
            )
        )
        , "thôngKê", {
        tiêuĐề: "Thống kê số liệu",
        ngoài: "",
        trong: "col-xs-12,col-md-10",
        koTắt: true,
        onRender: function () {
            //Khi đang render khung
        },
        onShow: function () {
            //Lúc khung đã hiển thị
        },
        onHiding: function () {
            //Lúc khung đang tắt
        },
        onHide: function () {
            //Lúc đã tắt khung
        },
    })
}

// Mục điều hướng nhỏ
const nav = function () {
    return $('<div>').append(
        $('<div>', { class: 'pfi t50 r0 cpi' }).append(
            [{ icon: 'feed', tip: 'Tin tức' }, { icon: 'notifications', tip: 'Thông báo' }, { icon: 'grade', tip: 'BXH tháng' }, { icon: 'arrow_upward', tip: 'Trở về đầu trang' }].map(function (i, index) {
                return $('<c>', { tip: i.tip }).icon(i.icon + "::db wh30 lh15 tac mb15 bg1 cf bw2 shineh fs15 bra50 b1sd -wh1e -bra3 ").each(function () {
                    switch (i.icon) {
                        case "feed": // Tin tức
                            $(this).click(function () {
                                loadXuLy();
                                chờ(function () {
                                    $(".loadTr").sửaLớp('dn');
                                    khung(
                                        $("<div>", { class: "pa10" }).append(
                                            //Code giao diện bên trong tại đây
                                            $('<div>', { class: 'row' }).append(
                                                $('<div>', { class: 'col-md-12' }).append(
                                                    (dataKhac.data_tinTuc || []).map(function (á, à) {
                                                        return á.loai == "noiBat" ? $('<div>', { class: 'col-md-6 pa7 b1sd blr0 bt0 mb7 ' }).append(
                                                            $('<img>', { class: 'w1', src: á.anh }),
                                                            $('<div>', { class: 'ptb7' }).append(
                                                                $('<div>', { class: 'wbox fs12 fwb cl1h tduh cpi', rows: '1', text: á.ten }).click(function () {
                                                                    var tenTT = $(this).iVal();
                                                                    $(".nộiDung").sửaLớp('dn');
                                                                    loadXuLy();
                                                                    chờ(function () {
                                                                        cl("LOGOG", tenTT);
                                                                        $(".loadTr").sửaLớp('dn');
                                                                        $(".đọcSách").empty().append(
                                                                            tinTức(tenTT)
                                                                        );
                                                                    }, 1200)
                                                                    // 
                                                                    $('#tinTức').trigger("đóng");
                                                                }),
                                                                $('<div>', { class: 'c6 fs09 mtb3', text: "Ngày cập nhật: đang cập nhật..." }),
                                                                $('<div>', { class: 'wbox c6 fs09', tip: á.moTa, rows: '4', text: á.moTa })
                                                            )
                                                        ) : á.loai == "binhThuong" ? $('<div>', { class: 'pa7 col-md-12 b1sd blr0 ' + (à !== 0 && " bt0") }).append( // tin tức phụ
                                                            $('<div>', { class: 'col-md-4' }).append(
                                                                $('<img>', { class: 'w1', src: á.anh })
                                                            ),
                                                            $('<div>', { class: 'col-md-8' }).append(
                                                                $('<div>', { class: 'pl15' }).append(
                                                                    $('<div>', { class: 'wbox fs12 fwb cl1h tduh cpi', rows: '1', text: á.ten }),
                                                                    $('<div>', { class: 'c6 fs09 mtb3', text: "Ngày cập nhật: 18/04/2000" }),
                                                                    $('<div>', { class: 'wbox c6 fs09', tip: á.moTa, rows: '5', text: á.moTa })
                                                                )
                                                            )
                                                        ) : ""
                                                    }),
                                                ),
                                            )
                                        )
                                        , "tinTức", {
                                        tiêuĐề: "TIN TỨC NGÀY: " + iDate(now().u, "{j}/{n}/{f}"),
                                        ngoài: "",
                                        trong: "col-xs-12,col-md-6",
                                        koTắt: true,
                                        onRender: function () {
                                            //Khi đang render khung
                                        },
                                        onShow: function () {
                                            //Lúc khung đã hiển thị
                                        },
                                        onHiding: function () {
                                            //Lúc khung đang tắt
                                        },
                                        onHide: function () {
                                            //Lúc đã tắt khung
                                        },
                                    })
                                }, 1500)

                            })
                            break;
                        case "notifications":
                            $(this).click(function () {
                                if ($('.account').iVal() !== "Đăng nhập") {
                                    loadXuLy();
                                    chờ(function () {
                                        $(".loadTr").sửaLớp('dn');
                                        thôngBáo();
                                    }, 1200)
                                } else {
                                    // cl("LOG_________",$(".nộiDung"))
                                    alert("Vui lòng đăng nhập để sử dụng tính năng này !")
                                }
                            })
                            break;
                        case "grade":
                            $(this).click(function () {
                                alert("Tính năng hiện tại chưa sử dụng được!")
                            })
                            break;
                        case "arrow_upward":
                            $(this).click(function () {
                                $("html, body").animate({ scrollTop: 0 }, 800);
                            })
                            break;
                    }
                })
            })
        ),
        // Hỗ trợ người dùng
        $('<div>', { class: 'pa b0 b1sd bb0 df aic jcsc cpi brtl15 brtr15 bg1 pa10 shineh', style: 'right:2%;' }).append(
            $('<div>', { class: 'df aic' }).append(
                $.icon('help::tac fs15 cf brtl15 mr7'),
                $('<span>', { class: 'cf fwb dib lh1 pt2', text: 'Hỗ trợ' }),
            ),
        ).click(function () {
            $(this).chọn([
                {
                    ê: "Hỗ trợ về kỹ thuật",
                    i: "build::vam,cl1",
                    f: function () {
                        cl("Bạn vừa click tiêu đề 1")
                    }
                },
            ], {
                // class:"+br0i,pa0i,wmx5", // thêm class cho iMsg
                position: { // Cấu hình vị trí hiển thị iMsg so với thẻ click
                    at: "left top",
                }
            });
        })
    )
};

// Menu thẻ loại 
const menu = function (á, à) {
    return $('<div>', { class: 'w15 h1 pa l0 bgc3 cf thểLoại' }).append(
        $('<div>', { class: 'pf wit boĐiềuHướng' }).append(
            [
                { id: "nha", icon: 'home', theLoai: "Nhà" },
                { id: "tinhCam", icon: 'book', theLoai: "Sách Tình cảm" },
                { id: "biAn", icon: 'book', theLoai: "Sách Bí ẩn" },
                { id: "kyNang", icon: 'book', theLoai: "Sách Kỹ năng" },
                { id: "kinhDi", icon: 'book', theLoai: "Sách Kinh dị, giật gân" },
                { id: "tuTruyen", icon: 'book', theLoai: "Sách Tiểu sử, tự truyện" },
                { id: "trNgan", icon: 'book', theLoai: "Sách Truyện ngắn" },
                { id: "sucKhoe", icon: 'book', theLoai: "Sách Chăm sóc sức khỏe" },
                { id: "thieuNhi", icon: 'book', theLoai: "Sách Thiếu nhi" },
                { id: "giaTuong", icon: 'book', theLoai: "Sách Giả tưởng" },
                { id: "tacGia", icon: 'person', theLoai: "Tác giả" },
                { id: "cuaHang", icon: 'shopping_bag', theLoai: "Cửa hàng" },
            ].map(function (i, index) {
                return $('<div>', { id: i.id, class: 'pa15 b1sd bt0 blr0 cpi df pr bc6 aic điềuHướng bg2h ' }).append(
                    $.icon(i.icon + '::fs11 mr7 mt-5'),
                    $('<div>', { class: 'fs09 w90 lh2 ', text: i.theLoai }),
                ).each(function () {
                    // Xem sách
                    var ths = $(this)
                    $(this).click(function () {
                        loadXuLy();
                        i.icon == "home" ? ths.sửaLớp("-bg2") : "";
                        $('.điềuHướng.active').sửaLớp('-bg2');
                        $(this).sửaLớp('bg2,active');
                        chờ(function () {
                            $(".loadTr").sửaLớp('dn');
                            switch (i.theLoai) {
                                case "Nhà":
                                    cl("ok");
                                    $('.nộiDung').sửaLớp('-dn');
                                    $('.đọcSách').sửaLớp('dn');
                                    cuộn(0);
                                    break;
                                    // thôngBáo.lưuÝ("Tính năng hiện chưa có !"
                                    alert("Tính năng hiện chưa có !")
                                    break;
                            }
                        }, 1200)




                    })
                })
            })
        )

    )
};

// Giao diên phần cuối
const footer = function (á, à) {
    return $('<footer>', { class: 'bgc3 pt15 pr z-9' }).append(
        // Địa chỉ Email
        $('<div>', { class: 'tac cf mt15 mb25' }).append(
            $('<span>', { class: 'ttu', text: 'Địa chỉ email: ' }),
            $('<input>', { class: ' mlr15 pa10 w30 br5 on h40', placeholder: 'địa chỉ email của bạn' }),
            $('<button>', { class: 'ttu lh3 plr15 shineh cpi bgco cf bn h40', type: 'button ', text: 'Đăng ký' })
        ),
        // Thông tin giải đáp thắc mắc
        $('<div>', { class: 'b1sd bc6 blr0' }).append(
            $('<div>', { class: 'container' }).append(
                [
                    { tieuDe: 'Hướng dẫn mua sắm', danhSach: ["Blog", "Câu hỏi thường gặp", "Thanh toán", "Lô hàng", "Đơn hàng của tôi ở đâu?", "Chính sách hoàn trả",] },
                    { tieuDe: 'Cố vấn phong cách', danhSach: ["Tài khoản của bạn", "Thông tin", "Địa chỉ", "Miễn giảm", "Lịch sử đơn hàng", "Theo dõi đơn hàng",] },
                    { tieuDe: 'Thông tin', danhSach: ["Sơ đồ trang web", "Cụm từ tìm kiếm", "Tìm kiếm nâng cao", "Về chúng tôi", "Liên hệ chúng tôi", "Các nhà cung cấp",] },
                    { tieuDe: 'Liên hệ chúng tôi', danhSach: ["91 Nguyễn Chí Thanh", "84+ 963868645", "support@gmail.com",] },
                ].map(function (i, index) {
                    return $('<div>', { class: 'col-md-3 pa7 ptb15 b1sd bc6 btb0 ' + (index == 1 ? "  btb0" : index == 2 ? " bl0" : " bn") }).append(
                        $('<div>', { class: 'cf tac', text: i.tieuDe }),
                        $('<ul>', { class: 'lh2 lsn' }).append(
                            (i.danhSach || []).map(function (i) {
                                return $('<li>', { class: 'fs09 c9 cpi tduh' }).append(
                                    $('<li>', { class: 'mr5 ' + (i == "91 Nguyễn Chí Thanh" ? 'fa-solid fa-location-pin mr5' : i == "84+ 963868645" ? 'fa-solid fa-phone' : i == "support@gmail.com" ? 'fa-solid fa-envelope' : 'fa-solid fa-angle-right') }),
                                    $('<span>', { text: i })
                                )
                            })
                        )
                    )
                }),
            )
        ),
        // Kết nối với các mxh khác
        $('<div>', { class: 'b1sd bt0 blr0 bc6' }).append(
            $('<div>', { class: 'container ptb10 plr25 df aic', }).append(
                // MXH
                $('<div>', { class: 'col-md-6' }).append(
                    ["facebook.png", "twitter.png", "google-plus.png", "rss.png", "pinterest.png", "linkedin.png", "youtube.png",].map(function (i) {
                        return $('<div>', { class: 'wh25 bgpc bgrn bgso dib mlr5 cpi shineh', style: 'background-image:url(img/icon/' + i + ')' })
                    })
                ),
                // Phương thức thanh toán
                $('<div>', { class: 'col-md-6 tar' }).append(
                    ["paypal.png", "visa.png", "american-express.png", "mastercard.png"].map(function (i) {
                        return $('<div>', { class: 'wh40 bgpc bgrn bgso dib mlr5 cpi shineh', style: 'background-image:url(img/icon/' + i + ')' })
                    })
                )
            )
        ),
        // Thông tin thêm
        $('<div>').append(
            $('<div>', { class: 'container plr25 ptb7' }).append(
                [{ text: '© 1821051033 Uông Hoàng Anh' }, { html: ["Tích ích mở rộng", "Chủ đề đáp ứng", "Chủ đề cao cấp", "Chủ đề khác"] }].map(function (i, index) {
                    return $('<div>', { class: 'col-md-6' }).append(
                        index == 0 ? $('<div>', { class: 'c6 fs08', text: i.text })
                            : $('<div>', { class: 'tar' }).append(
                                $.map((i.html || []), function (i) {
                                    return $('<div>', { class: 'c6 fs08 dib cpi tduh ' + (i !== "Chủ đề khác" ? " mr15" : ""), text: i })
                                })
                            )
                    )
                })
            )
        )
    )
};



export { header, footer, banner, menu, nav, đăngNhập, đăngKý, bốCục_inWeek, loadXuLy, bốCục_BXH, bốCục_new, bốCục_most, bốCục_speak, bốCục_advice, bốCục_Menu, bốCục_môTả };
// export default footer;


