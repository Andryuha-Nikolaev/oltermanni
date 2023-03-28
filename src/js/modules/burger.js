// кнопка показать/скрыть бургер меню
const burgerBtn = document.querySelector('.header__burger-btn');
// бургер меню
const burgerMenu = document.querySelector('.header__burger-menu');

//функция закрытия бургер меню
const closeBurger = () => {
  burgerBtn.classList.remove('header__burger-btn_opened');
  burgerMenu.classList.remove('header__burger-menu_opened');
};

// переключатель состояния кнопки и бургер меню
const toggleBurger = () => {
  burgerBtn.classList.toggle('header__burger-btn_opened');
  burgerMenu.classList.toggle('header__burger-menu_opened');
};

// слушатель клика по кнопке бургер меню
burgerBtn.addEventListener('click', () => {
  toggleBurger();
});

// слушатель скролла для автоматического закрытия бургер меню
document.addEventListener('scroll', () => {
  closeBurger();
});
