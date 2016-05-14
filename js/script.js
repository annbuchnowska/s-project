$(document).ready(function(){
	var menuLinks = $('.tab-menu a, .mobile-menu-list a');
	menuLinks.on('click', function() {
		menuLinks.removeClass('active');
		$(this).addClass('active');
		var index = menuLinks.index($(this));
		$('.list-box').removeClass('active').eq(index).addClass('active');
	});

	$('.mobile-menu, .mobile-menu-list a').on('click', function() {
		$(this).toggleClass('active');
		$('.mobile-menu-list').toggleClass('active');
	});
});
