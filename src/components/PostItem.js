import React, { Component } from 'react';
import {Link} from 'react-router';

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
              <Link to={'/posts/' + this.props.id}>
                <h4>{this.props.attributes.title}</h4>
              </Link>
              <span>
                <small>Автор: {this.props.attributes.username}</small>&nbsp;
                <small>Дата: {this.props.attributes['created-at']}</small>
              </span>
              <div>
                { this.props.attributes.image.small
                    ? <img src={this.props.attributes.image.small} height="100" width="100" style={{marginRight: '10px'}} className="img-thumbnail" />
                    : ''
                }
                {this.props.attributes.body}
              </div>
            </div>
            { this.props.isAuthenticated
              ? <div className="col-md-2">
                  <button className="btn btn-danger" onClick={this.handleRemoveClick} >Удалить</button>
                </div>
              : ''
            }
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
