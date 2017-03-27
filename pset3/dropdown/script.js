$(document).ready(function() {
	
	var $ul = $("ul");
	var $uli = $("ul li");
	$ul.hide();

	$("span h3").click(function(){
		$(this).parent().next().slideToggle();
	});
	var $nameList = $('ul.name_list li');
	$nameList.click(function(){
		var tx = $(this).html();
		var tv = $(this).attr('alt');
		var $outout = $(".container span h3");
		$(".name_list").slideUp('fast');
		$outout.html(tx);
		$(".text").html(tv);
	});

});