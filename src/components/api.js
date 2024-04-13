export function getCard() {
    //данные профиля
    const getUserData = () => {
      return fetch('https://mesto.nomoreparties.co/v1/wff-cohort-11/users/me', {
        headers: {
          authorization: 'd655b118-8b88-4edf-be5c-c170c9e072d0'
        }
      })
        .then((res) =>  res.json());
    }
    //выгрузка карточек
    const getCardsData = () => {
      return fetch('https://mesto.nomoreparties.co/v1/wff-cohort-11/cards', {
        headers: {
          authorization: 'd655b118-8b88-4edf-be5c-c170c9e072d0'
        }
      })
      .then ((res) => res.json())
    }
    //информация о карточках и профиле
    return Promise.all([getUserData(), getCardsData()])
    .then(([userData, cardsData]) => {
        return {userData, cardsData}
    })
    .catch (err => console.log(err));
};


export function sendUserData (userName, userAbout){
  return fetch('https://nomoreparties.co/v1/wff-cohort-11/users/me', {
    method: 'PATCH',
    headers: {
      authorization: 'd655b118-8b88-4edf-be5c-c170c9e072d0',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: userName,
      about: userAbout
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    }) 
    .catch((err) => {
      console.log(err);
    })
}

export function sendAvatar (avatarLink){
  return fetch('https://nomoreparties.co/v1/wff-cohort-11/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: 'd655b118-8b88-4edf-be5c-c170c9e072d0',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: avatarLink
    })
  })
  .then ((res) => {
    if (res.ok){
      return res.json();
    }
  })
  .catch((err) => {
      console.log(err);
  })
}

export function sendDataCard(cardName, cardLink) {
  return fetch('https://nomoreparties.co/v1/wff-cohort-11/cards', {
    method: 'POST',
    headers: {
      authorization: 'd655b118-8b88-4edf-be5c-c170c9e072d0',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: cardName,
      link: cardLink
    })
  })
  .then((res) => {
    if (res.ok){
      return res.json();
    }
  })
  .catch((err) => {
    console.log(err);
  })
}
export function like(cardId){
  return fetch('https://nomoreparties.co/v1/wff-cohort-11/cards/likes/'+cardId, {
  method: 'PUT',
  headers: {
    authorization: 'd655b118-8b88-4edf-be5c-c170c9e072d0'
  }})
  .then((res) => {
      return res.json();
    }
  )
}

export function deleteLike (cardId){
  return fetch('https://nomoreparties.co/v1/wff-cohort-11/cards/likes/'+cardId, {
  method: 'DELETE',
  headers: {
    authorization: 'd655b118-8b88-4edf-be5c-c170c9e072d0'
  }})
  .then ((res) => {
    return res.json();
  })
}


