import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';


const INITIAL_STATE = {
  users: [],
  loading: false,
  error: null
}

function reducer(state = INITIAL_STATE, action) {
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

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({
  type: 'SET_USERS',
  payload: [
    {
      id: 23,
      name: 'Pepito',
      age: 32
    }, {
      id: 11,
      name: 'Manolín',
      age: 20
    }
  ]
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
