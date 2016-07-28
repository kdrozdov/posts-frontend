import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let id = this.props.params.id;
    console.log(this.props);
    this.props.fetchPost(id);
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-10">
                <h4>{this.props.title}</h4>
                <span>
                  <small>Автор: {this.props.username}</small>
                </span>
                <div>{this.props.body}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{marginBottom: '15px'}}>
          <div className="col-md-12">
            <Link to="/" className="btn btn-primary">Назад</Link>
          </div>
        </div>
      </div>

    );
  }
}
