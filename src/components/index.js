
// @todo: DOM узлы
import '../../pages/index.css';
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupProfileAdd= document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const formElement = popupProfileEdit.querySelector('.popup__form');
const formElementAdd = popupProfileAdd.querySelector('.popup__form')
const nameInput = formElement.querySelector('.popup__input_type_name') 
const jobInput = formElement.querySelector('.popup__input_type_description')  
const currentName = document.querySelector('.profile__title');
const currentJob = document.querySelector('.profile__description');
const cardName=document.querySelector('.popup__input_type_card-name');
const cardLink = document.querySelector('.popup__input_type_url');

popupProfileAdd.classList.add('popup_is-animated');
popupProfileEdit.classList.add('popup_is-animated');
popupImage.classList.add('popup_is-animated');

// @todo: Вывести карточки на страницу



initialCards.forEach((item) => {
    placesList.append(creatCard(item, deleteCard, toggleLike, openPopupCard));
});

profileEditButton.addEventListener("click", () => {openPopupProfileEdit(popupProfileEdit);});
profileAddButton.addEventListener("click", () => {openPopupProfileAdd(popupProfileAdd);});

// он будет следить за событием “submit” - «отправка»

formElement.addEventListener('submit', handleFormSubmit); 
popupProfileAdd.addEventListener('submit', handleFormCard);


import { creatCard, deleteCard, toggleLike } from "./card.js";
import { openPopupCard, openPopupProfileEdit, handleFormSubmit, openPopupProfileAdd, handleFormCard } from "./modal.js";
import { initialCards } from './cards.js';
