import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Actions
import { changeMethod } from '../../../actions/changeMethod';
import { toggleModal } from '../../../actions/toggleModal';

const MethodChoiceButton = (props) => {
  return (
    <li className='modal__list-item modal__list-item--row'>
      <button
        className='modal__encryption-method'
        onClick={(e) => {
          e.preventDefault();
          props.toggleModal();
          props.changeMethod(props.name);
        }}
      >
        <div className='modal__method-wrapper'>
          <div
            className={
              props.featured ? 'modal__featured-sign' : 'modal__unfeatured-sign'
            }
          >
            {props.featured ? 'F' : 'N'}
          </div>
          <div className='modal__chip-text'>{props.fullName}</div>
        </div>
      </button>
    </li>
  );
};

const mapActionsToProps = {
  changeMethod: changeMethod,
  toggleModal: toggleModal,
};

MethodChoiceButton.propTypes = {
  changeMethod: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  featured: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
};

export default connect(null, mapActionsToProps)(MethodChoiceButton);
