const customFetch = (url, headers) =>
  fetch(url, headers).then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)));

export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;

    this._headers = headers;
  }

  getInitialCards() {
    return customFetch(`${this._baseUrl}/cards`, { headers: this._headers });
  }

  getUserInfo() {
    return customFetch(`${this._baseUrl}/users/me`, { headers: this._headers });
  }

  getUserImg() {
    return customFetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
    });
  }
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",

  headers: {
    authorization: "0ea43d66-a890-4252-aeb5-5f974b853c02",

    "Content-Type": "application/json",
  },
});
