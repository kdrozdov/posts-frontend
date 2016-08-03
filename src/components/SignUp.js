import React, { Component } from 'react';
import classNames from 'classnames';
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
      name: this.refs.name.value,
      phone: this.refs.phone.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.passwordConfirmation.value
    }
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <form onSubmit={this.handleSubmit} className="form-horizontal" role="form">
            <div className={classNames('form-group', {'has-error': this.props.errors.name})}>
              <label className="col-sm-2 control-label">Имя</label>
              <div className="col-sm-10">
                <input ref="name" type="text" className="form-control" placeholder="Имя" />
              </div>
              { this.props.errors.name
                ? <div className="form-group has-error">
                    <label className="col-sm-4 control-label">{this.props.errors.name}</label>
                  </div>
                : ''
              }
            </div>

            <div className={classNames('form-group', {'has-error': this.props.errors.phone})}>
              <label className="col-sm-2 control-label">Телефон</label>
              <div className="col-sm-10">
                <input ref="phone" type="text" className="form-control" placeholder="Телефон" />
              </div>
              { this.props.errors.phone
                ? <div className="form-group has-error">
                    <label className="col-sm-4 control-label">{this.props.errors.phone}</label>
                  </div>
                : ''
              }
            </div>

            <div className={classNames('form-group', {'has-error': this.props.errors.password})}>
              <label className="col-sm-2 control-label">Пароль</label>
              <div className="col-sm-10">
                <input ref="password" type="password" className="form-control" placeholder="Пароль" />
              </div>
              { this.props.errors.password
                ? <div className="form-group has-error">
                    <label className="col-sm-4 control-label">{this.props.errors.password}</label>
                  </div>
                : ''
              }
            </div>

            <div className={classNames('form-group', {'has-error': this.props.errors.password_confirmation})}>
              <label className="col-sm-2 control-label">Подтверждение</label>
              <div className="col-sm-10">
                <input ref="passwordConfirmation" type="password" className="form-control" placeholder="Подтверждение пароля" />
              </div>
              { this.props.errors.password_confirmation
                ? <div className="form-group has-error">
                    <label className="col-sm-4 control-label">{this.props.errors.password_confirmation}</label>
                  </div>
                : ''
              }
            </div>

            <button className="btn btn-primary" type="submit"> Войти </button>&nbsp;
            <a onClick={browserHistory.goBack} className="btn btn-primary">Назад</a>
          </form>
        </div>
      </div>
    );
  }
}
