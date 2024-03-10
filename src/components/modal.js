import { creatCard, deleteCard, toggleLike } from "./card.js";
const placesList = document.querySelector('.places__list');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const formElement = popupProfileEdit.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name') 
const jobInput = formElement.querySelector('.popup__input_type_description')  
const currentName = document.querySelector('.profile__title');
const currentJob = document.querySelector('.profile__description');
const popupProfileAdd= document.querySelector('.popup_type_new-card');
const formElementAdd = popupProfileAdd.querySelector('.popup__form')
const cardName = formElementAdd.querySelector('.popup__input_type_card-name');
const cardLink = formElementAdd.querySelector('.popup__input_type_url');

//@todo: функция открытия всех popup
function Popup(item){
    item.classList.add("popup_is-opened");

    //закрытие по крестику
    const popupClose = item.querySelector('.popup__close');
    popupClose.addEventListener("click", () => closePopup(item));

    document.addEventListener("keydown", function closePopupEsc(evt){
        if (evt.key === 'Escape') {
            
            item.classList.remove("popup_is-opened");
        }
    })

    item.addEventListener("click", function(evt){
        if (evt.target === item){
            item.classList.remove("popup_is-opened");
        }
    })

   
    popupClose.removeEventListener('click', closePopup);
}

// закрытие всех popup
function closePopup(item){
    item.classList.remove("popup_is-opened");
}

//@todo: функция открытия popup картинки
export function openPopupCard(evt) {
    const popupImage = document.querySelector('.popup_type_image');
    Popup(popupImage);

    document.querySelector('.popup__image').src=evt.link;
    document.querySelector('.popup__image').alt=evt.name;
    document.querySelector('.popup__caption').textContent=evt.name;
    popupImage.style.backgroundColor = "rgba(0, 0, 0, .9)";
}

//@todo: функция открытия popup профиля
export function openPopupProfileEdit (item) {
    nameInput.value = currentName.textContent;
    jobInput.value = currentJob.textContent;
    Popup(item);
}
//@todo: обработка формы
export function handleFormSubmit(evt) {
    evt.preventDefault(); 
    currentName.textContent = nameInput.value;
    currentJob.textContent = jobInput.value;

    closePopup(popupProfileEdit);
}

export function openPopupProfileAdd(item){
    Popup(item);
}

export function handleFormCard (evt){
    evt.preventDefault(); 
    const cardData = {
        name: cardName.value,
        link: cardLink.value,
    };
    placesList.prepend(creatCard(cardData, deleteCard, toggleLike, openPopupCard));
    closePopup(popupProfileAdd);
    formElementAdd.reset();
}


