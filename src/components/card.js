const cardTemplate = document.querySelector('#card-template').content;
import { openPopupCard } from "./modal.js";
// @todo: Функция создания карточки
export function creatCard(card, deleteCard, toggleLike) {
    const itemCard = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = itemCard.querySelector('.card__image');
    const cardImageTitle = itemCard.querySelector('.card__title');
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardImageTitle.textContent = card.name;

    const deleteButton = itemCard.querySelector('.card__delete-button');
    deleteButton.addEventListener("click", () => deleteCard(itemCard));

    const likebutton = itemCard.querySelector('.card__like-button');
    likebutton.addEventListener ("click", () => toggleLike(likebutton));

    
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

export {toggleLike, deleteCard};