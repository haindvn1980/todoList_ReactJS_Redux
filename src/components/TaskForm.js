import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../actions/index'

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: true
    };

  }



  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    })
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddTask(this.state);
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      name: "",
      status: false
    })
  }

  render() {
    let id = '';
    if (this.props.itemEditing) {
      id = this.props.itemEditing.id;
    }
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== '' ? 'Cập nhật Công Việc' : 'Thêm Công Việc'}
            <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onHandleSubmit} >
            <div className="form-group">
              <label>Tên :</label>
              <input type="text" name='name'
                defaultValue={id !== '' ? this.props.itemEditing.name : this.state.name}
                onChange={this.onChange}
                className="form-control" />
            </div>
            <label>Trạng Thái :</label>
            <select className="form-control" required="required"
              name="status"
              onChange={this.onChange}
              defaultValue={id !== '' ? this.props.itemEditing.status : this.state.status}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning"  >Thêm</button>&nbsp;
                    <button type="submit" className="btn btn-danger" onClick={this.onClear}>Hủy Bỏ</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {

  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.addTask(task))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
