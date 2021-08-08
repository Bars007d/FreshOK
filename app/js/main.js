$(function(){
	$('.header__filter-btn').on('click', function(){
		$('.header__filter-list').toggleClass('header__filter-list--active');
		$('.header__filter-btn').toggleClass('header__filter-btn--active');
	});
})