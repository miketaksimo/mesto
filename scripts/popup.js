const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.profile__edit-button')
const popupCloseButton = popup.querySelector('.popup__close')
const formElement = document.querySelector('.popup__forms')
let profileName = document.querySelector('.profile__title')
let profileJob = document.querySelector('.profile__subtitle')
let nameInput = formElement.querySelector('.popup__input_type_name')
let jobInput = formElement.querySelector('.popup__input_type_job')

const popupToggle = function() {
    popup.classList.toggle('popup_open')
}

popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler)