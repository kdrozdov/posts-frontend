import React, { Component } from 'react';
import PostItem from './PostItem';
import PostForm from './PostForm'

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
      <PostItem key={post.id} {...post} destroyPost={destroyPost} />
    );
  }

  render() {
    return (
      <div>
        { this.props.posts.map(this.showPost) }
        <PostForm createPost={this.props.createPost} />
      </div>
    );
  }
}
