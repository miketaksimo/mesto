//Изменение данных
const popupEdit = document.querySelector('.popup_edit');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupEditCloseButton = document.querySelector('.popup__close_edit');
const popupEditForms = document.querySelector('.popup__forms_edit');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const popupInputEditname = document.querySelector('.popup__input_edit_name')
const popupInputEditjob = document.querySelector('.popup__input_edit_job')

//Добавление картинок
const popupAdd = document.querySelector('.popup_add');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = document.querySelector('.popup__close_add');
const popupAddForms = document.querySelector('.popup__forms_add');
const popupInputAddName = document.querySelector('.popup__input_add_name');
const popupInputAddUrl = document.querySelector('.popup__input_add_url');
const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template');

//Попап картинки
const popupImage = document.querySelector('.popup_image');
const popupImageCloseButton = document.querySelector('.popup__close_image');

function popupToggle(popup) {
  popup.classList.toggle('popup_open');
}

//Попап изменения данных
function handlerEditPopup() {   
  popupInputElName.value = profileName.textContent;
  popupInputElJob.value = profileJob.textContent;
}

function formsEditSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputEditname.value;
  profileJob.textContent = popupInputEditjob.value;
  popupToggle(popupEdit);
}

//Попап добавления картинок
function handlerAddPopup() {
  popupInputAddName.value  = '';
  popupInputAddUrl.value = '';
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

    popupToggle(popupAdd);
}

//Добавление слушителя на клики
popupEditOpenButton.addEventListener('click', function() {
  handlerEditPopup;
  formsEditSubmitHandler;
  popupToggle(popupEdit);
});
popupEditCloseButton.addEventListener('click', function() {
  popupToggle(popupEdit);
});
popupEditForms.addEventListener('submit', formsEditSubmitHandler);
popupAddOpenButton.addEventListener('click', function() {
  popupToggle(popupAdd);
  handlerAddPopup;
});
popupAddCloseButton.addEventListener('click', function() {
  popupToggle(popupAdd);
});
popupAddForms.addEventListener('submit', formsAddSubmitHandler);