//Слайдер Swiper
const swiper = new Swiper('.swiper-container', {
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	//Переключение при клике на слайд
	slideToClickedSlide: true,
	//Прокрутка слайдов колёсиком
	mousewheel: {
		sensitive: 1,
	},
	//Бесконечная прокрутка
	loop: true,

	//Свободная прокрутка
	/*freeMode:true,*/

	//Эффект прокрутки
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 20,
		stretch: 0,
	},

	//Выбранный слайд всегда по центру
	centeredSlides: true,

	breakpoints: {
		320: {
			slidesPerView: '1.25',
			spaceBetween: 20,
		},
		576: {
			slidesPerView: '2',
			spaceBetween: 30,
		},
		767: {
			slidesPerView: '3',
			spaceBetween: 30,
		},
	},
})