import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import taskReducer from 'redux/tasks/reducer'

export default combineReducers({
  tasks: taskReducer
})
