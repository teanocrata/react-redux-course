import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import PropTypes from 'prop-types'

const TaskList = ({children}) => (<TransitionGroup component="ul" className='task-list  w3-ul'>

  {
    React.Children.map(children, child => <CSSTransition timeout={200} classNames="fade">
      <li className="w3-card">{child}</li>
    </CSSTransition>)
  }

</TransitionGroup>)

TaskList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
}

export default TaskList;
