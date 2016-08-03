import jwtDecode from 'jwt-decode';

function initialState() {
  let token = localStorage.getItem('posts_auth_token');
  let isAuthenticated = false;
  let name, id = null;
  if(token) {
    isAuthenticated = true;
    name = jwtDecode(token).name;
    id = jwtDecode(token).sub;
  }
  return {
    token: token,
    name: name,
    id: id,
    isAuthenticated: isAuthenticated,
    error: null
  }
}

const auth = (state = initialState(), action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return Object.assign({}, state, {
        isAuthenticated: true,
        token: action.token,
        name: action.payload.name,
        id: action.payload.sub,
        error: null
      });
    }
    case 'LOGIN_FAILURE': {
      return Object.assign({}, state, {
        isAuthenticated: false,
        token: null,
        name: null,
        id: null,
        error: action.error
      });
    }
    case 'LOGOUT': {
      return Object.assign({}, state, {
        isAuthenticated: false,
        token: null,
        name: null,
        id: null
      });
    }
    default: {
      return state
    }
  }
}

export default auth
