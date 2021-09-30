//! Слайдер блога 

var profileBlogSlider = new Swiper(".profileBlogSlider", {
    loop: true,
    navigation: {
        nextEl: ".profile__blog-slider .swiper-controls .swiper-button-next",
        prevEl: ".profile__blog-slider .swiper-controls .swiper-button-prev",
    },
});

//! ---------------------------------------------------------------------------


//! Сюжет для блока instagram

$('.profile__banner-block-1').on('click', function() {
    $('.profile__banner').css('margin', '96px 0 263px 0');
    $('.profile__block-banners').removeClass('display-n')
    $('.profile__block-instagram').removeClass('display-n')
    $('.profile__block-instagram-search').removeClass('display-n')
});
$('.profile__block-instagram-close').on('click', function() {
    $('.profile__block-banners').addClass('display-n')
    $('.profile__block-instagram').addClass('display-n')
    $('.profile__block-instagram-search').addClass('display-n')
    $('.profile__block-instagram-list').addClass('display-n')
    $('.profile__block-instagram-account').addClass('display-n')
});

$('.profile__block-instagram-search-btn').on('click', function() {
    $('.profile__block-instagram-search').addClass('display-n')
    $('.profile__block-instagram-list').removeClass('display-n')
});
$('.profile__block-instagram-list-block-item').on('click', function() {
    $('.profile__block-instagram-list').addClass('display-n')
    $('.profile__block-instagram-account').removeClass('display-n')
});
$('.profile__block-instagram-account-btn').on('click', function() {
    $('.profile__block-instagram-list').removeClass('display-n')
    $('.profile__block-instagram-account').addClass('display-n')
});

//! ---------------------------------------------------------------------------


//! Фильтр года 

$('.profile__block-instagram-list-filter-year').on('click', function() {
    $(this).toggleClass('profile__block-instagram-list-filter-year-active')
    $('.profile__block-instagram-list-filter-year-select').toggleClass('display-n')
    $('.profile__block-instagram-list-filter-month-select').addClass('display-n')
    $('.profile__block-instagram-list-filter-month').removeClass('profile__block-instagram-list-filter-month-active')
});
$('#modalYearInstagram-1').on('click', function() {
    let modalYearInstagram_1 = $(this).text();
    $('.profile__block-instagram-list-filter-year p').html(modalYearInstagram_1);
});
$('#modalYearInstagram-2').on('click', function() {
    let modalYearInstagram_2 = $(this).text();
    $('.profile__block-instagram-list-filter-year p').html(modalYearInstagram_2);
});
$('#modalYearInstagram-3').on('click', function() {
    let modalYearInstagram_3 = $(this).text();
    $('.profile__block-instagram-list-filter-year p').html(modalYearInstagram_3);
});
$('#modalYearInstagram-4').on('click', function() {
    let modalYearInstagram_4 = $(this).text();
    $('.profile__block-instagram-list-filter-year p').html(modalYearInstagram_4);
});
$('#modalYearInstagram-5').on('click', function() {
    let modalYearInstagram_5 = $(this).text();
    $('.profile__block-instagram-list-filter-year p').html(modalYearInstagram_5);
});
$('#modalYearInstagram-6').on('click', function() {
    let modalYearInstagram_6 = $(this).text();
    $('.profile__block-instagram-list-filter-year p').html(modalYearInstagram_6);
});
$('#modalYearInstagram-7').on('click', function() {
    let modalYearInstagram_7 = $(this).text();
    $('.profile__block-instagram-list-filter-year p').html(modalYearInstagram_7);
});
$('#modalYearInstagram-8').on('click', function() {
    let modalYearInstagram_8 = $(this).text();
    $('.profile__block-instagram-list-filter-year p').html(modalYearInstagram_8);
});
$('#modalYearInstagram-9').on('click', function() {
    let modalYearInstagram_9 = $(this).text();
    $('.profile__block-instagram-list-filter-year p').html(modalYearInstagram_9);
});
$('#modalYearInstagram-10').on('click', function() {
    let modalYearInstagram_10 = $(this).text();
    $('.profile__block-instagram-list-filter-year p').html(modalYearInstagram_10);
});
$('#modalYearInstagram-11').on('click', function() {
    let modalYearInstagram_11 = $(this).text();
    $('.profile__block-instagram-list-filter-year p').html(modalYearInstagram_11);
});
$('#modalYearInstagram-12').on('click', function() {
    let modalYearInstagram_12 = $(this).text();
    $('.profile__block-instagram-list-filter-year p').html(modalYearInstagram_12);
});

//! ---------------------------------------------------------------------------





//! Фильтр месяца 

$('.profile__block-instagram-list-filter-month').on('click', function() {
    $(this).toggleClass('profile__block-instagram-list-filter-month-active')
    $('.profile__block-instagram-list-filter-month-select').toggleClass('display-n')
    $('.profile__block-instagram-list-filter-year-select').addClass('display-n')
    $('.profile__block-instagram-list-filter-year').removeClass('profile__block-instagram-list-filter-year-active')
});
$('#modalMonthInstagram-1').on('click', function() {
    let modalMonthInstagram_1 = $(this).text();
    $('.profile__block-instagram-list-filter-month p').html(modalMonthInstagram_1);
});
$('#modalMonthInstagram-2').on('click', function() {
    let modalMonthInstagram_2 = $(this).text();
    $('.profile__block-instagram-list-filter-month p').html(modalMonthInstagram_2);
});
$('#modalMonthInstagram-3').on('click', function() {
    let modalMonthInstagram_3 = $(this).text();
    $('.profile__block-instagram-list-filter-month p').html(modalMonthInstagram_3);
});
$('#modalMonthInstagram-4').on('click', function() {
    let modalMonthInstagram_4 = $(this).text();
    $('.profile__block-instagram-list-filter-month p').html(modalMonthInstagram_4);
});
$('#modalMonthInstagram-5').on('click', function() {
    let modalMonthInstagram_5 = $(this).text();
    $('.profile__block-instagram-list-filter-month p').html(modalMonthInstagram_5);
});
$('#modalMonthInstagram-6').on('click', function() {
    let modalMonthInstagram_6 = $(this).text();
    $('.profile__block-instagram-list-filter-month p').html(modalMonthInstagram_6);
});
$('#modalMonthInstagram-7').on('click', function() {
    let modalMonthInstagram_7 = $(this).text();
    $('.profile__block-instagram-list-filter-month p').html(modalMonthInstagram_7);
});
$('#modalMonthInstagram-8').on('click', function() {
    let modalMonthInstagram_8 = $(this).text();
    $('.profile__block-instagram-list-filter-month p').html(modalMonthInstagram_8);
});
$('#modalMonthInstagram-9').on('click', function() {
    let modalMonthInstagram_9 = $(this).text();
    $('.profile__block-instagram-list-filter-month p').html(modalMonthInstagram_9);
});
$('#modalMonthInstagram-10').on('click', function() {
    let modalMonthInstagram_10 = $(this).text();
    $('.profile__block-instagram-list-filter-month p').html(modalMonthInstagram_10);
});
$('#modalMonthInstagram-11').on('click', function() {
    let modalMonthInstagram_11 = $(this).text();
    $('.profile__block-instagram-list-filter-month p').html(modalMonthInstagram_11);
});
$('#modalMonthInstagram-12').on('click', function() {
    let modalMonthInstagram_12 = $(this).text();
    $('.profile__block-instagram-list-filter-month p').html(modalMonthInstagram_12);
});

//! ---------------------------------------------------------------------------

