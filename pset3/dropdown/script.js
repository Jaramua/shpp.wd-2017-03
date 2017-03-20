$(document).ready(function() {

	$("ul").hide();
	$("ul li").hover(function(){
		$(this).css("background-color", "#EDE2DA", "cursor", "default");
	});
	$("ul li").mouseleave(function(){
		$(this).css("background-color", "#F7F7F7");
	});
	$("h3 span").click(function(){
		$(this).parent().next().slideToggle();
	});

	$('ul.name_list li').click(function(){
		var tx = $(this).html();
		var tv = $(this).attr('alt');
		$(".name_list").slideUp('fast');
		$(".container span").html(tx);
		$(".text").html(tv);
	});

});