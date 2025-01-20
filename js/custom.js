$(function () {

    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

    })

    $('.mopen').on('click', function () {
        $('.header .gnb').toggleClass('on')
    })
});