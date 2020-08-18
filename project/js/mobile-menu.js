$(document).ready(function() {
	$('.main-nav__toggle').click(function(event) {
		$('.main-nav__toggle,.main-nav__wrapper,.burger-menu__span').toggleClass('active');
		$('.index-header,.photo-header').toggleClass('active')
	});
});