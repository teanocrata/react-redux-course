import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

import {connect} from 'react-redux';
import {removeTask} from 'redux/entities/actions';

const priorityClassName = ["task-item--high", "task-item--medium", "task-item--low"]

const TaskItem = ({id, name, priority, owner, removeTask}) => (<div className={`task-item ${priorityClassName[priority]}`}>
  <div>
    <div>{name}
      -
      <span>( {priority}
        )</span>
    </div>
    <div>{owner}</div>
    <button onClick={()=>removeTask(id)} className="task-item__btn">🗑</button>
  </div>
</div>)

TaskItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  priority: PropTypes.number,
  owner: PropTypes.string.isRequired,
  removeTask: PropTypes.func.isRequired
}

TaskItem.defaultProps = {
  priority: 0
}
const mapDefaultToProps = {
  removeTask
};
export default connect(null, mapDefaultToProps)(TaskItem);
