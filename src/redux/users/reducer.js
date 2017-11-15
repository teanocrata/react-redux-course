import {SET_USERS, ADD_USERS} from './constants'

const INITIAL_STATE = {
  list: [],
  loading: false,
  error: null
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        list: action.payload
      }
    case 'ADD_USER':
      return {
        ...state,
        list: [
          ...state.users,
          action.payload
        ]
      }
    default:
      return state;
  }
}
