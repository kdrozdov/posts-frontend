import React, { Component } from 'react';
import {Navbar as BSNavbar} from 'react-bootstrap';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <BSNavbar inverse>
          <BSNavbar.Header>
            <BSNavbar.Brand>
              <a href="#">Posts</a>
            </BSNavbar.Brand>
            <BSNavbar.Toggle />
          </BSNavbar.Header>
          <BSNavbar.Collapse>
          </BSNavbar.Collapse>
        </BSNavbar>
      </div>
    );
  }
}
