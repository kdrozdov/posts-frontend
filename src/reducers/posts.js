const initialState = {
  posts: [],
  totalPages: 0,
  isFetching: false,
  post: {
    title: '',
    body: '',
    username: ''
  }
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_POSTS': {
      return Object.assign({}, state, { isFetching: true });
    }
    case 'RECEIVE_POSTS': {
      return Object.assign({}, state, {
        posts: action.posts,
        isFetching: false,
        totalPages: action.meta['total-pages']
      });
    }
    case 'RECEIVE_POST': {
      return Object.assign({}, state, { post: action.post });
    }
    case 'ADD_POST': {
      const newPosts = [action.post, ...state.posts];
      return Object.assign({}, state, { posts: newPosts });
    }
    case 'REMOVE_POST': {
      const newPosts = state.posts.filter(post => post.id != action.postId);
      return Object.assign({}, state, { posts: newPosts });
    }
    default: {
      return state
    }
  }
}

export default posts
