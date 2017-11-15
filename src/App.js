import React, {Component} from 'react';
import TodoListPage from './components/pages/TodoListPage'
import './App.css';

import {connect} from 'react-redux';
import {fetchUsers} from './redux/users/actions'

export default class App extends Component {
  render() {
    return (<div className="App">
      <TodoListPage />
    </div>);
  }
}
