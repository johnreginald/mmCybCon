window.sr = new scrollReveal();
    
var num = 100; //number of pixels before modifying styles

$('.ui.video').video();

$('select.dropdown').dropdown();    
    
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.nav-menu').addClass('nav-fixed');
    } else {
        $('.nav-menu').removeClass('nav-fixed');
    }
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('nav-active');
        })
        $(this).addClass('nav-active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 75
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('nav ul li a').removeClass("nav-active");
            currentLink.addClass("nav-active");
        }
        else{
            currentLink.removeClass("nav-active");
        }
    });
}