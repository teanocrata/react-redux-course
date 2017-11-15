import {SET_USERS, ADD_USER} from './constants'

export const setUsers = (users => ({
  type: SET_USERS,
  payload: users
}))

export const addUser = (users => ({
  type: ADD_USER,
  payload: users
}))
