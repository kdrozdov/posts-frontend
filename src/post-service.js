import 'whatwg-fetch';

export class PostService {
  fetchAll() {
    return fetch('http://lvh.me:3000/api/posts')
      .then((response) => {
        return response.json()
      })
  }
}
