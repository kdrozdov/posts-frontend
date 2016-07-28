import React, { Component } from 'react';

export default class PostItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleRemoveClick() {
    this.props.destroyPost(this.props.id);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-10">
              <h4>{this.props.attributes.title}</h4>
              <span>
                <small>Автор: {this.props.attributes.username}</small>
              </span>
              <div>{this.props.attributes.body}</div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-danger" onClick={this.handleRemoveClick} >Удалить</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  attributes: React.PropTypes.shape({
    username: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string
  })
};
