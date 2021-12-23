"use strict"

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}




let myImageSlider = new Swiper('.image-slider', {

	// Увімкнення/відключення
	// Перетягування на ПК
	simulateTouch: true,
	// Чутливість свайпа
	touchRatio: 1,
	// Кут спрацьовування свайпа/перетягування
	touchAngle: 45,
	// Курсор перетягування
	grabCursor: true,

	// Перемикання при натисканні на слайд
	slideToClickedSlide: false,

	// Навігація за хешем
	hashNavigation: {
		// Відстежувати стан
		watchState: true,
	},

	// Управління клавіатурою
	keyboard: {
		// Вкл\викл
		enabled: true,
		// Включити вимкнути
		// Тільки коли слайдер
		// у межах в'юпорту
		onlyInViewport: true,
		// Включити вимкнути
		// Управління клавішами
		// pageUp, pageDown
		pageUpDown: true,
	},


	// Автовисота
	autoHeight: false,

	// Кількість слайдів для показу
	slidesPerView: 1,

	// Відключення функціоналу
	// якщо слайдів менше, ніж потрібно
	watchOverflow: true,

	// Кількість слайдів, що перегортаються
	slidesPerGroup: 1,

	// Активний слайд по центру
	centeredSlides: false,

	// Стартовий слайд.
	initialSlide: 0,

	// Мультирядність
	slidesPerColumn: 1,

	// Безкінечний слайдер
	loop: true,

	// Кількість дублюючих слайдів
	loopedSlides: 0,

	// Вільний режим
	freeMode: true,


	// Швидкість
	speed: 100,

	// Вертикальний слайдер
	direction: 'horizontal',


	// Ефекти перемикання слайдів.
	// Листання
	effect: 'slide',

	
	// Вимкнути передзавантаження картинок
	preloadImages: true,
	// Lazy Loading
	// (підвантаження картинок)
	lazy: {
		// Підвантажувати на старті
		// Перемикання слайду
		loadOnTransitionStart: true,
		// Підвантажити попередню
		// і наступне зображення
		loadPrevNext: true,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Додавання класу видимим слайдам
	watchSlidesVisibility: true,


	// Оновити свайпер
	// При зміні елементів слайдера
	observer: true,

	// Оновити свайпер
	// за зміни батьківських
	// Елементів слайдера
	observeParents: true,

	// Оновити свайпер
	// за зміни дочірніх
	// Елементів слайду
	observeSlideChildren: true,

	
});

