import {loginSuccess} from './AuthActions'
import {checkHttpStatus, parseJSON} from '../utils';
import {browserHistory} from 'react-router';
import jwtDecode from 'jwt-decode';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export function signUpSuccess() {
  return {
    type: SIGNUP_SUCCESS
  }
}

export function signUpFailure(errors) {
  return {
    type: SIGNUP_FAILURE,
    errors
  }
}

export function signUp(params, redirect = '/') {
  return function (dispatch) {
    return fetch(`${process.env.BASE_URL}/v1/registrations/`, {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({user: params})
      })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        try {
          let payload = jwtDecode(response.jwt);
          dispatch(loginSuccess(response.jwt, payload));
          dispatch(signUpSuccess());
          browserHistory.push(redirect);
        } catch (e) {
          dispatch(signUpFailure({ token: 'Неправильный токен' }));
        }
      })
      .catch(response => {
        response.json().then(json => {
          dispatch(signUpFailure(json.errors));
        })
      })
  }
}
