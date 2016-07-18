import 'whatwg-fetch';

export class PostService {
  fetchAll() {
    return fetch(`${process.env.BASE_URL}/posts`)
      .then((response) => {
        return response.json();
      })
  }

  create(params) {
    return fetch(`${process.env.BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then((response) => {
      return response.json();
    });
  }
}
