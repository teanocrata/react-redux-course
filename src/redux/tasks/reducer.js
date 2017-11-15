import {ADD_TASK, REMOVE_TASK} from './constants'

const INITIAL_STATE = {
  list: []
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
        list: state.list.filter(task => task.is !== action.payload)
      }
    default:
      return state;
  }
}
