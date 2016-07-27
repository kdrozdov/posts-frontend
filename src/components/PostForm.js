import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Form, Col, FormGroup, ControlLabel, FormControl, Panel, Button}
  from 'react-bootstrap';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.formData = this.formData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  getValue(formControl) {
    return ReactDOM.findDOMNode(formControl).value;
  }

  setValue(formControl, value) {
    ReactDOM.findDOMNode(formControl).value = value;
  }

  reset(formControl) {
    this.setValue(this.refs.title, '')
    this.setValue(this.refs.body, '')
    this.setValue(this.refs.userName, '')
  }

  formData(){
    return {
      title: this.getValue(this.refs.title),
      body: this.getValue(this.refs.body),
      user_attributes: {
        name: this.getValue(this.refs.userName)
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let params = this.formData();
    if (!params.title) {
      return;
    }
    this.props.addPost(params)
      .then(() => this.reset());
  }

  render() {
    return (
      <Panel header="Добавить новость">
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="postFormTitle">
            <Col componentClass={ControlLabel} sm={2}>
              Заголовок
            </Col>
            <Col sm={10}>
              <FormControl ref="title"
                           type="text"
                           placeholder="Введите заголовок новости" />
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <FormGroup controlId="postFormBody">
            <Col componentClass={ControlLabel} sm={2}>
              Содержание
            </Col>
            <Col sm={10}>
              <FormControl ref="body"
                           componentClass="textarea"
                           type="text"
                           placeholder="Содержание новости" />
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <FormGroup controlId="postFormUsername">
            <Col componentClass={ControlLabel} sm={2}>
              Автор
            </Col>
            <Col sm={10}>
              <FormControl ref="userName"
                           type="text"
                           placeholder="Автор" />
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
