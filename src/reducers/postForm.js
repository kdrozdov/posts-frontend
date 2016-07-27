

const initialState = {
  title: '',
  body: '',
  user_attributes: { name: '' }
};

const postForm = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE': {
      return Object.assign({}, state, {
        [action.name]: action.value
      });
    }
    case 'RESET': {
      return Object.assign({}, state, initialState);
    }
    default: {
      return state
    }
  }
}

export default postForm
