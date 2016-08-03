import { parseJSON } from '../utils';
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function fetchPosts() {
  return function (dispatch) {
    return fetch(`${process.env.BASE_URL}/posts`)
      .then(parseJSON)
      .then(json =>
        dispatch(receivePosts(json.data))
      )
  }
}

export function receivePost(post) {
  return {
    type: RECEIVE_POST,
    post
  }
}

export function fetchPost(postId) {
  return function (dispatch) {
    return fetch(`${process.env.BASE_URL}/posts/${postId}`)
    .then(parseJSON)
    .then(json =>
      dispatch(receivePost(json.data.attributes))
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
  return function (dispatch, getState) {
    let state = getState();
    return fetch(`${process.env.BASE_URL}/posts`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.auth.token}`
      },
      body: JSON.stringify({post: params})
    })
    .then(parseJSON)
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
  return function (dispatch, getState) {
    let state = getState();
    return fetch(`${process.env.BASE_URL}/posts/${postId}`, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.auth.token}`
      },
      method: 'DELETE'
    })
    .then(() =>
      dispatch(removePost(postId))
    )
  }
}

