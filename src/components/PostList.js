import React, { Component } from 'react';
import Post from './Post';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.showPost = this.showPost.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  showPost(post) {
    const { removePost } = this.props;
    return(
      <Post key={post.id} {...post} removePost={removePost} />
    );
  }

  render() {
    console.log(this.props)
    return (
      <div>
        { this.props.posts.map(this.showPost) }
      </div>
    );
  }
}
