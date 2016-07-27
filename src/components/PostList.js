import React, { Component } from 'react';
import Post from './Post';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.showPost = this.showPost.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  showPost(post) {
    const { destroyPost } = this.props;
    return(
      <Post key={post.id} {...post} destroyPost={destroyPost} />
    );
  }

  render() {
    let listStyles = {
      marginTop: '80px'
    }
    return (
      <div style={listStyles}>
        { this.props.posts.map(this.showPost) }
      </div>
    );
  }
}
