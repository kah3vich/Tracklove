//! Слайдер блога 

var adviceBlogSlider = new Swiper(".adviceBlogSlider", {
    loop: true,
    navigation: {
        nextEl: ".advice__blog-slider .swiper-controls .swiper-button-next",
        prevEl: ".advice__blog-slider .swiper-controls .swiper-button-prev",
    },
});

//! ---------------------------------------------------------------------------
