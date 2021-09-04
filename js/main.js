	//fixed navigation
	$(document).scroll (function(){
		if ($(document).scrollTop() > 0) $('.navbar').addClass('fixed-nav');
        else $('.navbar').removeClass('fixed-nav');
	});