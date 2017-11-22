import React, {Component} from 'react'
import TaskList from 'components/Tasks/TaskList'
import TaskForm from 'components/Tasks/TaskForm'
import PropTypes from 'prop-types'
import { getTasks } from 'redux/entities/reducer'
import TaskItem from 'components/Tasks/TaskItem'


import {connect} from 'react-redux';

class TodoListPage extends Component {
  componentDidCatch(error, description){console.log(description);}
  render() {
    return (<div>
      <TaskList/>
        {this.props.tasks.map(task => <TaskItem key={task.id} {...task}/>)}
      <TaskForm/>
    </div>)
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = (state) => ({tasks: getTasks(state)})

export default connect(mapStateToProps, null)(TodoListPage);
