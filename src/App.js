import React, { Component } from 'react';
import Post from './post';
import PostForm from './post-form';
import posts from './post-store';

export default class App extends Component {
  render() {
    return (
      <div>
        <Post posts={posts}/>
        <PostForm />
      </div>
    );
  }
}
