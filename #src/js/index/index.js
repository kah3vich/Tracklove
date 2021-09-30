//! Слайдер отзывов 

var indexSlider = new Swiper(".indexSlider", {
    navigation: {
        nextEl: ".i-about__reviews-slider .swiper-controls .swiper-button-next",
        prevEl: ".i-about__reviews-slider .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".i-about__reviews-slider .swiper-controls .swiper-pagination",
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    keyboard: true,
});

//! --------------------------------------------------------------------------------------