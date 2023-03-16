class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._title = data.title;
    console.log(templateSelector);
  }

  //   Чтобы получить нужную разметку, добавьте классу Card метод _getTemplate, который:
  // найдёт template-элемент с классом horizontal-card,
  // извлечёт его содержимое,
  // в содержимом найдёт элемент с классом card,
  // клонирует его,
  // вернёт клонированный элемент.
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    // this._cardImage = this._element.querySelector('.elements__image'); //изображение карточки
    this._cardTitle = this._element.querySelector('.card__title'); //заголовок карточки
    // this._cardImage.src = this._image;
    // this._cardImage.alt = this._title;
    this._cardTitle.textContent = this._title;

    return this._element;
  }
}

export default Card;
