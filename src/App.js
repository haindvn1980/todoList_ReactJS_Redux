import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm.js';
import Control from './components/Control.js';
import TaskList from './components/TaskList.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      isDisplayForm: false,
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
    this.setState({
      isDisplayForm: !this.isDisplayForm
    })
  }
  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    })
  }

  onSubmit = (data) => {
    let { tasks } = this.state;

    if (data.id === '' && this.state.staskEditing.length === 0) {
      data.id = '1';//this.randomKey() + '-' + this.randomKey();
      tasks.push(data);
      this.onShowForm();
    } else {
      let index = this.findIndex(this.state.staskEditing.id);
      tasks[index] = data;
    }

    this.setState({
      tasks: tasks,
      staskEditing: []
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateStatus = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    console.log(index);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  onDelete = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);

    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    this.onCloseForm()
  }

  onUpdate = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      let staskEditingvalue = tasks[index];
      this.setState({
        staskEditing: staskEditingvalue
      })
      this.onShowForm();
    }
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
    let { isDisplayForm } = this.state;
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

    let elmTaskForm = isDisplayForm ?
      <TaskForm onSubmit={this.onSubmit}
        onCloseForm={this.onCloseForm}
        itemEditing={this.state.staskEditing}
      /> : ''
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            {elmTaskForm}
          </div>
          <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12  col-md-12 col-lg-12'}>
            <button type="button" className="btn btn-primary"
              onClick={this.onToggleForm}>
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button> &nbsp;
            <Control onSearch={this.onSearch} onSort={this.onSort} />
            <TaskList
              onUpdateStatus={this.onUpdateStatus}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              onFilter={this.onFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
