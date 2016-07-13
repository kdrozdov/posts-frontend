import React, { Component } from 'react';
import Post from './post';
import PostForm from './post-form';

export default class App extends Component {
  render() {
    return (
      <div>
        <Post />
        <PostForm />
      </div>
    );
  }
}
