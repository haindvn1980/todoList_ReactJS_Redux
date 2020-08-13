import * as types from './../constants/ActionType'
let initialState = {
  name: "",
  status: -1,
};//close form

let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_TABLE:
      action.filter.status = parseInt(action.filter.status);
      return action.filter;

    default: return state;
  }
}

export default myReducer;