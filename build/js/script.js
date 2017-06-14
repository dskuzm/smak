//----about--slider----

$('.about-reviews').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
});
//----burger-menu----

$(function () {
    $('.burger-icon').click(function () {
            $('body').toggleClass('nav-open');
        })
        , $('nav a').click(function () {
            $('body').removeClass('nav-open');
        });
});



//works-tabs

$( function() {
    $( ".works-tabs" ).tabs();
  } );


//scroll
$(document).ready(function () {
    $('.header-nav li a').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});


//fixed-header

$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
      $('header').addClass('fixed-header');
    }
    else {
      $('header').removeClass('fixed-header');
    }
});


//team-tabs

$(function () {
    $('.about-team-list-item').click(function () {

        var height = $(".about-team-item-hide").outerHeight();//узнаем высоту скрытого блока

        $('.about-team-list-item').css('margin-bottom', '55px');//задаем марджин по уцмолчанию
        $(this).closest('.about-team-list-item').find('.about-team-list-item-user .about-team-item-hide ').show();
        $(this).closest('.about-team-list-item').find('.about-team-list-item-user').css('margin-bottom', height + 57);//добавляем марджин и смещаем контент вниз

    }),$('.about-team-item-hide button').click(function () {

        $(this).closest('.qqq').find('about-team-list-item-user').removeAttr('style');
        $(this).closest('.about-team-list-item').find('about-team-list-item-user').attr('style', 'margin:0;');
        $('.about-team-item-hide').css('height', '0');

    });
});







