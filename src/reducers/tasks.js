import * as types from './../constants/ActionType'

let data = JSON.parse(localStorage.getItem('tasks'))

let initialState = data ? data : [];

let myReducer = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case types.LIST_ALL:
      return state;

    case types.SAVE_TASK:
      let newTask = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status
      }
      //console.log(action);
      if (newTask.id) {
        index = findIndex(state, newTask.id);
        if (index === -1) {
          state[index] = newTask;
        }
      } else {
        newTask.id = randomKey() + '-' + randomKey();
        state.push(newTask);
      }
      localStorage.setItem('staks', JSON.stringify(state));
      return [...state];

    case types.UPDATE_STATUS:
      index = findIndex(state, action.id);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          status: !state[index].status
        }
        localStorage.setItem('tasks', JSON.stringify(state));
      }
      return [...state];

    case types.DELETE_TASK:
      index = findIndex(state, action.id);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(state));
      }
      return [...state];

    default: return state;
  }
}


let randomKey = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

let findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) { result = index; }
  });
  return result;
}


export default myReducer;