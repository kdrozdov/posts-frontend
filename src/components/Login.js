import React, { Component } from 'react';
import TextInput from './TextInput';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.formData = this.formData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let params = this.formData();
    if (!params.phone.trim() ||
        !params.password.trim()) {
      return;
    }
    this.props.login(params);
  }

  formData(){
    return {
      phone: this.refs.phone.value(),
      password: this.refs.password.value()
    }
  }

  error() {
    return (
      <div className="form-group has-error">
        <label className="col-sm-4 control-label">{this.props.error}</label>
      </div>
    );
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <form onSubmit={this.handleSubmit} className="form-horizontal" role="form">

            <TextInput ref="phone" label="Телефон" placeholder="Телефон" />
            <TextInput ref="password" label="Пароль" type="password" placeholder="Пароль" />

            { this.props.error
              ? this.error()
              : ''
            }
            <button className="btn btn-primary" type="submit"> Войти </button>
          </form>
        </div>
      </div>
    );
  }
}
