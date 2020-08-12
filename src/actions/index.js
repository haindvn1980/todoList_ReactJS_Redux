import * as types from './../constants/ActionType'

export const listAll = () => {
  return {
    type: types.LIST_ALL
  }
};


export const saveTask = (task) => {
  return {
    type: types.SAVE_TASK,
    task
  }
}
export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM
  }
}
export const openForm = () => {
  return {
    type: types.OPEN_FORM
  }
}
export const closeForm = () => {
  return {
    type: types.CLOSE_FORM
  }
}
export const updateStatus = (id) => {
  return {
    type: types.UPDATE_STATUS,
    id
  }
}
export const deleteTask = (id) => {
  return {
    type: types.DELETE_TASK,
    id
  }
}
export const editTask = (task) => {
  return {
    type: types.EDIT_TASK,
    task
  }
}
