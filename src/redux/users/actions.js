import {SET_USERS, ADD_USER} from './constants'
import api from '../../api'

export const setUsers = (users => ({type: SET_USERS, payload: users}));

export const addUser = (users => ({type: ADD_USER, payload: users}));

export const fetchUsers = () => async (dispatch,
/* , getState */) => {
  const data = await api.fetchUsers();
  dispatch(setUsers(data));
};
