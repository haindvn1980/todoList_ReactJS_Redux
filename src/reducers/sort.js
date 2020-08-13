import * as types from '../constants/ActionType'
let initialState = {
  by: '',
  value: 1
};

let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SORT:
      return {
        by: action.sort.by,
        value: action.sort.value
      };

    default: return state;
  }
}

export default myReducer;