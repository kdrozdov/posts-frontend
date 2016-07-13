import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    return (
      <ul>
        {
          this.props.posts.map((post) => {
            return(
              <li key={post.id}>
                <h4>{post.name}</h4>
                <div>{post.description}</div>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

Post.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
  }))
};
