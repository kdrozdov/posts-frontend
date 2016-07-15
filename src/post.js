import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    return (
      <li>
        <span>#{this.props.id} </span>
        <bold>{this.props.attributes.title}</bold>
        <span>{this.props.attributes.username}</span>
        <p>{this.props.attributes.body}</p>
      </li>
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
