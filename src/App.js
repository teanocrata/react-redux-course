import React, {Component} from 'react';
import './App.css';

import {connect} from 'react-redux';
import {setUsers} from './redux/actions'

import usersMock from './mocks/users.json'

class App extends Component {

  getUsers = () => {
    this.props.setUsers(usersMock);
  }

  render() {
    return (
      <div className="App">
        <h1>My redux first app!</h1>
        <button onClick={this.getUsers}>Get users</button>
        <ul>
          {this.props.users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>);
  }
}

const mapStateToProps = ({users, loading}) => ({users, loading})

const mapDispatchToProps = {
  setUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
