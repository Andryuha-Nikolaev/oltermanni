import './index.html';

import './js/modules/slider';

import './scss/index.scss';

import './js/modules/burger';
import Popup from './js/components/Popup';

// кнопка войти
const loginBtn = document.getElementById('login-btn');
// кнопка зарегистрироваться
const registerBtn = document.getElementById('register-btn');
// попап
const popup = document.querySelector('.popup');
// кнопка закрытия попапа
const closeBtn = document.querySelector('.popup__close-button');
// оверлей попапа
const overlay = document.querySelector('.popup__overlay');

// //функция открытия попапа
// const openPopup = () => {
//   // closeBurger();
//   popup.classList.add('popup_opened'); //добавляем класс открытого попапа
//   document.addEventListener('keydown', handleEscClose); //ставим слушатель на нажатие esc
// };

// //функция закрытия попапа
// const closePopup = () => {
//   popup.classList.remove('popup_opened'); //убираем класс открытого попапа
//   document.removeEventListener('keydown', handleEscClose); //убираем слушатель на нажатие esc
// };

// //функция закрытия попапов на esc
// const handleEscClose = (evt) => {
//   if (evt.key === 'Escape') {
//     //если действие происходит на кнопке esc
//     closePopup(); //то вызвать функцию закрытия попапа
//   }
// };

// // слушатель клика по кнопке войти
// loginBtn.addEventListener('click', () => {
//   openPopup();
// });

// // слушатель клика по кнопке зарегистрироваться
// registerBtn.addEventListener('click', () => {
//   openPopup();
// });

// // слушатель клика по кнопке закрытия попапа
// closeBtn.addEventListener('click', () => {
//   closePopup();
// });

// // слушатель клика по оверлею
// overlay.addEventListener('click', () => {
//   closePopup();
// });

registerBtn.addEventListener('click', () => {
  popupRegister.open(); // открываем попап
});

const popupRegister = new Popup('#popup-register');
popupRegister.setEventListeners(); // навешиваем слушатели
