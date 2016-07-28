import React, { Component } from 'react';
import Navbar from './Navbar';

export default class App extends Component {
  render() {
    let contentStyles = {
      marginTop: '80px'
    }
    return (
      <div className="app">
        <Navbar />
        <div className="row" style={contentStyles}>
          <div className="col-md-8 col-md-offset-2">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
