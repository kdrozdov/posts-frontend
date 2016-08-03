import React, { Component } from 'react';
import classNames from 'classnames';

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
      phone: this.refs.phone.value,
      password: this.refs.password.value
    }
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <form onSubmit={this.handleSubmit} className="form-horizontal" role="form">
            <div className={classNames('form-group', {'has-error': this.props.error})}>
              <label className="col-sm-2 control-label">Телефон</label>
              <div className="col-sm-10">
                <input ref="phone" type="text" className="form-control" placeholder="Телефон" />
              </div>
            </div>

            <div className={classNames('form-group', {'has-error': this.props.error})}>
              <label className="col-sm-2 control-label">Пароль</label>
              <div className="col-sm-10">
                <input ref="password" type="password" className="form-control" placeholder="Пароль" />
              </div>
            </div>

            { this.props.error
              ? <div className="form-group has-error">
                  <label className="col-sm-4 control-label">{this.props.error}</label>
                </div>
              : ''
            }
            <button className="btn btn-primary" type="submit"> Войти </button>
          </form>
        </div>
      </div>
    );
  }
}
