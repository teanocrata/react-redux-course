import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RemoveTaskDialog from './RemoveTaskDialog';

import {connect} from 'react-redux';
import { getModal } from 'redux/modal/reducer';
import { closeModal } from 'redux/modal/actions';

const MODAL_COMPONENTS = {
  RemoveTaskDialog
};

class Modal extends Component {
  render() {
    const {child, childProps} = this.props;
    const ModalChild = MODAL_COMPONENTS[this.props.child] || null;
    return (
      child ? <section style={{display: 'block'}} className="w3-modal">
      <div className="w3-modal-content">
        <button onClick={this.props.closeModal} className="w3-btn w3-display-topright">x</button>
        {<ModalChild {...childProps}/>}
      </div>

    </section> : null)
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  child: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  childProps: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  ...getModal(state)
});

const mapDispatchToProps = { closeModal };

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
