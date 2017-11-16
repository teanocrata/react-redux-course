import React, {Component} from 'react'
import TaskList from 'components/Tasks/TaskList'
import TaskForm from 'components/Tasks/TaskForm'
import PropTypes from 'prop-types'

import {connect} from 'react-redux';

class TodoListPage extends Component {
  componentDidCatch(error, description){console.log(description);}
  render() {
    return (<div>
      <TaskList tasks={this.props.tasks}/>
      <TaskForm/>
    </div>)
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = ({tasks}) => ({tasks: tasks.list})

export default connect(mapStateToProps, null)(TodoListPage);
