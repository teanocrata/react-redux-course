import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {addTask} from 'redux/tasks/actions';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.formNodes = {};
  }

  refFn = (node) => {
    this.formNodes[node.name] = node;
  }

  clearForm() {
    Object.keys(this.formNodes).forEach(nodeName => this.formNodes[nodeName].value = '');
  }

  formSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addTask({
      name: this.formNodes.name.value,
      priority: + this.formNodes.priority.value,
      owner: this.formNodes.owner.value
    })
    this.clearForm();
  }
  render() {
    return (<form onSubmit={this.formSubmitHandler}>
      <fieldset>
        <legend>Create a task</legend>
        <div>
          <label htmlFor="name">Name:</label>
          <input ref={this.refFn} id="name" name="name" type="text"></input>
          <div>
            <label>Priority:</label>
            <input ref={this.refFn} id="priority" name="priority" type="number"></input>
            <label>Owner:</label>
            <input ref={this.refFn} id="owner" name="owner" type="text"></input>
          </div>
        </div>
        <button>Create task</button>
      </fieldset>
    </form>);
  }
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  addTask
};

export default connect(null, mapDispatchToProps)(TaskForm);
