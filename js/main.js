(function ($){


 $('.slider-active').owlCarousel({
    loop:true,
    margin:10,
    autoplay:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

})(jQuery);


