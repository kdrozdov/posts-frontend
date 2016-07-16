import 'whatwg-fetch';
import {baseUrl} from './config/fetch';

export class PostService {
  fetchAll() {
    return fetch(`${baseUrl}/posts`)
      .then((response) => {
        return response.json();
      })
  }

  create(params) {
    return fetch(`${baseUrl}/posts`, {
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
