export function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
}

export function checkResponseUserCard (res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}