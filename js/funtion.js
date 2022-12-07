// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//         el: ".swiper-pagination",
//         dynamicBullets: true,
//     },
//     // autoplay: {
//     //     delay: 1500,
//     // },
//     effect: 'fade',
//     fadeEffect: {
//         crossFade: true
//     },
// });

const nav = function () { // Mục điều hướng nhỏ
    return $('<div>').append(
        $('<div>', { class: 'pfi t50 r0 cpi' }).append(
            [{ icon: 'feed', tip: 'Tin tức' }, { icon: 'notifications', tip: 'Thông báo' }, { icon: 'grade', tip: 'BXH tháng' }, { icon: 'arrow_upward', tip: 'Trở về đầu trang' }].map(function (i, index) {
                return $('<c>', { tip: i.tip }).icon(i.icon + "::db wh30 lh15 tac mb15 bg1 cf bw2 shineh fs15 bra50 b1sd -wh1e -bra3 ").each(function () {
                    switch (i.icon) {
                        case "feed":
                            $(this).click(function () {
                                đăngNhập();
                            })
                            break;
                        case "notifications":
                            $(this).click(function () {
                            })
                            break;
                        case "grade":
                            $(this).click(function () {
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
}

export { nav };