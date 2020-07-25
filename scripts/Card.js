// import { popupToggle } from './index.js';

//Заготовки
const initialElements = [
	{
			name: 'Архыз',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
			name: 'Челябинская область',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
			name: 'Иваново',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
			name: 'Камчатка',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
			name: 'Холмогорский район',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
			name: 'Байкал',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];
//решить!
const elementsContainer = document.querySelector('.elements');
// import function popupToggle(popup);

class Card {
	constructor(data) {
		this._title = data.name;
		this._image = data.link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.element-template')
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

	generateCard() {
    this._element =  this._getTemplate();
    this._setEventListeners();

		this._element.querySelector('.element__image').src = this._image;
		this._element.querySelector('.element__title').textContent = this._title;

		return this._element;
	}

	_setEventListeners() {
		this._element.querySelector('.element__delete').addEventListener('click', () => {
			this._handleDeleteButton();
		});

		this._element.querySelector('.element__like').addEventListener('click', () => {
			this._handleLikeButton();
		});

		this._element.querySelector('.element__image').addEventListener('click', () => {
			this._handleImagePopup();
		});
	}

	_handleDeleteButton() {
    this._element.remove();
	}
	
	_handleLikeButton() {
		this._element.querySelector('.element__like').classList.toggle('element__like_active');
	}
	
	_handleImagePopup() {
		// this.document.querySelector('.popup_image').classList.toggle('popup_open');
		this.document.querySelector('.popup__img').src = this._image;
		this.document.querySelector('.popup__img-caption').textContent = this._title;
		document.querySelector('.popup_image') = popupImage;
		popupToggle(popupImage);
  }
}

export { initialElements, elementsContainer, Card };