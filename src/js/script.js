$(document).ready(function () {
    
    // Search
    $('.nav-search__button').on('click', function () {
	    $('.search-form__group').addClass('search-active');
	});

	$('.search-form__button-close').on('click', function () {
		$('.search-form__group').removeClass('search-active');
	});

	// Scroll
	$('.hero__scroll').on('click', function() {
		$('html, body').animate({
			scrollTop: $(window).height()- 355
		}, 1200);
	});

});