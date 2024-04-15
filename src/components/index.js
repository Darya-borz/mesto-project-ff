
// @todo: DOM узлы
import '../pages/index.css';
import { creatCard, deleteCard, toggleLike } from "./card.js";
import { openPopup, closePopup } from "./modal.js";
import { enableValidation, clearValidation } from './validation.js';
import { getCard, sendUserData, sendDataCard, sendAvatar } from './api.js';
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupProfileAdd = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const profileForm = popupProfileEdit.querySelector('.popup__form');
const creatNewCardForm = popupProfileAdd.querySelector('.popup__form');
const nameInput = profileForm.querySelector('.popup__input_type_name');
const jobInput = profileForm.querySelector('.popup__input_type_description');
const currentName = document.querySelector('.profile__title');
const currentJob = document.querySelector('.profile__description');
const cardName = document.querySelector('.popup__input_type_card-name');
const cardLink = document.querySelector('.popup__input_type_url');
const imagePopup = document.querySelector('.popup__image');
const popupImageName = document.querySelector('.popup__caption');
const profileAvatar = document.querySelector('.profile__image');
popupProfileAdd.classList.add('popup_is-animated');
popupProfileEdit.classList.add('popup_is-animated');
popupImage.classList.add('popup_is-animated');
const popupAvatarButton = document.querySelector('.profile__image');
const buttonPfofileForm = profileForm.querySelector('.popup__button');
const buttonCardForm = creatNewCardForm.querySelector('.popup__button');
const popupAvatar = document.querySelector('.popup_type_foto');
const buttonAvatarForm = popupAvatar.querySelector('.popup__button');
const avatarForm = popupAvatar.querySelector('.popup__form');
const avatarLinkInput = popupAvatar.querySelector('.popup__input_avatar');
const profileImage = profileAvatar.querySelector('.profile__image');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'popup__error_visible',
  inputErrorActive: 'form__input-error_active',
  formImputError :'.form__input-error'
};
let userId = '';


enableValidation(validationConfig);

function handleProfileFormSubmit(evt) {
  buttonPfofileForm.textContent = "Сохраниение..."
  evt.preventDefault();
  sendUserData(nameInput.value, jobInput.value)
  .then((data) => {
    currentName.textContent = data.name;
    currentJob.textContent = data.about;
    closePopup(popupProfileEdit);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally ((evt) => {
    buttonPfofileForm.textContent = "Сохранить";
  })
}

function handleFormCard(evt) {
  buttonCardForm.textContent = "Сохраниение..."
  evt.preventDefault();
  sendDataCard(cardName.value,cardLink.value)
  .then((data) => {
    placesList.prepend(creatCard(data, deleteCard, toggleLike, openPopupCard, userId));
    closePopup(popupProfileAdd);
    creatNewCardForm.reset();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally ((evt) => {
    buttonCardForm.textContent = "Сохранить";
  })
}

function handleFormAvatar(evt) {
  buttonAvatarForm.textContent = "Сохраниение...";
  evt.preventDefault();
  sendAvatar(avatarLinkInput.value)
  .then ((data) => {
    profileImage.src = data.avatar;
    closePopup(popupAvatar);
    avatarForm.reset();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally ((evt) => {
    buttonAvatarForm.textContent = "Сохранить";
  })
}

function openPopupCard(evt) {
  openPopup(popupImage);
  imagePopup.src = evt.link;
  imagePopup.alt = evt.name;
  popupImageName.textContent = evt.name;
}

function openPopupProfileEdit(item) {
  nameInput.value = currentName.textContent;
  jobInput.value = currentJob.textContent;
  clearValidation(profileForm, validationConfig);
  openPopup(item);
}

function openPopupInputForm (popup, form){
  clearValidation(form, validationConfig);
  openPopup(popup);
}

popupAvatarButton.addEventListener("click", () => {openPopupInputForm(popupAvatar, avatarForm)});
profileEditButton.addEventListener("click", () => { openPopupProfileEdit(popupProfileEdit); });
profileAddButton.addEventListener("click", () => { openPopupInputForm(popupProfileAdd, creatNewCardForm); });

// он будет следить за событием “submit” - «отправка»

profileForm.addEventListener('submit', handleProfileFormSubmit);
creatNewCardForm.addEventListener('submit', handleFormCard);
avatarForm.addEventListener('submit', handleFormAvatar);

// запрос для заполнения профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const initantalCards = () => {
  getCard()
  .then (({userData, cardsData}) => {
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    //profileImage.style.backgroudImage = `url(${userData.avatar})`;
    profileImage.src = userData.avatar
    userId = userData._id;
    cardsData.forEach((card) => {
      placesList.append(creatCard(card, deleteCard, toggleLike, openPopupCard, userId))
    });
  })
  .catch(err => console.log(err));
}
initantalCards();

