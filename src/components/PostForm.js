import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    }
    this.fileReader = new FileReader();
    this.onDrop = this.onDrop.bind(this);
    this.formData = this.formData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetForm() {
    this.refs.title.value = ''
    this.refs.body.value = ''
    this.setState({ image: null })
  }

  formData(){
    let fd = new FormData();
    fd.append('post[title]', this.refs.title.value)
    fd.append('post[body]', this.refs.body.value)
    fd.append('post[user_id]', this.props.user_id)
    fd.append('post[image]', this.state.image)
    return fd
  }

  isValid() {
    let title = this.refs.title.value;
    let body = this.refs.body.value;
    if (!title.trim() || !body.trim()) {
      return false;
    }
    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.isValid()) {
      return;
    }
    let params = this.formData();
    this.props.createPost(params)
      .then(() => this.resetForm());
  }

  onDrop(files) {
    this.setState({ image: files[0] });
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

            <div className="form-group">
              <label className="col-sm-2 control-label">Изображение</label>
              <div className="col-sm-10">
                <Dropzone onDrop={this.onDrop} multiple={false} accept="image/*">
                  { this.state.image
                    ? <img src={this.state.image.preview} height="200" width="200" />
                    : <div>Try dropping some files here, or click to select files to upload.</div>
                  }
                </Dropzone>
              </div>
            </div>

            <button className="btn btn-primary" type="submit"> Сохранить </button>
          </form>
        </div>
      </div>
    );
  }
}
