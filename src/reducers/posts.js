const initialState = {
  posts: [],
  post: {
    title: '',
    body: '',
    username: ''
  }
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_POSTS': {
      return Object.assign({}, state, { posts: action.posts });
    }
    case 'RECEIVE_POST': {
      return Object.assign({}, state, { post: action.post });
    }
    case 'ADD_POST': {
      const newPosts = [...state.posts, action.post];
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
