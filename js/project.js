$(document).ready(function(){
	window.setTimeout(function(){
		$('nav.nav-bar .brand-icon').addClass("activate");
		$('.project-img-container').addClass("loaded");
	}, 250);
});

function scrollTo(element) {
	var diff = Math.abs($(element).offset().top - $(window).scrollTop());
	var timing;
	if (diff < 2000) {
		timing = 1000;
	}
	else if (diff < 4000) {
		timing = 1500;
	}
	else {
		timing = 2000;
	}
	console.log(timing);
	$('html, body').animate({
        scrollTop: $(element).offset().top
    }, timing);
}