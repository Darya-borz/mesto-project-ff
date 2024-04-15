import { checkResponse } from "./utils";

const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-11',
  headers: {
    authorization: 'd655b118-8b88-4edf-be5c-c170c9e072d0',
    contentType: 'application/json',
  },
};

export function getCard() {
    //данные профиля
    const getUserData = () => {
      return fetch(config.baseUrl + '/users/me', {
        headers: {
          authorization: config.headers.authorization
        }
      })
      .then((res) =>  {
          if (res.ok) {
              return res.json();
          }
          return Promise.reject(`Ошибка ${res.status}`);
      });
    }
    //выгрузка карточек
    const getCardsData = () => {
      return fetch(config.baseUrl + '/cards', {
        headers: {
          authorization: config.headers.authorization
        }
      })
      .then((res) =>  {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      });
    }
    //информация о карточках и профиле
    return Promise.all([getUserData(), getCardsData()])
    .then(([userData, cardsData]) => {
        return {userData, cardsData}
    })
};


export function sendUserData (userName, userAbout){
  return fetch(config.baseUrl + '/users/me', {
    method: 'PATCH',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': config.headers.contentType
    },
    body: JSON.stringify({
      name: userName,
      about: userAbout
    })
  })
    .then(checkResponse) 
}

export function sendAvatar (avatarLink){
  return fetch(config.baseUrl + '/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': config.headers.contentType
    },
    body: JSON.stringify({
      avatar: avatarLink
    })
  })
  .then(checkResponse) 
}

export function sendDataCard(cardName, cardLink) {
  return fetch(config.baseUrl + '/cards', {
    method: 'POST',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': config.headers.contentType
    },
    body: JSON.stringify({
      name: cardName,
      link: cardLink
    })
  })
  .then(checkResponse) 
}
export function like(cardId){
  return fetch(config.baseUrl + '/cards/likes/'+cardId, {
  method: 'PUT',
  headers: {
    authorization: config.headers.authorization
  }})
  .then(checkResponse) 
}

export function deleteLike (cardId){
  return fetch(config.baseUrl + '/cards/likes/'+cardId, {
  method: 'DELETE',
  headers: {
    authorization: config.headers.authorization
  }})
  .then(checkResponse) 
}

export function deleteCards(card_id) {
  return fetch(config.baseUrl + '/cards/'+ card_id, {
    method: 'DELETE',
    headers: {
        authorization: config.headers.authorization,

    }});
}

