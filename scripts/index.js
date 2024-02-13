// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const placesList = document.querySelector('.places__list');

// @todo: Функция удаления карточки

function deleteCard(item) {
    item.remove();
    
}

// @todo: Функция создания карточки

function creatCard(card, deletCard) {
    const itemCard = cardTemplate.querySelector('.card').cloneNode(true);

    itemCard.querySelector('.card__image').src = card.link;
    itemCard.querySelector('.card__image').alt = card.name;
    itemCard.querySelector('.card__title').textContent = card.name;

    const deleteButton = itemCard.querySelector('.card__delete-button');

    deleteButton.addEventListener("click", () => deleteCard(itemCard));

    return itemCard;
}

// @todo: Вывести карточки на страницу

initialCards.forEach((item) => {
    placesList.append(creatCard(item));
});