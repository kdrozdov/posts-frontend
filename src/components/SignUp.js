import React, { Component } from 'react';
import TextInput from './TextInput';
import {browserHistory} from 'react-router';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.formData = this.formData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let params = this.formData();
    if (!params.name.trim() ||
        !params.phone.trim() ||
        !params.password.trim()) {
      return;
    }
    this.props.signUp(params);
  }

  formData(){
    return {
      name: this.refs.name.value(),
      phone: this.refs.phone.value(),
      password: this.refs.password.value(),
      password_confirmation: this.refs.passwordConfirmation.value()
    }
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <form onSubmit={this.handleSubmit} className="form-horizontal" role="form">
            <TextInput ref="name" label="Имя" placeholder="Имя" error={this.props.errors.name} />
            <TextInput ref="phone" label="Телефон" placeholder="Телефон" error={this.props.errors.phone} />
            <TextInput ref="password" label="Пароль" type="password" placeholder="Пароль" error={this.props.errors.password} />
            <TextInput ref="passwordConfirmation" label="Подтверждение" type="password" placeholder="Подтверждение пароля" error={this.props.errors.password_confirmation} />

            <button className="btn btn-primary" type="submit"> Войти </button>&nbsp;
            <a onClick={browserHistory.goBack} className="btn btn-primary">Назад</a>
          </form>
        </div>
      </div>
    );
  }
}
