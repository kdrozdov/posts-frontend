export const SET_POSTS = 'SET_POSTS'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'

export function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts
  }
}

export function fetchPosts() {
  return function (dispatch) {
    return fetch(`${process.env.BASE_URL}/posts`)
      .then(response => response.json())
      .then(json =>
        dispatch(setPosts(json.data))
      )
  }
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

export function createPost(params) {
  return function (dispatch) {
    return fetch(`${process.env.BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({post: params})
    })
    .then(response => response.json())
    .then(json =>
      dispatch(addPost(json.data))
    )
  }
}

export function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId
  }
}

export function destroyPost(postId) {
  return function (dispatch) {
    return fetch(`${process.env.BASE_URL}/posts/${postId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
    .then(() =>
      dispatch(removePost(postId))
    )
  }
}

