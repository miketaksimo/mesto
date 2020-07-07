//Изменение данных
const popupEdit = document.querySelector('.popup_edit');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupEditCloseButton = document.querySelector('.popup__close_edit');
const popupEditForms = document.querySelector('.popup__forms_edit');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let popupInputEditname = document.querySelector('.popup__input_edit_name')
let popupInputEditjob = document.querySelector('.popup__input_edit_job')

//Добавление картинок
const popupAdd = document.querySelector('.popup_add');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = document.querySelector('.popup__close_add');
const popupAddForms = document.querySelector('.popup__forms_add');
let popupInputAddName = document.querySelector('.popup__input_add_name');
let popupInputAddUrl = document.querySelector('.popup__input_add_url');
const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template');

//Попап картинки
const popupImage = document.querySelector('.popup_image');
const popupImageCloseButton = document.querySelector('.popup__close_image');

//Добавление слушителя на клики
popupEditOpenButton.addEventListener('click', handlerEditPopup);
popupEditCloseButton.addEventListener('click', handlerEditPopup);
popupEditForms.addEventListener('submit', formEditSubmitHandler);
popupAddOpenButton.addEventListener('click', handlerAddPopup);
popupAddCloseButton.addEventListener('click', handlerAddPopup);
popupAddForms.addEventListener('submit', formsAddSubmitHandler);

function popupToggle(popup) {
  popup.classList.toggle('popup_open');
}
//Попап изменения данных
function handlerEditPopup() {
  if (!popupEdit.classList.contains('popup_open')) {    
    popupInputEditname.value = profileName.textContent;
    popupInputEditjob.value = profileJob.textContent;
  }
  popupToggle(popupEdit);
}

function formEditSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputEditname.value;
  profileJob.textContent = popupInputEditjob.value;
  handlerEditPopup();
}

//Попап добавления картинок
function handlerAddPopup() {
  if (!popupAdd.classList.contains('popup_open')) {    
    popupInputAddName.value  = '';
    popupInputAddUrl.value = '';
  }
  popupToggle(popupAdd);
}

//Попап просмотра картинки
function handlerImagePopup(item) {
  document.querySelector('.popup__img').src = item.link; 
  document.querySelector('.popup__img-caption').textContent = item.name;
  popupToggle(popupImage);
}

popupImageCloseButton.addEventListener('click', function() {
    popupToggle(popupImage);
});

//Лайки
function handlerLikeButton(evt) {
    const likeButton = evt.target.closest('.element__like');
    likeButton.classList.toggle('element__like_active');
}

//Удаление элементов
function handlerDeleteButton(evt) {
    const element = evt.target.closest('.element');
    element.remove();
}

//Добавление элементов
function addElement(item) {
    const element = elementTemplate.content.cloneNode(true);
    element.querySelector('.element__image').src = item.link; 
    element.querySelector('.element__title').textContent = item.name; 

    const likeButton = element.querySelector('.element__like');
    likeButton.addEventListener('click', handlerLikeButton);

    const deleteButton = element.querySelector('.element__delete');
    deleteButton.addEventListener('click', handlerDeleteButton); 

    const elementPhoto = element.querySelector('.element__image');
    elementPhoto.addEventListener('click', function() {
        handlerImagePopup(item);
    });

    return element
}

function makeElement(item) {
    const element = addElement(item);
    elementsContainer.prepend(element);
}

function formsAddSubmitHandler(evt) {
    evt.preventDefault();

    const item = {
        name: popupInputAddName.value, 
				link: popupInputAddUrl.value
    }

    makeElement(item);

    handlerAddPopup();
}

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

initialElements.forEach(makeElement);