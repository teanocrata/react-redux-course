import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'
import TaskItem from './TaskItem'

const TaskList = ({tasks}) => (
  <TransitionGroup component="ul" className='task-list  w3-ul'>
    {
      tasks.map((task) =>
      <CSSTransition key={task.id} timeout={200} classNames="fade">
        <li className="w3-card">
          <TaskItem {...task}/>
        </li>
      </CSSTransition>)
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
