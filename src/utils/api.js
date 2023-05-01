class Api {

  constructor(basePath, token) {
    this._basePath = basePath;
    this._token = token;
  }

  _getHeaders() {
    return {
      "Content-Type": "application/json",
      authorization: this._token,
    };
  }

  _getJsonPromise(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(
      `${this._basePath}/cards`,
      {
        headers: this._getHeaders()
      }
    )
      .then(this._getJsonPromise);
  }

  postCard(item) {
    return fetch(
      `${this._basePath}/cards`,
      {
        method: 'POST',
        headers: this._getHeaders(),
        body: JSON.stringify(item)
      }
    )
      .then(this._getJsonPromise);
  }

  getCurrentUser() {
    return fetch(
      `${this._basePath}/users/me`,
      {
        headers: this._getHeaders(),
      }
    )
      .then(this._getJsonPromise);
  }

  deleteCardFromServer(id) {
    return fetch(
      `${this._basePath}/cards/${id}`,
      {
        method: 'DELETE',
        headers: this._getHeaders(),
      })
      .then(this._getJsonPromise);
  }

  patchUserInfo({ name, about }) {
    return fetch(
      `${this._basePath}/users/me`,
      {
        method: 'PATCH',
        headers: this._getHeaders(),
        body: JSON.stringify({
          name: name,
          about: about
        })
      },
    )
      .then(this._getJsonPromise);
  }

  likeCard(id, isLiked) {
    let method;
    if (!isLiked) {
      method = 'PUT';
    } else {
      method = 'DELETE';
    }
    return fetch(
      `${this._basePath}/cards/${id}/likes`,
      {
        method: method,
        headers: this._getHeaders(),
      },
    )
      .then(this._getJsonPromise);
  }

  updateAvatar({ link }) {
    return fetch(
      `${this._basePath}/users/me/avatar`,
      {
        method: 'PATCH',
        headers: this._getHeaders(),
        body: JSON.stringify({
          avatar: link,
        })
      },
    )
      .then(this._getJsonPromise);
  }

}

const api = new Api(
  'https://mesto.nomoreparties.co/v1/cohort-61',
  '77f77b05-b295-4c6a-bc0b-34525fb16730'
);

export default api;