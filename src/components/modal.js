//@todo: функция открытия всех popup
function openPopup(item){
    item.classList.add("popup_is-opened");
    const popupCloseButton = item.querySelector('.popup__close');
    popupCloseButton.addEventListener("click", closePopup);
    document.addEventListener("keydown", handleEscape);
    item.addEventListener("click",closePopupOverlay);
    
}

function closePopupOverlay(evt){
    if (evt.target.classList.contains('popup_is-opened')){
        closePopup();
    }
}

function handleEscape(evt) {
    if (evt.key === 'Escape') {
        closePopup();
    }
  }

// закрытие всех popup
function closePopup(){
    const openedPopup = document.querySelector('.popup_is-opened');
    const popupCloseButton = openedPopup.querySelector('.popup__close');
    openedPopup.classList.remove("popup_is-opened");
    
    popupCloseButton.removeEventListener("click", closePopup);
    document.removeEventListener("keydown", handleEscape);
    openedPopup.removeEventListener("click",closePopupOverlay);
}
export {openPopup, closePopup};


