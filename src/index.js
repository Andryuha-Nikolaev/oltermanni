import './index.html';

import './js/modules/slider';

import './scss/index.scss';

import Popup from './js/components/Popup';
import Burger from './js/components/burger';

// кнопка войти
const loginBtn = document.getElementById('login-btn');
// кнопка зарегистрироваться
const registerBtn = document.getElementById('register-btn');
// кнопка бургер меню
const burgerBtn = document.querySelector('.header__burger-btn');

const burgerMenu = new Burger('.header__burger-menu', '.header__burger-btn');
burgerBtn.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('header__burger-btn_opened')) {
    burgerMenu.close();
  } else {
    burgerMenu.open();
  }
});

document.addEventListener('scroll', () => {
  burgerMenu.close();
});

const popupLogin = new Popup('#popup-login');
popupLogin.setEventListeners(); // навешиваем слушатели

loginBtn.addEventListener('click', () => {
  popupLogin.open(); // открываем попап
  burgerMenu.close();
});

const popupRegister = new Popup('#popup-register');
popupRegister.setEventListeners(); // навешиваем слушатели

registerBtn.addEventListener('click', () => {
  popupRegister.open(); // открываем попап
});
