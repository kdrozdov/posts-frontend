import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/PostActions'
import { Panel, Button } from 'react-bootstrap';

let TestButton = ({ dispatch }) => {
  return(
    <Panel header="Redux test">
      <Button onClick={ e => dispatch(addPost()) }
              bsStyle="primary">
        Тест
      </Button>
    </Panel>
  )
}

TestButton = connect()(TestButton)
export default TestButton
