import React, {Component} from 'react';
import './App.css';

import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My redux first app!</h1>
        <ul>
          {this.props.users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>);
  }
}

const mapStateToProps = ({users, loading}) => ({users, loading})

export default connect(mapStateToProps)(App);
