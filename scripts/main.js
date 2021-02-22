/*-------------------------------------------------------
All javascript and jquery plugins activation
-------------------------------------------------------*/
(function($){
    "use strict";
    
    /*---------------------------
    sticky header
    ---------------------------*/
    window.addEventListener("scroll", function(){
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    }); 
    
    /*---------------------------
    Smooth scrolling
    ---------------------------*/
    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            let hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
    
    /*---------------------------
    Slider
    ---------------------------*/
    $('.slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:1
            }
        }
    });
    
})(jQuery);