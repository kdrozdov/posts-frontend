import {browserHistory} from 'react-router';

export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    throw response
  }
}

export function parseJSON(response) {
  return response.json()
}

export function handleNotFound(response) {
  if (response.status == 404) {
    browserHistory.push('/404');
  }
}
