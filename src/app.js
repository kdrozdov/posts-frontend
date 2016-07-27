import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import PostForm from './containers/PostForm';
import Navbar from './components/Navbar';
import PostList from './containers/PostList';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Row>
          <Col md={8} xsOffset={2}>
            <PostList />
            <PostForm />
          </Col>
        </Row>
      </div>
    );
  }
}
