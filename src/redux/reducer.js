import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import entitiesReducer from 'redux/entities/reducer'
import modalReducer from 'redux/modal/reducer'

export default combineReducers({
  entities: entitiesReducer,
  modal: modalReducer,
  router: routerReducer
})
