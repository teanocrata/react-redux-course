import {
  SET_USERS,
  ADD_USER,
  SET_LOADING} from './constants'
import api from '../../api'

export const setUsers = (users => ({type: SET_USERS, payload: users}));

export const addUser = (users => ({type: ADD_USER, payload: users}));

export const setLoading = (loading => ({type: SET_LOADING, payload: loading}));

export const fetchUsers = () => async (dispatch,
/* , getState */) => {
  dispatch(setLoading(true));
  const data = await api.fetchUsers();
  dispatch(setUsers(data));
  dispatch(setLoading(false));
};
