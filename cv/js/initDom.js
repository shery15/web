var nextPage = function() {
	var li = $('li');
	var section = $('.section');
	var num = parseInt($('.active').data('num')) + 1;
	$('.active').removeClass('active');
	if (num < 5) {
		var current = li.eq(num);
		$('.current').removeClass('current');
		current.children().addClass('current');
		section.eq(num).addClass('active');
	} else{
		var current = li.eq(0);
		$('.current').removeClass('current');
		current.children().addClass('current');
		section.eq(0).addClass('active');
	};
};
var prewPage = function() {
	var li = $('li');
	var section = $('.section');
	var num = parseInt($('.active').data('num')) - 1;
	$('.active').removeClass('active');
	if (num > -1) {
		var current = li.eq(num);
		$('.current').removeClass('current');
		current.children().addClass('current');
		section.eq(num).addClass('active');
	} else{
		var current = li.eq(4);
		$('.current').removeClass('current');
		current.children().addClass('current');
		section.eq(4).addClass('active');
	};
};