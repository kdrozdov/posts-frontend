import React, { Component } from 'react';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.formData = this.formData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetForm() {
    this.refs.title.value = ''
    this.refs.body.value = ''
  }

  formData(){
    return {
      title: this.refs.title.value,
      body: this.refs.body.value,
      user_id: this.props.user_id
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let params = this.formData();
    if (!params.title.trim() ||
        !params.body.trim()) {
      return;
    }
    this.props.createPost(params)
      .then(() => this.resetForm());
  }

  render() {

    return (
      <div className="panel panel-default">
        <div className="panel-heading">Добавить новость</div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit} className="form-horizontal" role="form">

            <div className="form-group">
              <label className="col-sm-2 control-label">Заголовок</label>
              <div className="col-sm-10">
                <input ref="title" type="text" className="form-control" placeholder="Введите заголовок новости" />
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label">Содержание</label>
              <div className="col-sm-10">
                <textarea ref="body" className="form-control" rows="3" placeholder="Содержание новости"></textarea>
              </div>
            </div>

            <button className="btn btn-primary" type="submit"> Сохранить </button>
          </form>
        </div>
      </div>
    );
  }
}
