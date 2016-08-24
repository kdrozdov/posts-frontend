import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleSearchClick() {
    let value = this.refs.search.value
    this.props.clickCallback(value);
  }

  render() {
    return (
      <div className="input-group">
        <span className="input-group-btn">
          <button onClick={this.handleSearchClick} className="btn btn-default" type="button">Go!</button>
        </span>
        <input ref="search" type="text" className="form-control" placeholder="Искать ..." />
      </div>
    );
  }
}
