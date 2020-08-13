import React, { Component } from 'react';
import TaskItem from './TaskItem.js';
import { connect } from 'react-redux';
import * as actions from './../actions/index.js';

class TaskList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1, //all -1, an:0, kich hoat :1
    }
  }
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    var filter = {
      name: name === 'filterName' ? value : this.state.filterName,
      status: name === 'filterStatus' ? value : this.state.filterStatus
    };
    this.props.onFilterTable(filter);
    this.setState({
      [name]: value
    });
  }

  render() {

    let { tasks, filterTable, keyword, sort } = this.props;
    //tìm kiếm tại list
    if (filterTable) {
      if (filterTable.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filterTable.name) !== -1
        })
      }
      tasks = tasks.filter((task) => {
        if (filterTable.status === -1) {
          return task;
        } else {
          return task.status === (filterTable.status === 1 ? true : false)
        }
      })
    }

    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1
      })
    }

    if (sort.by === 'name') {
      tasks = tasks.sort((a, b) => {
        if (a.name > b.name) return parseInt(sort.value);
        else if (a.name < b.name) return -parseInt(sort.value);
        else return 0;
      });
    }

    if (sort.by === 'status') {
      tasks = tasks.sort((a, b) => {
        if (a.status > b.status) return parseInt(sort.value);
        else return -parseInt(sort.value);
      });
    }

    let elmTasks = tasks.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          task={task}
          index={index + 1}
        />
      )
    });

    return (
      <div className="row mt-15" >
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
                  <input
                    type="text"
                    className="form-control"
                    name="filterName"
                    onChange={this.onChange}
                    value={this.state.filerName}
                  />
                </td>
                <td>
                  <select
                    className="form-control"
                    name="filterStatus"
                    onChange={this.onChange}
                    value={this.state.filterStatus}
                  >
                    <option value={-1}>Tất Cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích Hoạt</option>
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
    tasks: state.tasks,
    filterTable: state.filterTable,
    keyword: state.search,
    sort: state.sort
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTable: (filter) => {
      dispatch(actions.filterTask(filter))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
