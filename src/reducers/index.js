import { combineReducers } from 'redux'
import tasks from './tasks.js'
const myReducer = combineReducers({
  tasks //tasks:tasks
});

export default myReducer;