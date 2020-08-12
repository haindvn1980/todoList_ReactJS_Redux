import React, { Component } from 'react';
import TaskItem from './TaskItem.js';
import { connect } from 'react-redux';

class TaskList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: '', //all -1, an:0, kich hoat :1
    }
  }
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus
    )
    this.setState({ keywork: event.target.value });
    this.setState({
      [name]: value
    });
  }

  render() {

    let { tasks } = this.props;
    let { filterName, filterStatus } = this.state;
    let elmTasks = tasks.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          task={task}
          index={index + 1}
          // onUpdate={this.props.onUpdate}
        />
      )
    });

    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover mt-15">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input type="text"
                    name="filterName"
                    defaultValue={filterName}
                    onChange={this.onChange}
                    className="form-control" />
                </td>
                <td>
                  <select className="form-control"
                    name="filterStatus"
                    defaultValue={filterStatus}
                    onChange={this.onChange}
                  >
                    <option value="-1">Tất Cả</option>
                    <option value="0">Ẩn</option>
                    <option value="1">Kích Hoạt</option>
                  </select>
                </td>
                <td></td>
              </tr>
              {elmTasks}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
};

export default connect(mapStateToProps, null)(TaskList);
