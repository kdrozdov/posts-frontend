import { parseJSON, checkHttpStatus, handleNotFound } from '../utils';
import {browserHistory} from 'react-router';
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'

export function requestPosts() {
  return {
    type: REQUEST_POSTS,
    isFetching: false
  }
}

export function receivePosts(posts, meta) {
  return {
    type: RECEIVE_POSTS,
    posts,
    meta
  }
}

export function fetchPosts(params = {}) {
  return function (dispatch) {
    let url = browserHistory.createPath({
      pathname: `${process.env.BASE_URL}/v1/posts`,
      query: params
    });
    dispatch(requestPosts())
    return fetch(url)
      .then(parseJSON)
      .then(json => {
        browserHistory.push({
          pathname: '',
          query: params
        });
        dispatch(receivePosts(json.data, json.meta));
      })
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
    return fetch(`${process.env.BASE_URL}/v1/posts/${postId}`)
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(json => {
      dispatch(receivePost(json.data.attributes));
    })
    .catch(handleNotFound)
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
    return fetch(`${process.env.BASE_URL}/v1/posts`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Authorization': `Bearer ${state.auth.token}`
      },
      body: params
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
    return fetch(`${process.env.BASE_URL}/v1/posts/${postId}`, {
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

