$(document).ready(function() {
	$('.main-nav__toggle').click(function(event) {
		$('.main-nav__toggle,.main-nav__wrapper').toggleClass('active');
		$('.index-header').toggleClass('index-header__padding')
	});
});