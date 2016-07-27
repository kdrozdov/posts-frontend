export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST'
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS'

export function getPostsRequest() {
  return {
    type: GET_POSTS_REQUEST
  }
}

export function getPostsSuccess(posts) {
  return {
    type: GET_POSTS_SUCCESS,
    posts
  }
}

export function getPosts() {
  return function (dispatch) {
    dispatch(getPostsRequest())
    return fetch(`${process.env.BASE_URL}/posts`)
      .then(response => response.json())
      .then(json =>
        dispatch(getPostsSuccess(json.data))
      )
  }
}

export function addPostRequest(params) {
  return {
    type: ADD_POST_REQUEST,
    params
  }
}

export function addPostSuccess(post) {
  return {
    type: ADD_POST_SUCCESS,
    post
  }
}

export function addPost() {
  return function (dispatch, getState) {
    let params = getState().postForm;
    if (!params.title) {
      return;
    }
    dispatch(addPostRequest(params))
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
      dispatch(addPostSuccess(json.data))
    )
  }
}

export function removePostRequest(postId) {
  return {
    type: REMOVE_POST_REQUEST,
    postId
  }
}

export function removePostSuccess(postId) {
  return {
    type: REMOVE_POST_SUCCESS,
    postId
  }
}

export function removePost(postId) {
  return function (dispatch) {
    dispatch(removePostRequest(postId))
    return fetch(`${process.env.BASE_URL}/posts/${postId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
    .then(() =>
      dispatch(removePostSuccess(postId))
    )
  }
}

