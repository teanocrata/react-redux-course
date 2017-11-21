import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import { Link } from 'react-router-dom'

import {connect} from 'react-redux';
import {openModal} from 'redux/modal/actions';

const priorityClassName = ["task-item--high", "task-item--medium", "task-item--low"]

const TaskItem = ({id, name, priority, owner, openModal}) => (<div className={`task-item ${priorityClassName[priority]}`}>
  <div to={`/tasks/${id}`}>
    <Link to={`/tasks/${id}`}>{name}
      -
      <span>( {priority}
        )</span>
    </Link>
    <div>{owner}</div>
    <button onClick={()=>openModal('RemoveTaskDialog', {taskId: id})} className="task-item__btn w3-btn">🗑</button>
  </div>
</div>)

TaskItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  priority: PropTypes.number,
  owner: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired
}

TaskItem.defaultProps = {
  priority: 0
}
const mapDefaultToProps = {
  openModal
};
export default connect(null, mapDefaultToProps)(TaskItem);
