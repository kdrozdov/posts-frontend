import React, { Component } from 'react';
import classNames from 'classnames';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.value = this.value.bind(this);
  }

  wrapperClass(error = false) {
    return classNames('form-group', { 'has-error': error });
  }

  value() {
    return this.refs.input.value;
  }

  type() {
    return this.props.type || 'text';
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
      <div className={this.wrapperClass(this.props.error)}>
        <label className="col-sm-2 control-label">{this.props.label}</label>

        <div className="col-sm-10">
          <input ref="input" type={this.type()} className="form-control" placeholder={this.props.placeholder} />
        </div>

        { this.props.error
          ? this.error()
          : ''
        }
      </div>
    );
  }
}
