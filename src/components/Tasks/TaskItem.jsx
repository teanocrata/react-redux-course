import React from 'react';
import PropTypes from 'prop-types'

const TaskItem = ({name, priority, owner}) => (
  <div className="task-item">
    <div>
      <div>{name} - <span>( {priority} )</span></div>
      <div>{owner}</div>
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

export default TaskItem;
