
// @todo: DOM узлы
import '../pages/index.css';
import { creatCard, deleteCard, toggleLike } from "./card.js";
import { openPopupCard, openPopupProfileEdit, openPopup, closePopup } from "./modal.js";
import { initialCards } from './cards.js';
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupProfileAdd= document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const profileForm = popupProfileEdit.querySelector('.popup__form');
const creatNewCardForm = popupProfileAdd.querySelector('.popup__form')
const nameInput = profileForm.querySelector('.popup__input_type_name') 
const jobInput = profileForm.querySelector('.popup__input_type_description')  
const currentName = document.querySelector('.profile__title');
const currentJob = document.querySelector('.profile__description');
const cardName=document.querySelector('.popup__input_type_card-name');
const cardLink = document.querySelector('.popup__input_type_url');

popupProfileAdd.classList.add('popup_is-animated');
popupProfileEdit.classList.add('popup_is-animated');
popupImage.classList.add('popup_is-animated');


function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 
    currentName.textContent = nameInput.value;
    currentJob.textContent = jobInput.value;

    closePopup(popupProfileEdit);
}

function handleFormCard (evt){
    evt.preventDefault(); 
    const cardData = {
        name: cardName.value,
        link: cardLink.value,
    };
    placesList.prepend(creatCard(cardData, deleteCard, toggleLike, openPopupCard));
    closePopup(popupProfileAdd);
    creatNewCardForm.reset();
}

// @todo: Вывести карточки на страницу



initialCards.forEach((item) => {
    placesList.append(creatCard(item, deleteCard, toggleLike));
});

profileEditButton.addEventListener("click", () => {openPopupProfileEdit(popupProfileEdit);});
profileAddButton.addEventListener("click", () => {openPopup(popupProfileAdd);});

// он будет следить за событием “submit” - «отправка»

profileForm.addEventListener('submit', handleProfileFormSubmit); 
creatNewCardForm.addEventListener('submit', handleFormCard);



