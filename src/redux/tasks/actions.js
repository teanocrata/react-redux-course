import {
  ADD_TASK,
  REMOVE_TASK}
from './constants'

let id = 0;

// const generatedId = ((first) => () => first++)(0)

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: {
      id: id++,
      ...task
    }
  }
};
export const removeTask = (taskId) => ({type: REMOVE_TASK, payload: taskId});
