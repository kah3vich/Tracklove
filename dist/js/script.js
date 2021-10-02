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
//! Слайдер блога 

var profileBlogSlider = new Swiper(".profileBlogSlider", {
    loop: true,
    navigation: {
        nextEl: ".profile__blog-slider .swiper-controls .swiper-button-next",
        prevEl: ".profile__blog-slider .swiper-controls .swiper-button-prev",
    },
});

//! ---------------------------------------------------------------------------


//! Loading Instagram


function profileLoadingInstagram() {
    var profilePercent = document.querySelector('.profile__block-instagram-percent');
    var profileProgress = document.querySelector('.profile__block-instagram-progress');
    // var text = document.querySelector('.text');
    var profileCount = 0;
    var profilePer = 0;
    var profileLoadingInstagram = setInterval(profileAnimate, 50);
        function profileAnimate() {
            if (profileCount == 100 && profilePer == 325){
                // percent.classList.add("text-blink");
                // text.style.display = "block";
                clearInterval(profileLoadingInstagram);
            } else {
                profilePer = profilePer + 3.25;
                profileCount = profileCount + 1;
                profileProgress.style.width = profilePer + 'px';
                profilePercent.textContent = profileCount + '%';
            }
        }
}


//! ----------------------------------------------------------------------------


//! Сюжет для блока instagram

$('.profile__banner-block-1').on('click', function() {
    if($('.profile__block-instagram-loading').hasClass('display-n')) {
        $('.profile__block-vk').addClass('display-n')
        $('.profile__banner').css('margin', '96px 0 263px 0');
        $('.profile__block-banners').removeClass('display-n')
        $('.profile__block-instagram').removeClass('display-n')
        $('.profile__block-instagram-search').removeClass('display-n')
        $('.profile__block-instagram-loading').addClass('display-n')
        $('.percent').text('0%')
        $('.profile__block-instagram-list').addClass('display-n')
        $('.profile__block-instagram-account').addClass('display-n')
    }
});
$('.profile__block-instagram-close').on('click', function() {
    $('.profile__banner').css('margin', '96px 0 176px 0');
    $('.profile__block-banners').addClass('display-n')
    $('.profile__block-instagram').addClass('display-n')
    $('.profile__block-instagram-search').addClass('display-n')
    $('.profile__block-instagram-loading').addClass('display-n')
    $('.percent').text('0%')
    $('.profile__block-instagram-list').addClass('display-n')
    $('.profile__block-instagram-account').addClass('display-n')
});
//! Запрет на запуск функции загрузки 

// $('.profile__block-instagram-search-btn').on('click', function() {
//     $('.profile__block-instagram-search').addClass('display-n')
//     $('.profile__block-instagram-list').removeClass('display-n')
// });
// $('.profile__block-instagram-search-btn').on('click', function() {
//     setTimeout(function() {
//         profileLoadingInstagram();
//     }, 300);
//     $('.profile__block-instagram-search').addClass('display-n')
//     $('.profile__block-instagram-loading').removeClass('display-n')
//     setTimeout(function() {
//         $('.profile__block-instagram-loading').addClass('display-n')
//         $('.profile__block-instagram-list').removeClass('display-n')
//     }, 5500)
//     $('.profile__block-instagram-close').prop('disabled', true);
//     setTimeout(function() {
//         $('.profile__block-instagram-close').prop('disabled', false);
//     }.bind('.profile__block-instagram-close'), 6000);
// });
$('.profile__block-instagram-list-block-item').on('click', function() {
    $('.profile__block-instagram-list').addClass('display-n')
    $('.profile__block-instagram-account').removeClass('display-n')
});
$('.profile__block-instagram-account-btn').on('click', function() {
    $('.profile__block-instagram-list').removeClass('display-n')
    $('.profile__block-instagram-account').addClass('display-n')
});

//! Проверка на заполненость 

$('.profile__block-instagram-search-btn').on('click', function() {
    if ($('.profile__block-instagram-search-input input').val() == '') {
    } else {
        $('.profile__block-instagram-search-btn').prop('disabled', false);
        setTimeout(function() {
            profileLoadingInstagram();
        }, 300);
        $('.profile__block-instagram-search').addClass('display-n')
        $('.profile__block-instagram-loading').removeClass('display-n')
        setTimeout(function() {
            $('.profile__block-instagram-loading').addClass('display-n')
            $('.profile__block-instagram-list').removeClass('display-n')
        }, 5500)
        $('.profile__block-instagram-close').prop('disabled', true);
        setTimeout(function() {
            $('.profile__block-instagram-close').prop('disabled', false);
        }.bind('.profile__block-instagram-close'), 6000);
    }
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






//! Loading vk


function profileLoadingVk() {
    var profilePercent = document.querySelector('.profile__block-vk-percent');
    var profileProgress = document.querySelector('.profile__block-vk-progress');
    // var text = document.querySelector('.text');
    var profileCount = 0;
    var profilePer = 0;
    var profileLoadingVk = setInterval(profileAnimate, 50);
        function profileAnimate() {
            if (profileCount == 100 && profilePer == 325){
                // percent.classList.add("text-blink");
                // text.style.display = "block";
                clearInterval(profileLoadingVk);
            } else {
                profilePer = profilePer + 3.25;
                profileCount = profileCount + 1;
                profileProgress.style.width = profilePer + 'px';
                profilePercent.textContent = profileCount + '%';
            }
        }
}


//! ----------------------------------------------------------------------------


//! Сюжет для блока vk

$('.profile__banner-block-2').on('click', function() {
    if($('.profile__block-vk-loading').hasClass('display-n')) {
        $('.profile__block-instagram').addClass('display-n')
        $('.profile__banner').css('margin', '96px 0 263px 0');
        $('.profile__block-banners').removeClass('display-n')
        $('.profile__block-vk').removeClass('display-n')
        $('.profile__block-vk-search').removeClass('display-n')
        $('.profile__block-vk-loading').addClass('display-n')
        $('.percent').text('0%')
        $('.profile__block-vk-list').addClass('display-n')
        $('.profile__block-vk-account').addClass('display-n')
    }
});
$('.profile__block-vk-close').on('click', function() {
    $('.profile__banner').css('margin', '96px 0 176px 0');
    $('.profile__block-banners').addClass('display-n')
    $('.profile__block-vk').addClass('display-n')
    $('.profile__block-vk-search').addClass('display-n')
    $('.profile__block-vk-loading').addClass('display-n')
    $('.percent').text('0%')
    $('.profile__block-vk-list').addClass('display-n')
    $('.profile__block-vk-account').addClass('display-n')
});
//! Запрет на запуск функции загрузки 

// $('.profile__block-vk-search-btn').on('click', function() {
//     $('.profile__block-vk-search').addClass('display-n')
//     $('.profile__block-vk-list').removeClass('display-n')
// });
// $('.profile__block-vk-search-btn').on('click', function() {
//     setTimeout(function() {
//         profileLoadingVk();
//     }, 300);
//     $('.profile__block-vk-search').addClass('display-n')
//     $('.profile__block-vk-loading').removeClass('display-n')
//     setTimeout(function() {
//         $('.profile__block-vk-loading').addClass('display-n')
//         $('.profile__block-vk-list').removeClass('display-n')
//     }, 5500)
//     $('.profile__block-vk-close').prop('disabled', true);
//     setTimeout(function() {
//         $('.profile__block-vk-close').prop('disabled', false);
//     }.bind('.profile__block-vk-close'), 6000);
// });
$('.profile__block-vk-list-block-item').on('click', function() {
    $('.profile__block-vk-list').addClass('display-n')
    $('.profile__block-vk-account').removeClass('display-n')
});
$('.profile__block-vk-account-btn').on('click', function() {
    $('.profile__block-vk-list').removeClass('display-n')
    $('.profile__block-vk-account').addClass('display-n')
});

//! Проверка на заполненость 

$('.profile__block-vk-search-btn').on('click', function() {
    if ($('.profile__block-vk-search-input input').val() == '') {
    } else {
        $('.profile__block-vk-search-btn').prop('disabled', false);
        setTimeout(function() {
            profileLoadingVk();
        }, 300);
        $('.profile__block-vk-search').addClass('display-n')
        $('.profile__block-vk-loading').removeClass('display-n')
        setTimeout(function() {
            $('.profile__block-vk-loading').addClass('display-n')
            $('.profile__block-vk-list').removeClass('display-n')
        }, 5500)
        $('.profile__block-vk-close').prop('disabled', true);
        setTimeout(function() {
            $('.profile__block-vk-close').prop('disabled', false);
        }.bind('.profile__block-vk-close'), 6000);
    }
});



//! ---------------------------------------------------------------------------


//! Фильтр года 

$('.profile__block-vk-list-filter-year').on('click', function() {
    $(this).toggleClass('profile__block-vk-list-filter-year-active')
    $('.profile__block-vk-list-filter-year-select').toggleClass('display-n')
    $('.profile__block-vk-list-filter-month-select').addClass('display-n')
    $('.profile__block-vk-list-filter-month').removeClass('profile__block-vk-list-filter-month-active')
});
$('#modalYearVk-1').on('click', function() {
    let modalYearVk_1 = $(this).text();
    $('.profile__block-vk-list-filter-year p').html(modalYearVk_1);
});
$('#modalYearVk-2').on('click', function() {
    let modalYearVk_2 = $(this).text();
    $('.profile__block-vk-list-filter-year p').html(modalYearVk_2);
});
$('#modalYearVk-3').on('click', function() {
    let modalYearVk_3 = $(this).text();
    $('.profile__block-vk-list-filter-year p').html(modalYearVk_3);
});
$('#modalYearVk-4').on('click', function() {
    let modalYearVk_4 = $(this).text();
    $('.profile__block-vk-list-filter-year p').html(modalYearVk_4);
});
$('#modalYearVk-5').on('click', function() {
    let modalYearVk_5 = $(this).text();
    $('.profile__block-vk-list-filter-year p').html(modalYearVk_5);
});
$('#modalYearVk-6').on('click', function() {
    let modalYearVk_6 = $(this).text();
    $('.profile__block-vk-list-filter-year p').html(modalYearVk_6);
});
$('#modalYearVk-7').on('click', function() {
    let modalYearVk_7 = $(this).text();
    $('.profile__block-vk-list-filter-year p').html(modalYearVk_7);
});
$('#modalYearVk-8').on('click', function() {
    let modalYearVk_8 = $(this).text();
    $('.profile__block-vk-list-filter-year p').html(modalYearVk_8);
});
$('#modalYearVk-9').on('click', function() {
    let modalYearVk_9 = $(this).text();
    $('.profile__block-vk-list-filter-year p').html(modalYearVk_9);
});
$('#modalYearVk-10').on('click', function() {
    let modalYearVk_10 = $(this).text();
    $('.profile__block-vk-list-filter-year p').html(modalYearVk_10);
});
$('#modalYearVk-11').on('click', function() {
    let modalYearVk_11 = $(this).text();
    $('.profile__block-vk-list-filter-year p').html(modalYearVk_11);
});
$('#modalYearVk-12').on('click', function() {
    let modalYearVk_12 = $(this).text();
    $('.profile__block-vk-list-filter-year p').html(modalYearVk_12);
});

//! ---------------------------------------------------------------------------





//! Фильтр месяца 

$('.profile__block-vk-list-filter-month').on('click', function() {
    $(this).toggleClass('profile__block-vk-list-filter-month-active')
    $('.profile__block-vk-list-filter-month-select').toggleClass('display-n')
    $('.profile__block-vk-list-filter-year-select').addClass('display-n')
    $('.profile__block-vk-list-filter-year').removeClass('profile__block-vk-list-filter-year-active')
});
$('#modalMonthVk-1').on('click', function() {
    let modalMonthVk_1 = $(this).text();
    $('.profile__block-vk-list-filter-month p').html(modalMonthVk_1);
});
$('#modalMonthVk-2').on('click', function() {
    let modalMonthVk_2 = $(this).text();
    $('.profile__block-vk-list-filter-month p').html(modalMonthVk_2);
});
$('#modalMonthVk-3').on('click', function() {
    let modalMonthVk_3 = $(this).text();
    $('.profile__block-vk-list-filter-month p').html(modalMonthVk_3);
});
$('#modalMonthVk-4').on('click', function() {
    let modalMonthVk_4 = $(this).text();
    $('.profile__block-vk-list-filter-month p').html(modalMonthVk_4);
});
$('#modalMonthVk-5').on('click', function() {
    let modalMonthVk_5 = $(this).text();
    $('.profile__block-vk-list-filter-month p').html(modalMonthVk_5);
});
$('#modalMonthVk-6').on('click', function() {
    let modalMonthVk_6 = $(this).text();
    $('.profile__block-vk-list-filter-month p').html(modalMonthVk_6);
});
$('#modalMonthVk-7').on('click', function() {
    let modalMonthVk_7 = $(this).text();
    $('.profile__block-vk-list-filter-month p').html(modalMonthVk_7);
});
$('#modalMonthVk-8').on('click', function() {
    let modalMonthVk_8 = $(this).text();
    $('.profile__block-vk-list-filter-month p').html(modalMonthVk_8);
});
$('#modalMonthVk-9').on('click', function() {
    let modalMonthVk_9 = $(this).text();
    $('.profile__block-vk-list-filter-month p').html(modalMonthVk_9);
});
$('#modalMonthVk-10').on('click', function() {
    let modalMonthVk_10 = $(this).text();
    $('.profile__block-vk-list-filter-month p').html(modalMonthVk_10);
});
$('#modalMonthVk-11').on('click', function() {
    let modalMonthVk_11 = $(this).text();
    $('.profile__block-vk-list-filter-month p').html(modalMonthVk_11);
});
$('#modalMonthVk-12').on('click', function() {
    let modalMonthVk_12 = $(this).text();
    $('.profile__block-vk-list-filter-month p').html(modalMonthVk_12);
});

//! ---------------------------------------------------------------------------



//! Media слайдер 



var profileMediaSliderBanners = new Swiper(".profileMediaSliderBanners", {
    navigation: {
        nextEl: ".profile__banner .swiper-controls .swiper-button-next",
        prevEl: ".profile__banner .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
        999: {
            slidesPerView: 2,
            spaceBetweenSlides: 20
        }
    }
});

//! ----------------------------------------------------------------------------
//! Слайдер блога 

var adviceBlogSlider = new Swiper(".adviceBlogSlider", {
    loop: true,
    navigation: {
        nextEl: ".advice__blog-slider .swiper-controls .swiper-button-next",
        prevEl: ".advice__blog-slider .swiper-controls .swiper-button-prev",
    },
});

//! ---------------------------------------------------------------------------

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
    breakpoints: {
      750: {
          slidesPerView: 2,
          spaceBetweenSlides: 20
      },
      0: {
          slidesPerView: 1,
          spaceBetweenSlides: 10
      }
  }
});


//! --------------------------------------------------------------------------------------------


//! Вкладки 

$('#entranceTabs-1').on('click', function() {
    $('.ent__block-registration').removeClass('display-n')
    $('.ent__block-entrance').addClass('display-n')
    $(this).addClass('ent__block-tabs-item-active')
    $('#entranceTabs-2').removeClass('ent__block-tabs-item-active')
});
$('#entranceTabs-2').on('click', function() {
    $('.ent__block-registration').addClass('display-n')
    $('.ent__block-entrance').removeClass('display-n')
    $(this).addClass('ent__block-tabs-item-active')
    $('#entranceTabs-1').removeClass('ent__block-tabs-item-active')
});

//! -----------------------------------------------------------------------



//! Проверка заполнения - вход 


$('.ent__block-entrance-wrapper-btn').on('click', function() {
    if (($('.ent__block-entrance-wrapper-email input').val() == '') && ($('.ent__block-entrance-wrapper-password input').val() == '')) {
        // $('.ent__block-entrance-wrapper-email').css('border', '2px solid red')
    } else {
        location.href = 'profile.html';
    }
});



//! ------------------------------------------------------------------------