new Swiper('.fullscrin-swiper', {

// УПРАВЛЕНИЕ КЛАВИАТУРОЙ
keyboard: {
	// вкл/выкл
	enabled: true,
	// только когда слайдер в пределах видимости
	onlyInViewport: true,
},

clickable: true,
// Бесконечный слайдер
loop: true,

// Переключение при клике на слайд
slideToClickedSlide: true,

// Навигация по хешу
hashNavigation: {
	// Отслеживать состояние
	watchState: true,
},

// Скорость
speed: 4000,


// Автопрокрутка
autoplay: {
	delay: 5000,
	// Закончить на последнем слайде
	// stopOnLastSlide: true,
	// Отключить после ручного переключения
	disableOnInteraction: false
},
// Ленивая подгрузка
lazy: {
	loadPrevNext: true,
},
});


// Burger
$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('burger-active');
		$('.offcanvas-menu-overlay').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$(".offcanvas-menu-overlay").click(function(event) {
		$(".offcanvas-menu-overlay").removeClass("active");
		$(".header__menu").removeClass("burger-active");
		$(".header__burger").removeClass("burger-active::before, burger-active::after, burger-active span");
		$('body').toggleClass('lock');
		$("html, body").css("overflow", "");
	 });
 });

// Scroll
window.addEventListener('scroll', e => {
	let header = document.getElementById('header').classList;
	let active_class = "header__scrolled";

	if(pageYOffset > 250) header.add(active_class)
	else header.remove(active_class)
 })








