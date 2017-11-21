import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeTask } from 'redux/entities/actions'
import { closeModal } from 'redux/modal/actions'

class RemoveTaskDialog extends Component {

  removeTask() {
    const {removeTask, closeModal, taskId } = this.props;
    removeTask(taskId);
    closeModal();
  }
  render() {
    const {taskId} = this.props;
    return (
      <div className="w3-card-4">
        <p className="w3-padding-large">Are you sure that you want to remove the task {taskId}?</p>
        <div className="w3-bar w3-padding-large">
          <button onClick={()=>this.removeTask()} className="w3-button w3-red">Yes</button>
          <button onClick={()=>this.props.closeModal()} className="w3-button w3-teal">No</button>
        </div>
      </div>
    )
  }
}

RemoveTaskDialog.propTypes = {
  removeTask: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  removeTask,
  closeModal
}

export default  connect(null, mapDispatchToProps)(RemoveTaskDialog);
