import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'
import TaskItem from './TaskItem'

const TaskList = ({tasks}) => (
  <TransitionGroup component="ul" className='task-list'>
    {
      tasks.map((task) => <li id={task.id}><TaskItem {...task}/></li>)
    }
  </TransitionGroup>
)

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object)
}

TaskList.defaultProps = {
  tasks: []
}

export default TaskList;
