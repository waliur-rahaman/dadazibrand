/*-------------------------------------------------------
All javascript and jquery plugins activation
-------------------------------------------------------*/
(function($){
    "use strict";

    /*---------------------------
    preloader timeout
    ---------------------------*/
    setTimeout(function(){
        $('#preloader-area').fadeOut();
    }, 1500);
    
    /*---------------------------
    Slider
    ---------------------------*/
    $('.slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        nav: false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            }
        }
    });
    
    /*---------------------------
    about slider
    ---------------------------*/
    $(".about-slider").slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });    

    /*---------------------------
    Scroll to top
    ---------------------------*/
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $('#scroll-to-top').fadeIn();
        }else{
            $('#scroll-to-top').fadeOut();
        }
    });
    
    $('#scroll-to-top').click(function(){
        $("html,body").animate({scrollTop : 0 }, 600);
        return false;
    });
    
})(jQuery);