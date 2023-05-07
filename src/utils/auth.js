// export const basePath = 'https://auth.nomoreparties.co';
export const basePath = 'http://104.131.160.75:3000';

function getJsonPromise(res) {
  // console.log("getJsonPromise called");
  if (res.ok) {
    // console.log("response ok");
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (password, email) => {
  // console.log("auth.register called");
  // console.log(password);
  // console.log(email);
  // console.log(JSON.stringify({ password, email }));
  return fetch(`${basePath}/signup`, {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then(getJsonPromise);
  // .then((res) => console.log(res));
  // .then((res) => {
  //   return res;
  // })
  // .catch((err) => console.log(err));
};

export const authorize = (password, email) => {
  // console.log("auth.authorize called");
  // console.log(password);
  // console.log(email);
  // console.log(JSON.stringify({ password, email }));
  return fetch(`${basePath}/signin`, {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then(getJsonPromise)
    .then((jsonResponse) => {
      // console.log(jsonResponse);
      // console.log(jsonResponse.token);
      if (jsonResponse.token) {
        localStorage.setItem('jwt', jsonResponse.token);
        return jsonResponse;
        // } else {
        //   return;
      }
    })
    ;
  // .then((res) => console.log(res));
  // .then((res) => {
  //   return res;
  // })
  // .catch((err) => console.log(err));
};

export function checkToken(jwt) {
  return fetch(`${basePath}/users/me`, {
    method: 'GET',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${jwt}`
    }
  })
    .then(getJsonPromise);
}
