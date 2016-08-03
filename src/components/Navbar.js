import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {
  render() {
    const { isAuthenticated, logoutAndRedirect } = this.props
    return (
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Posts</Link>
          </div>
          <div className="navbar-collapse collapse">
            { isAuthenticated
              ? <ul className="nav navbar-nav navbar-right">
                  <li><a onClick={ () => logoutAndRedirect() } href="/">Выход</a></li>
                </ul>
              : <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/signup">Регистрация</Link></li>
                  <li><Link to="/login">Вход</Link></li>
                </ul>
            }
          </div>
        </div>
      </div>
    );
  }
}
