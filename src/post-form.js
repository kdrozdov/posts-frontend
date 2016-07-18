import React, { Component } from 'react';
import {Form, Col, FormGroup, ControlLabel, FormControl, Panel, Button}
  from 'react-bootstrap';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      user_attributes: { name: '' }
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleBodyChange(e) {
    this.setState({ body: e.target.value });
  }

  handleUsernameChange(e) {
    this.setState({ user_attributes: { name: e.target.value }});
  }

  handleSubmit(e) {
    e.preventDefault();
    let title = this.state.title.trim();
    if (!title) {
      return;
    }
    this.props.onPostSubmit({ post: this.state });
    this.setState({
      title: '',
      body: '',
      user_attributes: { name: '' }
    });
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
              <FormControl type="text"
                           value={this.state.title}
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
                           value={this.state.body}
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
                           value={this.state.user_attributes.name}
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


PostForm.propTypes = {
  onPostSubmit: React.PropTypes.func.isRequired
};

