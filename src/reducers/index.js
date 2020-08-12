import { combineReducers } from 'redux'
import tasks from './tasks.js'
import isDisplayForm from './isDisplayForm.js'
import itemEditing from './itemEditing.js'

const myReducer = combineReducers({
  tasks,
  isDisplayForm,
  itemEditing
});

export default myReducer;