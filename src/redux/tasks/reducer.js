import {ADD_TASK, REMOVE_TASK} from './constants'

import taskMock from 'mocks/tasks';

const INITIAL_STATE = {
  list: taskMock
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        list: [
          ...state.list,
          action.payload
        ]
      }
    case REMOVE_TASK:
      return {
        list: state.list.filter(task => task.id !== action.payload)
      }
    default:
      return state;
  }
}
