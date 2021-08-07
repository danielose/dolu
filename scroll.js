var h = $(window).height();
var x = "";

function height(){
    if (h <= 320) {
        x = 120;
    } else if (h <= 360){
        x = 320;
    } else {
        x = 150;
    }
};



$(window).scroll(function(){
    $('.header').toggleClass('scrolled', $(this).scrollTop() >= x/2);
    $('.footer').toggleClass('scrolled', $(this).scrollTop() >= x/2);
});

height();