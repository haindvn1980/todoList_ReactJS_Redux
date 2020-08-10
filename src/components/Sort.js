import React, { Component } from 'react';

class SortControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sorted: ''
    }
  }
  onSort = (sortby, sortvalue) => {
    this.props.onSort(sortby, sortvalue)
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
              &nbsp;
              <span className="fa fa-sort-alpha-asc pr-5">
                Tên A-Z
                   </span>

            </li>
            <li onClick={() => this.onSort('name', '-1')}>
              &nbsp;
              <span className="fa fa-sort-alpha-desc pr-5">
                Tên Z-A
                </span>

            </li>
            <li role="separator" className="divider"></li>
            <li onClick={() => this.onSort('status', '1')}>
              &nbsp;  Trạng Thái Kích Hoạt
            </li>
            <li onClick={() => this.onSort('status', '-1')}>
              &nbsp;  Trạng Thái Ẩn
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
export default SortControl;
