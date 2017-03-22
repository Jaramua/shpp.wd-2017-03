$(document).ready(function(){

	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
		$('#toTop').click(function() {
			$('body,html').animate({scrollTop:0},800);
		});
	});

	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - ($(window).height() - $(id).outerHeight(true)) / 2;
		$('body,html').animate({scrollTop: top}, 300);
	});

});