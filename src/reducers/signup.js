
const initialState = {
  errors: {}
};

const signup = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS': {
      return Object.assign({}, state, { errors: {} });
    }
    case 'SIGNUP_FAILURE': {
      return Object.assign({}, state, { errors: action.errors });
    }
    default: {
      return state
    }
  }
}

export default signup
