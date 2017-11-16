import {
  FETCH_USERS_START,
  FETCH_USERS_END} from './constants'
import api from 'api'

export const fetchUsers = () => async (dispatch,
/* , getState */) => {
  dispatch(fetchUsersStart());
  const data = await api.fetchUsers();
  dispatch(fetchUsersEnd(data));
};

export const fetchUsersStart = () => ({type: FETCH_USERS_START});
export const fetchUsersEnd = (user) => ({type: FETCH_USERS_END, payload: user});
