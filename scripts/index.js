import  { Validator } from './FormValidator.js';
Validator();
import { initialElements, elementsContainer, Card } from './Card.js';

//Изменение данных
const popupEdit = document.querySelector('.popup_edit');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupEditCloseButton = document.querySelector('.popup__close_edit');
const popupEditForms = document.querySelector('.popup__forms_edit');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const popupInputEditName = document.querySelector('.popup__input_edit_name');
const popupInputEditJob = document.querySelector('.popup__input_edit_job');

//Добавление картинок
const popupAdd = document.querySelector('.popup_add');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = document.querySelector('.popup__close_add');
const popupAddForms = document.querySelector('.popup__forms_add');
const popupInputAddName = document.querySelector('.popup__input_add_name');
const popupInputAddUrl = document.querySelector('.popup__input_add_url');
// const elementsContainer = document.querySelector('.elements');
// const elementTemplate = document.querySelector('.element-template');

//Попап картинки
// const popupImage = document.querySelector('.popup_image');
const popupImageCloseButton = document.querySelector('.popup__close_image');
// const popupImg = document.querySelector('.popup__img');
// const popupImgCaption = document.querySelector('.popup__img-caption');

export function popupToggle(popup) {
  popup.classList.toggle('popup_open');

  if (popup.classList.contains('popup_open')) {
    document.addEventListener('keydown', popupCloseEsc);
  } else {
    document.removeEventListener('keydown', popupCloseEsc);
  }
}

//Попап изменения данных
function handlerEditPopup() {   
  popupInputEditName.value = profileName.textContent;
  popupInputEditJob.value = profileJob.textContent;
}

function formsEditSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputEditName.value;
  profileJob.textContent = popupInputEditJob.value;
  popupToggle(popupEdit);
}


function handlerAddPopup() {
  popupInputAddName.value  = '';
  popupInputAddUrl.value = '';

  // const inputList = Array.from(popupAdd.querySelectorAll('.popup__input'));
  // const buttonElement = popupAdd.querySelector('.popup__save');
  // const inactiveButtonClass = 'popup__save_inactive';
  // toggleButtonState({inputList, buttonElement, inactiveButtonClass});
}

// Попап просмотра картинки
// function handlerImagePopup(item) {
//   popupImg.src = item.link; 
//   popupImgCaption.textContent = item.name;
//   popupToggle(popupImage);
// }

// function addElement(item) {
//     const elementPhoto = element.querySelector('.element__image');
//     elementPhoto.addEventListener('click', function() {
//         handlerImagePopup(item);
//     });
// }

//Добавление элементов
function makeElement(item) {
	const card = new Card(item);
  const cardElement = card.generateCard();
  elementsContainer.prepend(cardElement);
}

initialElements.forEach((item) => {
  const card = new Card(item);
  const cardElement = card.generateCard();
  elementsContainer.prepend(cardElement);
});

function formsAddSubmitHandler(evt) {
    evt.preventDefault();

    const item = {
        name: popupInputAddName.value, 
				link: popupInputAddUrl.value
    }

    makeElement(item);

    popupToggle(popupAdd);
}

//Закрытие попапа через Esc и кликом на оверлей
function popupCloseEsc(evt) {
  const popup = document.querySelector('.popup_open');
  if (popup !== null && evt.code === 'Escape') {
      popupToggle(popup);
  }
}

function popupCloseOverlay(evt) {
  const popup = document.querySelector('.popup_open')
  if (evt.target !== evt.currentTarget) {
      return;
  } 
  popupToggle(popup);
}

//Добавление слушителя на клики
popupEditOpenButton.addEventListener('click', function() {
  handlerEditPopup();
  popupToggle(popupEdit);
});
popupEditCloseButton.addEventListener('click', function() {
  popupToggle(popupEdit);
});
popupEditForms.addEventListener('submit', formsEditSubmitHandler);
popupAddOpenButton.addEventListener('click', function() {
  handlerAddPopup();
  popupToggle(popupAdd);
});
popupAddCloseButton.addEventListener('click', function() {
  popupToggle(popupAdd);
});
popupAddForms.addEventListener('submit', formsAddSubmitHandler);

popupImageCloseButton.addEventListener('click', function() {
  popupToggle(popupImage);
});

document.querySelectorAll('.popup').forEach(function(popup) {
  popup.addEventListener('click', popupCloseOverlay);
})

// export { function popupToggle(popup) };