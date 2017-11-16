import {createStore, applyMiddleware, compose} from 'redux';
import reducer from 'redux/reducer'
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'
import history from 'common/history';

const router = routerMiddleware(history);

const store = createStore(reducer, compose(
  applyMiddleware(router, thunk), typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension()
  : f => f));

export default store;
