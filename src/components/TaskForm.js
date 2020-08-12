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

  onSave = (event) => {
    event.preventDefault();
    //console.log(this.props.itemEditing)
    // if (this.props.itemEditing) {
    //   this.setState({
    //     id: this.props.itemEditing.id
    //   })
    // }
    console.log(this.state);
    this.props.onSaveTask(this.state);
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      id: "",
      name: "",
      status: false,
    })
  }

  render() {
    let id = '';
    //console.log(this.props.itemEditing);
    if (this.props.itemEditing && this.props.itemEditing.id !== null) {
      id = this.props.itemEditing.id;
    }
    if (!this.props.isDisplayForm) return null;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== '' ? 'Cập nhật Công Việc' : 'Thêm Công Việc'}
            <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSave} >
            <div className="form-group">
              <label>Tên :</label>
              <input type="text" name='name'
                defaultValue={id !== '' ? this.props.itemEditing.name : ''}
                onChange={this.onChange}
                className="form-control" />
            </div>
            <label>Trạng Thái :</label>
            <select className="form-control" required="required"
              name="status" defaultValue={id !== '' ? this.props.itemEditing.status : true}
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

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task))
    },
    onCloseForm: () => {
      dispatch(actions.closeForm())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
