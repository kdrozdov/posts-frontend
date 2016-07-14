import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    return (
      <li>
        <span>#{this.props.id} </span>
        <bold>{this.props.name}</bold>
        <p>{this.props.description}</p>
      </li>
    );
  }
}

Post.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
};
