import * as types from './../constants/ActionType'
let initialState = {
  id: "",
  name: "",
  status: false,
};//close form

let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      return action.task;

    default: return state;
  }
}

export default myReducer;