import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

import { connect } from 'react-redux';
import {removeTask} from 'redux/tasks/actions';

const priorityClassName = [
  "task-item--high",
  "task-item--medium",
  "task-item--low"
]

const TaskItem = ({name, priority, owner}) => (
  <div className={`task-item ${priorityClassName[priority]}`}>
    <div>
      <div>{name} - <span>( {priority} )</span></div>
      <div>{owner}</div>
      <button>🗑</button>
    </div>
  </div>
)

TaskItem.propTypes = {
  name: PropTypes.string.isRequired,
  priority: PropTypes.number,
  owner: PropTypes.string.isRequired
}

TaskItem.defaultProps = {
  priority: 0
}
const mapDefaultToProps = { removeTask };
export default connect(null, mapDefaultToProps)(TaskItem);
