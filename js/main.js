	//fixed navigation
	$(document).scroll (function(){
		if ($(document).scrollTop() > 0) $('.header__wrapper').addClass('fixed-nav');
        else $('.header__wrapper').removeClass('fixed-nav');
	});