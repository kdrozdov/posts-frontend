import React, { Component } from 'react';
import Post from './post';

export default class PostList extends Component {
  render() {
    return (
      <div>
        {
          this.props.posts.map((post) => {
            return(
              <Post key={post.id} {...post} />
            );
          })
        }
      </div>
    );
  }
}

PostList.propTypes = {
  posts: React.PropTypes.array
};

