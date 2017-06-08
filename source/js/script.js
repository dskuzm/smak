
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
