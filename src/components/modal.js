const popupProfileEdit = document.querySelector('.popup_type_edit');
const profileForm = popupProfileEdit.querySelector('.popup__form');
const nameInput = profileForm.querySelector('.popup__input_type_name') 
const jobInput = profileForm.querySelector('.popup__input_type_description')  
const currentName = document.querySelector('.profile__title');
const currentJob = document.querySelector('.profile__description');
const popupImage = document.querySelector('.popup_type_image');



//@todo: функция открытия всех popup
function openPopup(item){
    item.classList.add("popup_is-opened");
    const popupCloseButton = item.querySelector('.popup__close');

    popupCloseButton.addEventListener("click", closePopup);
    document.addEventListener("keydown", handleEscape);
    item.addEventListener("click",closePopupOverlay);
    
}

function closePopupOverlay(evt){
    const openedPopup = document.querySelector('.popup_is-opened');
    if (evt.target === openedPopup){
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

//@todo: функция открытия popup картинки
export function openPopupCard(evt) {
    
    openPopup(popupImage);
    const imagePopup = document.querySelector('.popup__image');
    const popupImageName = document.querySelector('.popup__caption');
    imagePopup.src=evt.link;
    imagePopup.alt=evt.name;
    popupImageName.textContent=evt.name;

    //popupImage.style.backgroundColor = "rgba(0, 0, 0, .9)";
}

//@todo: функция открытия popup профиля
export function openPopupProfileEdit (item) {
    nameInput.value = currentName.textContent;
    jobInput.value = currentJob.textContent;
    openPopup(item);
}
//@todo: обработка формы


export {openPopup, closePopup};


