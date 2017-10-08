// --------------------- Functions ----------------------
function _scrollTo(element) {
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
	// console.log(timing);
	$('html, body').animate({
        scrollTop: $(element).offset().top
    }, timing);
}

function checkInverseNav() {
	// different if nav is at top
	if (window.innerWidth > 650) {
		var about = $('#about').offset().top;
		var work = $('#work').offset().top + $('#work').height();
		if ($(window).scrollTop() > about - 50 && $(window).scrollTop() < work + 200) {
			$('nav.nav-container').addClass('inverse');
		}
		else {
			$('nav.nav-container').removeClass('inverse');
		}
	} 
	// different if nav is on bottom
	else {
		var contact = $('#contact').offset().top
		if ($(window).scrollTop() > 50 && $(window).scrollTop() < contact - $('#contact').height() + 30) {
			$('nav.nav-container').addClass('inverse');
		}
		else {
			$('nav.nav-container').removeClass('inverse');
		}
	}
}

function parallaxSkills() {
	var factor = $(window).height() * .9;
	var offset = Math.max(Math.min(factor - Math.max( $(window).scrollTop() - $('#skills').offset().top + $(window).height(), 0)) , 0) ;
	$('#skills .third-w:first-child').css('transform', 'translate(-' + (offset / 8) + 'px, ' + (offset / 8) + 'px)');
	$('#skills .third-w:last-child').css('transform', 'translate(' + (offset / 8) + 'px, ' + (offset / 8) + 'px)');
}
function parallaxReset() {
	$('#skills .third-w:first-child').css('transform', 'none');
	$('#skills .third-w:last-child').css('transform', 'none');
}


$(window).on('scroll', function() {
	checkInverseNav();
	// not in mobile form
	if (window.innerWidth > 950) {
		parallaxSkills();
	} else {
		parallaxReset();
	}
});

$(window).on('resize', function() {
	if (window.innerWidth < 950) {
		parallaxReset();
	}
});

// Copyright date always up to date
$(window).ready(function() {
	var date = new Date();
	$("#current-year").text(date.getFullYear());
	checkInverseNav();
	$(detectSection()).addClass('active');
});

function detectSection() {
	var about = $('#about').offset().top;
	var work = $('#work').offset().top;
	var contact = $('#contact').offset().top;
	if ($(window).scrollTop() < about) {
		return ".home-link";
	} else if ($(window).scrollTop() < work) {
		return ".about-link";
	} else if ($(window).scrollTop() < contact) {
		return ".work-link";
	} else {
		return ".contact-link";
	}
}

// ------------------ Sidebar Functions -------------------

function resetMenu() {
	$('.menu-overlay').removeClass("active");
	$('.menu-shrink').removeClass("active");
	$('.nav-launcher span.launcher-line').removeClass('active');
	$('.nav-toggle').removeClass('visible');
	$('body').removeClass("noscroll");
}

// Wrap these functions on a document.ready function
$(document).ready(function() {
	$(window).scroll(function() {
		$('.menu-overlay li a').removeClass("active");
		$(detectSection()).addClass("active");
	});
	
	// These three functions deal with closing menu on click 
	$('.menu-overlay').click(function() {
		resetMenu();
	});
	$('.nav-container').click(function(event){
	    event.stopPropagation();
	});
	$('.sidebar-inner li').click(function() {
		resetMenu();
	});

	// Toggle the sidebar on click of the nav-launcher class
	$('.nav-container').on('click', function() {
		$('.nav-launcher span.launcher-line').toggleClass('active');
		// if you want to switch back, then uncomment and remove false, if not then clean up unused elements and styles
		if (/*window.innerWidth > 850*/ false) {
			$('.nav-toggle').toggleClass('visible');
			console.log('working');
		}
		else {
			// swap this out for manipulating the sidebar or whatever
			$('.menu-overlay').toggleClass("active");
			$('.menu-shrink').toggleClass("active");
			$('body').toggleClass("noscroll");
		}
	});

	// ----------- Floating Input Functions --------------
	$('textarea.material-input').on('input', function(e){
	    var that = $(this);
	    if (that.scrollTop()) {
	        $(this).height(function(i,h){
	            return h + 20;
	        });
	    }
	});
	$('.floating-input').on('focusout', function(e){
	    var that = $(this);
	    if (!that.val() == "") {
	      that.addClass('active');
	    } else {
	      that.removeClass('active');
	    }
	});

	// ----------- AJAX to Email Script Form -----------
	$('#contact-form').on('submit', function(e) {
		e.preventDefault();
		$.ajax({
			method: 'POST',
			url: "https://script.google.com/macros/s/AKfycbzX29BtfLzAXEvRF19VJk3ksPQUd6XlBhy8N9I_qjZyR_o3l4E/exec",
			data: { 
				email: $('#contact-form input[name=email]').val() , 
				subject: $('#contact-form input[name=subject]').val() , 
				body: $('#contact-form textarea[name=body]').val()
			}, 
			success: function(returnData) {
				$('#contact-form').trigger('reset');
				$('#contact-form input[type=submit]').addClass('success');
				$('#contact-form input[type=submit]').val('Message Sent!');
			}, 
			error: function(jqXHR, status, error) {
				console.log(error);
			}
		});
	});
});

// -------- Waypoints Script ----------
$(document).ready(function(){
    //set a waypoint for all the page parts on the page
    var timelineWaypoints = $('.timeline-container .timeline-block').waypoint(function(direction) {
        //add the class to start the animation
        $(this.element).removeClass('fade-in-up');
        //then destroy this waypoint, we don't need it anymore
        this.destroy();
    }, {
        //Set the offset
        offset: '80%'
    });
});





