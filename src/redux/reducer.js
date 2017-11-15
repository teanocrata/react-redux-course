import {SET_USERS, ADD_USERS} from './constants'

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: null
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'ADD_USER':
      return {
        ...state,
        users: [
          ...state.users,
          action.payload
        ]
      }
    default:
      return state;
  }
}
