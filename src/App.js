import React, {Component} from 'react';
import './App.css';

import {createStore} from 'redux';

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

class App extends Component {
  render() {
    return (<div className="App">
      <h1>My redux first app!</h1>
    </div>);
  }
}

export default App;
