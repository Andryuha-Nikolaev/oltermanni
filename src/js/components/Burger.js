export default class Burger {
  constructor(burgerSelector, burgerBtnSelector) {
    this._burger = document.querySelector(burgerSelector);
    this._button = document.querySelector(burgerBtnSelector);
  }

  open() {
    this._burger.classList.add('header__burger-menu_opened');
    this._button.classList.add('header__burger-btn_opened');
  }

  close() {
    this._burger.classList.remove('header__burger-menu_opened');
    this._button.classList.remove('header__burger-btn_opened');
  }
}
