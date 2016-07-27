const initialState = {
  posts: []
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS': {
      return Object.assign({}, state, { posts: action.posts });
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
