import React, { Component } from 'react';

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.handleSortClick = this.handleSortClick.bind(this);
  }

  handleSortClick() {
    let sortBy = this.props.sortBy;
    let sortDirection = this.props.sortDirection == 'asc' ? 'desc' : 'asc';
    this.props.clickCallback(sortBy, sortDirection);
  }

  render() {
    return (
      <button onClick={this.handleSortClick} type="button" className="btn btn-default">
        { this.props.sortDirection == 'asc'
          ? <span className="glyphicon glyphicon-sort-by-attributes"></span>
          : <span className="glyphicon glyphicon-sort-by-attributes-alt"></span>
        }
      </button>
    );
  }
}
