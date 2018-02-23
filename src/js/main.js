// ###############################
// MAIN JAVASCRIPT 
// ###############################

(function() {
	
    // #####################
    // INTRO SLIDER
    
    var $introSlider = $('.introSlider__wrapper');
    $introSlider.slick({
        prevArrow: $('.btn-prev'),
        nextArrow: $('.btn-next')
    });

    // #####################
    // MOBILE MENU

    $('.icon-menu').click(function(){
    	$('.mobileMenu').toggle();
    });

})();