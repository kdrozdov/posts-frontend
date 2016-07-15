import React, { Component } from 'react';
import PostList from './post-list';
import PostForm from './post-form';
import {PostService} from './post-service';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.postService = new PostService();

  }

  componentDidMount() {
    this.postService.fetchAll()
        .then((response) => {
          this.setState({posts: response.data});
        });
  }

  render() {

    return (
      <div>
        <PostList posts={this.state.posts} />
        <PostForm />
      </div>
    );
  }
}
