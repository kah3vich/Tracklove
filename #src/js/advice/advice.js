//! Слайдер блога 

var adviceBlogSlider = new Swiper(".adviceBlogSlider", {
    loop: true,
    navigation: {
        nextEl: ".advice__blog-slider .swiper-controls .swiper-button-next",
        prevEl: ".advice__blog-slider .swiper-controls .swiper-button-prev",
    },
    breakpoints: {
        750: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        }
    }
});

//! ---------------------------------------------------------------------------
