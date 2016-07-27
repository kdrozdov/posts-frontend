import React, { Component } from 'react';
import Navbar from './Navbar';
import PostForm from '../containers/PostForm';
import PostList from '../containers/PostList';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <PostList />
            <PostForm />
          </div>
        </div>
      </div>
    );
  }
}
