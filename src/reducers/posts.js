

const initialState = {
  posts: []
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS': {
      return Object.assign({}, state, { posts: action.posts });
    }
    case 'ADD_POST_SUCCESS': {
      const newPosts = [...state.posts, action.post];
      return Object.assign({}, state, { posts: newPosts });
    }
    case 'REMOVE_POST_SUCCESS': {
      const newPosts = state.posts.filter(post => post.id != action.postId);
      return Object.assign({}, state, { posts: newPosts });
    }
    default: {
      return state
    }
  }
}

export default posts
