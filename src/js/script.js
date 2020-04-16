$(document).ready(function () {
    
	// Search Nav
	if(screen.width > 1024) {
		$('.nav-search__button').on('click', function () {
			$('.search-form__group').addClass('search-active');
		});

		$('.search-form__button-close').on('click', function () {
			$('.search-form__group').removeClass('search-active');
		});
	}

	// Search Header
	if(screen.width < 1024) {
		$('.header-search__button').on('click', function () {
			$('.search-form__group').addClass('search-active');
			$(".header__relative").css('background-color', 'transparent');
			$(".header__relative").css('z-index', '0');
		});

		$('.search-form__button-close').on('click', function () {
			$('.search-form__group').removeClass('search-active');
			$(".header__relative").css('background-color', '#fff');
			$(".header__relative").css('z-index', '10');
		});
	}

	// Scroll
	if(screen.width > 1024) {
		$('.hero__scroll').on('click', function() {
			var scroll = Math.max($("body").scrollTop(),$("html").scrollTop()) + 900;
			$("body,html").animate({"scrollTop":scroll}, 1000);
		});
	}

	if(screen.width < 1024) {
		$('.hero__scroll').on('click', function() {
			var scroll = Math.max($("body").scrollTop(),$("html").scrollTop()) + 650;
			$("body,html").animate({"scrollTop":scroll}, 1000);
		});
	}

	// Menu
	$(".burger").click(function(){
		if($('.nav-list, .nav-info').css("display") == 'none') {
			$('.nav-list, .nav-info').slideDown();
			$(".burger").addClass("burger--open");
			$(".header__info").css('opacity', '0');
			$(".header__info").css('visibility', 'hidden');
			$(".header-contacts__items").css('opacity', '0');
			$(".header-contacts__items").css('visibility', 'hidden');
			$(".header-info").css('opacity', '0');
			$(".header-info").css('visibility', 'hidden');
			$(".nav-search__button").css('opacity', '0');
			$(".nav-search__button").css('visibility', 'hidden');
			$(".header-search__button").css('opacity', '0');
			$(".header-search__button").css('visibility', 'hidden');
		}
		else {
			$(".burger").removeClass("burger--open");
			$('.nav-list, .nav-info').slideUp();
			$(".header__info").css('opacity', '1');
			$(".header__info").css('visibility', 'visible');
			$(".header-contacts__items").css('opacity', '1');
			$(".header-contacts__items").css('visibility', 'visible');
			$(".header-info").css('opacity', '1');
			$(".header-info").css('visibility', 'visible');
			$(".nav-search__button").css('opacity', '1');
			$(".nav-search__button").css('visibility', 'visible');
			$(".header-search__button").css('opacity', '1');
			$(".header-search__button").css('visibility', 'visible');
		}
	});

});