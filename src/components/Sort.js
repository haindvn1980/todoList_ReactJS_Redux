import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index.js';

class SortControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sorted: ''
    }
  }
  onSort = (sortby, sortValue) => {
    this.props.onSort({
      by: sortby,
      value: sortValue
    })
  }

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={() => this.onSort('name', '1')}>
              &nbsp;<a href className={(this.props.sort.by === 'name' && this.props.sort.value === "1") ? 'sort_selected' : ''}>
                <span className="fa fa-sort-alpha-asc pr-5">
                  Tên A-Z
                   </span>
              </a>
            </li>
            <li onClick={() => this.onSort('name', '-1')}>
              &nbsp;<a href className={(this.props.sort.by === 'name' && this.props.sort.value === "-1") ? 'sort_selected' : ''}>
                <span className="fa fa-sort-alpha-desc pr-5">
                  Tên Z-A
                </span>
              </a>
            </li>
            <li role="separator" className="divider"></li>
            <li onClick={() => this.onSort('status', '1')}>
              &nbsp;<a href className={(this.props.sort.by === 'status' && this.props.sort.value === "1") ? 'sort_selected' : ''}>

                Trạng Thái Kích Hoạt</a>
            </li>
            <li onClick={() => this.onSort('status', '-1')}>
              &nbsp; <a href className={(this.props.sort.by === 'status' && this.props.sort.value === "-1") ? 'sort_selected' : ''}>
                Trạng Thái Ẩn</a>
            </li>
          </ul >
        </div >
      </div >

    );
  }
}

const mapStateToProps = (state) => {
  return {
    sort: state.sort
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: (sort) => {
      dispatch(actions.sortTask(sort))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortControl);

