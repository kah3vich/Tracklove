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