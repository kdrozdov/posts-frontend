import React, { Component } from 'react';
import {Form, Col, FormGroup, ControlLabel, FormControl, Panel, Button}
  from 'react-bootstrap';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.props.update('title', e.target.value);
  }

  handleBodyChange(e) {
    this.props.update('body', e.target.value);
  }

  handleUsernameChange(e) {
    this.props.update('user_attributes', { name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPost()
      .then(() => this.props.reset());
  }

  render() {
    console.log('props', this.props);
    return (
      <Panel header="Добавить новость">
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="postFormTitle">
            <Col componentClass={ControlLabel} sm={2}>
              Заголовок
            </Col>
            <Col sm={10}>
              <FormControl type="text"
                           value={this.props.title}
                           placeholder="Введите заголовок новости"
                           onChange={this.handleTitleChange}/>
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
                           value={this.props.body}
                           placeholder="Содержание новости"
                           onChange={this.handleBodyChange}/>
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <FormGroup controlId="postFormUsername">
            <Col componentClass={ControlLabel} sm={2}>
              Автор
            </Col>
            <Col sm={10}>
              <FormControl type="text"
                           value={this.props.user_attributes.name}
                           placeholder="Автор"
                           onChange={this.handleUsernameChange}/>
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
