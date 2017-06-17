
//fixed-header

$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
      $('header').addClass('fixed-header');
    }
    else {
      $('header').removeClass('fixed-header');
    }
});


$(function () {


//scroll

    $('.header-nav li a').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });


//burger

    $('.burger-icon').click(function () {
            $('body').toggleClass('nav-open');
        })
        , $('.header-nav li a').click(function () {
            $('body').removeClass('nav-open');
        });


//about-slider

    $('.about-reviews').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });


//work-tabs

    $( ".works-tabs" ).tabs();


//team-tabs

        $('.about-team-list-item-user').click(function () {
        $(".about-team-item-description").addClass('hide');
        $('.about-team-list-item').css('margin-bottom', '57px');

        var height = $(".about-team-item-description").outerHeight();
        $(this).closest('.about-team-list-item').css('margin-bottom', height + 57);
        $(this).next('.about-team-item-description').removeClass('hide');

    }),$('.close-icon').click(function () {
       $(this).closest('.about-team-item-description').addClass('hide');
       $(this).closest('.about-team-list-item').css('margin-bottom', '57px');
    });

});

