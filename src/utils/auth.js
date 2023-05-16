export const basePath = 'https://auth.nomoreparties.co';
// ! alternative server
// export const basePath = 'http://104.131.160.75:3000';

function getJsonPromise(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (password, email) => {
  return fetch(`${basePath}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then(getJsonPromise);
};

export const authorize = (password, email) => {
  return fetch(`${basePath}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then(getJsonPromise)
    .then((jsonResponse) => {
      if (jsonResponse.token) {
        localStorage.setItem('jwt', jsonResponse.token);
        return jsonResponse;
      }
    });
};

export function checkToken(jwt) {
  return fetch(`${basePath}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${jwt}`
    }
  })
    .then(getJsonPromise);
}
