import * as types from './../constants/ActionType'

let data = JSON.parse(localStorage.getItem('tasks'))

let initialState = data ? data : [];

let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      console.log(action);
      let newTask = {
        id: randomKey() + '-' + randomKey(),
        name: action.task.name,
        status: action.task.status
      }
      state.push(newTask);
      localStorage.setItem('staks', JSON.stringify(state));
      return [...state];
    default: return state;
  }
}


let randomKey = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

export default myReducer;