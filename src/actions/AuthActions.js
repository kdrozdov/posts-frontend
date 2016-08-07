import jwtDecode from 'jwt-decode';
import {checkHttpStatus, parseJSON} from '../utils';
import {browserHistory} from 'react-router';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export function loginSuccess(token, payload) {
  localStorage.setItem('posts_auth_token', token);
  return {
    type: LOGIN_SUCCESS,
    token,
    payload
  }
}

export function login(params, redirect = '/') {
  return function (dispatch) {
    return fetch(`${process.env.BASE_URL}/v1/auth_tokens/`, {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({auth: params})
      })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        try {
          let payload = jwtDecode(response.jwt);
          dispatch(loginSuccess(response.jwt, payload));
          browserHistory.push(redirect);
        } catch (e) {
          dispatch(loginFailure('Неправильный токен'));
        }
      })
      .catch(() => {
        dispatch(loginFailure('Неправильный телефон или пароль'));
      })
  }
}

export function loginFailure(error) {
  localStorage.removeItem('posts_auth_token');
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export function logout() {
  localStorage.removeItem('posts_auth_token');
  return {
    type: LOGOUT
  }
}

export function logoutAndRedirect() {
  return (dispatch) => {
    dispatch(logout());
    browserHistory.push('/');
  }
}

