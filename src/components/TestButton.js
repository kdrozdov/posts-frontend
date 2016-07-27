import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';

export default class TestButton extends Component {
  render() {
    const { addPost } = this.props
    return (
      <Panel header="Redux test">
        <Button onClick={ addPost }
                bsStyle="primary">
          Тест
        </Button>
      </Panel>
    )
  }
}
