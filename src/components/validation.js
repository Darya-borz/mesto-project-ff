const popupProfileEdit = document.querySelector('.popup_type_edit');
const profileForm = popupProfileEdit.querySelector('.popup__form');
const nameInput = profileForm.querySelector('.popup__input_type_name');
const formError = profileForm.querySelector(`.${nameInput.id}-error`); 

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
    
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

    if (!inputElement.validity.valid) {
      
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
};

const toggleButtonState = (inputList, buttonElement) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
          buttonElement.disabled = true;
      buttonElement.classList.add('popup__button_inactive');
    } else {
          buttonElement.disabled = false;
      buttonElement.classList.remove('popup__button_inactive');
    }
  }; 

  const hasInvalidInput = (inputList) => {

    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
}; 

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }; 

export const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
  
    formList.forEach((formElement) => {

      setEventListeners(formElement);
    });
};


  
export const clearValidation = (profileForm, validationConfig) => {
    const inputElements = Array.from(profileForm.querySelectorAll(validationConfig.inputSelector));
    inputElements.forEach((inputElement) => {
      inputElement.classList.remove(validationConfig.inputErrorClass);
    })
    const errorElements = Array.from(profileForm.querySelectorAll('.form__input-error'));
    errorElements.forEach((errorElement) => {
      errorElement.textContent = '';
      errorElement.classList.remove('form__input-error_active');
    })
    const formButton = profileForm.querySelector(validationConfig.submitButtonSelector);
    formButton.disabled = true;
    formButton.classList.add(validationConfig.inactiveButtonClass);
}