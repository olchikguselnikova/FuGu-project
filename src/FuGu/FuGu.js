import './FuGu.scss';

$(function () {
	var el = $('.nav_list li a');
	$('.nav_list li:has("ul")').append('<span></span>');
	el.click(function() {
		var checkedElement = $(this).next(),
			visibleElement = $('.nav_list ul:visible');
			
		visibleElement.stop().animate({'height':'toggle'}, 500).parent().removeClass('active');		
		if((checkedElement.is('ul')) && (!checkedElement.is(':visible'))) {
			checkedElement.stop().animate({'height':'toggle'}, 500).parent().addClass('active');
			return false;
        }	
		if((checkedElement.is('ul')) && (checkedElement.is(':visible'))) {
			return false;
		}
	});
});