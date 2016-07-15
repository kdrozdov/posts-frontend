import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';

export default class Post extends Component {
  render() {
    return (
      <div>
        <Panel>
          <h4>{this.props.attributes.title}</h4>
          <span>
            <small>Автор: {this.props.attributes.username}</small>
          </span>
          <div>{this.props.attributes.body}</div>
        </Panel>
      </div>
    );
  }
}

Post.propTypes = {
  id: React.PropTypes.string.isRequired,
  attributes: React.PropTypes.shape({
    username: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string
  })
};
