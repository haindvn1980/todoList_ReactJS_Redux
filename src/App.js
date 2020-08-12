import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm.js';
import Control from './components/Control.js';
import TaskList from './components/TaskList.js';
import { connect } from 'react-redux';
import * as actions from './actions/index';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      staskEditing: [],
      keywork: '',
      filter: {
        filterName: '',
        filterStatus: -1
      },
      sortby: '',
      sortvalue: "1"
    }
  }

  onToggleForm = () => {
    this.props.onToggleForm();
    this.props.onClearTask({
      id: '',
      name: '',
      status: true
    })
  }

  findIndex = (id) => {
    let { tasks } = this.state;
    let result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) { result = index; }
    });
    return result;
  }

  onFilter = (filterName, filterStatus) => {
    this.setState({
      fiter: {
        filterName: filterName.toLowerCase(),
        filterStatus: filterStatus
      }
    })
  }

  onSearch = (keywork) => {
    this.setState({
      keywork: keywork
    })
  }

  onSort = (sortby, sortvalue) => {
    this.setState({
      sortby: sortby,
      sortvalue: sortvalue
    })
  }

  render() {

    //let { isDisplayForm, keywork, fiter, sortby, sortvalue } = this.state;
    let { isDisplayForm } = this.props;
    // if (keywork) {
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(keywork) !== -1
    //   })
    // }

    // if (fiter) {
    //   if (fiter.filterName) {
    //     tasks = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(fiter.filterName) !== -1
    //     })
    //   }

    //   tasks = tasks.filter((task) => {
    //     if (fiter.filterStatus === "-1") {
    //       return task;
    //     } else {
    //       return task.status === (fiter.filterStatus === "1" ? true : false)
    //     }
    //   })
    // }

    // if (sortby === 'name') {
    //   tasks = tasks.sort((a, b) => {
    //     if (a.name > b.name) return parseInt(sortvalue);
    //     else if (a.name < b.name) return -parseInt(sortvalue);
    //     else return 0;
    //   });
    // }

    // if (sortby === 'status') {
    //   tasks = tasks.sort((a, b) => {
    //     if (a.status > b.status) return parseInt(sortvalue);
    //     else return -parseInt(sortvalue);
    //   });
    // }

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <TaskForm />
          </div>
          <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12  col-md-12 col-lg-12'}>
            <button type="button" className="btn btn-primary"
              onClick={this.onToggleForm}>
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button> &nbsp;
            <Control onSearch={this.onSearch} onSort={this.onSort} />
            <TaskList onFilter={this.onFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm())
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
