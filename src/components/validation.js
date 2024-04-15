const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.inputErrorActive);
    
};

const hideInputError = (formElement, inputElement, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.classList.remove(validationConfig.inputErrorActive);
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement, validationConfig) => {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

    if (!inputElement.validity.valid) {
      
      showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
    } else {
      hideInputError(formElement, inputElement, validationConfig);
    }
};

const toggleButtonState = (inputList, buttonElement, validationConfig) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
          buttonElement.disabled = true;
      buttonElement.classList.add(validationConfig.inactiveButtonClass);
    } else {
          buttonElement.disabled = false;
      buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    }
  }; 

  const hasInvalidInput = (inputList) => {

    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
}; 

const setEventListeners = (formElement, validationConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, validationConfig);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement, validationConfig);
        toggleButtonState(inputList, buttonElement, validationConfig);
      });
    });
  }; 

export const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  
    formList.forEach((formElement) => {

      setEventListeners(formElement, validationConfig);
    });
};


  
export const clearValidation = (profileForm, validationConfig) => {
    const inputElements = Array.from(profileForm.querySelectorAll(validationConfig.inputSelector));
    inputElements.forEach((inputElement) => {
      inputElement.classList.remove(validationConfig.inputErrorClass);
    })
    const errorElements = Array.from(profileForm.querySelectorAll(validationConfig.formImputError));
    errorElements.forEach((errorElement) => {
      errorElement.textContent = '';
      errorElement.classList.remove(validationConfig.inputErrorActive);
    })
    const formButton = profileForm.querySelector(validationConfig.submitButtonSelector);
    formButton.disabled = true;
    formButton.classList.add(validationConfig.inactiveButtonClass);
}