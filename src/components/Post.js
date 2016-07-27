import React, { Component } from 'react';
import {Panel, Row, Col, Button} from 'react-bootstrap';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleRemoveClick(e) {
    this.props.removePost(this.props.id);
  }

  render() {
    return (
      <div>
        <Panel>
          <Row>
            <Col md={10}>
              <h4>{this.props.attributes.title}</h4>
              <span>
                <small>Автор: {this.props.attributes.username}</small>
              </span>
              <div>{this.props.attributes.body}</div>
            </Col>
            <Col md={2}>
              <Button onClick={this.handleRemoveClick}
                      bsStyle="danger">Удалить</Button>
            </Col>
          </Row>
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
