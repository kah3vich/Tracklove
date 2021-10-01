//! Меню 

let t1 = new TimelineMax({ paused: true });

t1.to(".menu", 0.4, {
  right: "0%",
});
// t1.staggerFrom(".link", 0.4, { opacity: 0 }, 0.1, "-=0.2");
t1.reverse();
$(".menu-open").on("click", function () {
  t1.reversed(!t1.reversed());
});
$(".menu-close, .menu__block-title-close p").on("click", function () {
  t1.reversed(!t1.reversed());
});


//! --------------------------------------------------------------------------------------------


//! Слайдер в меню 


var menuSlider = new Swiper(".menuSlider", {
    slidesPerView: 2, 
    spaceBetween: 20,
    navigation: {
        nextEl: ".menu__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".menu__block-slider .swiper-controls .swiper-button-prev",
    },
});


//! --------------------------------------------------------------------------------------------

