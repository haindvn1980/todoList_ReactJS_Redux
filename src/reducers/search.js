import * as types from './../constants/ActionType'
let initialState = '';

let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH:
      return action.keyword;

    default: return state;
  }
}

export default myReducer;