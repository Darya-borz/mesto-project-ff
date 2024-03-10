const cardTemplate = document.querySelector('#card-template').content;
// @todo: Функция создания карточки
export function creatCard(card, deleteCard, toggleLike, openPopupCard) {
    const itemCard = cardTemplate.querySelector('.card').cloneNode(true);

    itemCard.querySelector('.card__image').src = card.link;
    itemCard.querySelector('.card__image').alt = card.name;
    itemCard.querySelector('.card__title').textContent = card.name;

    const deleteButton = itemCard.querySelector('.card__delete-button');
    deleteButton.addEventListener("click", () => deleteCard(itemCard));

    const likebutton = itemCard.querySelector('.card__like-button');
    likebutton.addEventListener ("click", () => toggleLike(likebutton));

    const cardImage = itemCard.querySelector('.card__image');
    cardImage.addEventListener("click", () => {openPopupCard(card);})

    return itemCard;
}

//@todo: функция лайка карточки
function toggleLike(evt) {
    evt.classList.toggle('card__like-button_is-active');
}

//@todo: Функция удаления карточки
function deleteCard(item) {
    item.remove(); 
}
import { openPopupCard } from "./modal.js";
export {toggleLike, deleteCard};