function scrollTo(selector, delta) {
	var offset = delta || 30;
	var yDist = document.querySelector(selector).offsetTop;
	window.scroll({top: (yDist - offset), left: 0, behavior: "smooth"})
}
function addPortfolioImages() {
	document.querySelectorAll('.portfolio--block .portfolio--block-img').forEach(function(element){
		var link = element.getAttribute('data-src');
		element.style.backgroundImage = "url('./img/projects/"+link+"')";
	});
}
function registerNavClick() {
	document.querySelectorAll(
		'.navbar .nav--item:nth-child(3), #hero .hero--cta .btn:nth-child(2), .footer .sitemap .list-item:nth-child(3)'
		).forEach(function(element) {
			element.onclick = function() {
				scrollTo('#about');
			};
		});
	document.querySelectorAll(
		'.navbar .nav--item:nth-child(1), #hero .hero--cta .btn:nth-child(1), .footer .sitemap .list-item:nth-child(1)'
		).forEach(function(element) {
			element.onclick = function() {
				scrollTo('#portfolio', 0);
			};
		});
	document.querySelectorAll(
		'.navbar .nav--item:nth-child(2), .footer .sitemap .list-item:nth-child(2)'
		).forEach(function(element) {
			element.onclick = function() {
				scrollTo('#experience');
			}
		});
}
function handleExperienceModule() {
	document.querySelector('.work-module .work-module--controls--option:nth-child(1)').onclick = function() {
		document.querySelector('.work-module').classList.remove('state-2');
		document.querySelector('.work-module').classList.remove('state-3');
	};
	document.querySelector('.work-module .work-module--controls--option:nth-child(2)').onclick = function() {
		document.querySelector('.work-module').classList += ' state-2';
		document.querySelector('.work-module').classList.remove('state-3');
	};
	document.querySelector('.work-module .work-module--controls--option:nth-child(3)').onclick = function() {
		document.querySelector('.work-module').classList.remove('state-2');
		document.querySelector('.work-module').classList += ' state-3';
	};
}

document.addEventListener('readystatechange', function() { 
	if (document.readyState === 'complete') {
		document.querySelector('body').classList.remove('preset');
	}
});
document.addEventListener('DOMContentLoaded', function() {
	addPortfolioImages();
	registerNavClick();
	if (document.querySelector('.work-module') !== null) {
		handleExperienceModule();
	}
});