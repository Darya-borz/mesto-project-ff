import { like, deleteLike } from "./api";
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
export function creatCard(card, deleteCard, toggleLike, openPopupCard, userId) {
    const itemCard = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = itemCard.querySelector('.card__image');
    const cardImageTitle = itemCard.querySelector('.card__title');
    const countLike = itemCard.querySelector('.count_like');
    const likebutton = itemCard.querySelector('.card__like-button');
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardImageTitle.textContent = card.name;
    const isLiked = card.likes.some((like) => like._id === userId);
    if (isLiked) {
        likebutton.classList.add("card__like-button_is-active");
    };
    countLike.textContent = card.likes.length;
    const deleteButton = itemCard.querySelector('.card__delete-button');
    if (card.owner._id === userId) {
        deleteButton.addEventListener("click", () => deleteCard(itemCard, card._id));
    } else{
        deleteButton.remove();
    }
    
    likebutton.addEventListener("click", () => toggleLike(likebutton, card._id, countLike));

    cardImage.addEventListener("click", () => {openPopupCard(card);})
    return itemCard;
}

//@todo: функция лайка карточки
function toggleLike(likebutton, cardId, countLike) {
    const isLiked = likebutton.classList.contains("card__like-button_is-active");
    if (!isLiked) {
        like(cardId)
        .then((data) => {
            countLike.textContent = data.likes.length;
            likebutton.classList.toggle('card__like-button_is-active');
        })
    }
    else {
        deleteLike(cardId)
        .then((data) => {
            countLike.textContent = data.likes.length;
            likebutton.classList.toggle('card__like-button_is-active');
        })
        };
    }
    


//@todo: Функция удаления карточки
function deleteCard(item, card_id) {
    item.remove(); 
    fetch('https://nomoreparties.co/v1/wff-cohort-11/cards/'+ card_id, {
    method: 'DELETE',
    headers: {
        authorization: 'd655b118-8b88-4edf-be5c-c170c9e072d0',

    }});
    
}

export {toggleLike, deleteCard};