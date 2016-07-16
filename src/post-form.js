import React, { Component } from 'react';
import {Form, Col, FormGroup, ControlLabel, FormControl, Panel, Button}
  from 'react-bootstrap';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      username: ''
    };
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleBodyChange(e) {
    this.setState({ body: e.target.value });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let title = this.state.title.trim();
    if (!title) {
      return;
    }
    this.props.onPostSubmit(this.state);
    this.setState({title: '', body: '', username: ''});
  }

  render() {
    return (
      <Panel header="Добавить новость">
        <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="postFormTitle">
            <Col componentClass={ControlLabel} sm={2}>
              Заголовок
            </Col>
            <Col sm={10}>
              <FormControl type="text"
                           value={this.state.title}
                           placeholder="Введите заголовок новости"
                           onChange={(e) => this.handleTitleChange(e)}/>
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <FormGroup controlId="postFormBody">
            <Col componentClass={ControlLabel} sm={2}>
              Содержание
            </Col>
            <Col sm={10}>
              <FormControl componentClass="textarea"
                           type="text"
                           value={this.state.body}
                           placeholder="Содержание новости"
                           onChange={(e) => this.handleBodyChange(e)}/>
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <FormGroup controlId="postFormUsername">
            <Col componentClass={ControlLabel} sm={2}>
              Автор
            </Col>
            <Col sm={10}>
              <FormControl type="text"
                           value={this.state.username}
                           placeholder="Автор"
                           onChange={(e) => this.handleUsernameChange(e)}/>
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <Button type="submit"
                  bsStyle="primary">
            Сохранить
          </Button>
        </Form>
      </Panel>
    );
  }
}


PostForm.propTypes = {
  onPostSubmit: React.PropTypes.func.isRequired
};

