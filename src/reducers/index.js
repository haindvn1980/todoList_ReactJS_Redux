import { combineReducers } from 'redux'
import tasks from './tasks.js'
import isDisplayForm from './isDisplayForm.js'
import itemEditing from './itemEditing.js'
import filterTable from './filterTable.js'
import search from './search.js'
import sort from './sort.js'


const myReducer = combineReducers({
  tasks,
  isDisplayForm,
  itemEditing,
  filterTable,
  search,
  sort
});

export default myReducer;