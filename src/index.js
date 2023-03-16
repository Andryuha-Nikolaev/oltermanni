import './index.html';
import './scss/index.scss';

// кнопка показать/скрыть бургер меню
const burgerBtn = document.querySelector('.header__burger-btn');
const burgerMenu = document.querySelector('.header__burger-menu');

// используем метод addEventListener
burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('header__burger-btn_opened');
  burgerMenu.classList.toggle('header__burger-menu_opened');
});

document.addEventListener('scroll', () => {
  burgerBtn.classList.remove('header__burger-btn_opened');
  burgerMenu.classList.remove('header__burger-menu_opened');
});

// const burgerBtn = document.getElementById('burger-btn');

// burgerBtn.addEventListener('click', function () {
//   if (burgerMenu.classList.contains('burger-menu-closed')) {
//     burgerMenu.classList.remove('burger-menu-closed');
//     burgerMenu.classList.add('burger-menu-opened');
//     burgerBtn.innerHTML = 'Закрыть меню';
//   } else {
//     burgerMenu.classList.remove('burger-menu-opened');
//     burgerMenu.classList.add('burger-menu-closed');
//     burgerBtn.innerHTML = 'Открыть меню';
//   }
// });
