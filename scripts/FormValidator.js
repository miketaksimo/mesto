export function Validator() {
  
  // Валидация
  // Показ ошибки
  const showInputError = ({formElement, inputElement, errorMessage, inputErrorClass, ...rest}) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
  };

  // Закрытие ошибки
  const hideInputError = ({formElement, inputElement, inputErrorClass, ...rest}) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
  };

  // Проверка на ошибки
  const checkInputValidity = ({formElement, inputElement, ...rest}) => {
    if (!inputElement.validity.valid) {
      const errorMessage = inputElement.validationMessage;
      showInputError({formElement, inputElement, errorMessage, ...rest});
    } else {
      hideInputError({formElement, inputElement, ...rest});
    }
  };

  const setEventListeners = ({formElement, inputSelector, submitButtonSelector, ...rest}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    toggleButtonState({inputList, buttonElement, ...rest});

    inputList.forEach(function(inputElement) {
      inputElement.addEventListener('input', function() {
          checkInputValidity({formElement, inputElement, ...rest});
          toggleButtonState({inputList, buttonElement, ...rest});
        })
    })
  }

  function enableValidation({formSelector, ...rest}) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach(function(formElement) {
      formElement.addEventListener('submit', function(evt) {
        evt.preventDefault();
      })
        setEventListeners({formElement, ...rest});
    })
  }

  enableValidation({
    formSelector: '.popup__forms',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactive',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error'
  });

  // Включение/отключение кнопки
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  function toggleButtonState({inputList, buttonElement, inactiveButtonClass, ...rest}) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }
}