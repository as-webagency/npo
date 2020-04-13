$(document).ready(function () {
    
    // Search
    $('.nav-search__button').on('click', function () {
	    $('.search-form__group').addClass('search-active');
	});

	$('.search-form__button-close').on('click', function () {
		$('.search-form__group').removeClass('search-active');
	});

});