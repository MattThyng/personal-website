$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 100) {
        $('nav').addClass('shrink');
    }
    else {
        $('nav').removeClass('shrink');
    }
});