import React from 'react';
import { ReactComponent as Caret } from './img/caret.svg';
import { connect } from 'react-redux';
import { toggleModal } from '../../../actions/toggleModal';
import { toggleDirection } from '../../../actions/toggleDirection';
import MethodNames from './EncryptionMethodNames';
import MethodCrackAvailability from './EncryptionMethodCrackAvailability';

const BlockHeadCenter = (props) => {
  /**
   * Switch Method Modal toggle
   */
  const toggleModal = () => {
    props.onModalToggle();
  };

  return (
    <div className='block-settings__head'>
      <button className='block-settings__head-text' onClick={toggleModal}>
        {MethodNames[props.method]} <Caret className='caret' />
      </button>
      <div className='block-settings__head-options'>
        <button
          value='encrypt'
          onClick={(evt) => {
            props.toggleDirection(evt.target.value);
          }}
          className={`block-head__option ${
            props.direction === 'encrypt'
              ? 'block-settings__head-option block-settings__head-option--selected'
              : 'block-settings__head-option'
          }`}
        >
          Encrypt
        </button>
        <button
          value='decrypt'
          onClick={(evt) => {
            props.toggleDirection(evt.target.value);
          }}
          className={
            props.direction === 'decrypt'
              ? 'block-settings__head-option block-settings__head-option--selected'
              : 'block-settings__head-option'
          }
        >
          Decrypt
        </button>
        {MethodCrackAvailability[props.method] ? (
          <button
            value='crack'
            onClick={(evt) => {
              props.toggleDirection(evt.target.value);
            }}
            className={
              props.direction === 'crack'
                ? 'block-settings__head-option block-settings__head-option--selected'
                : 'block-settings__head-option'
            }
          >
            Crack
          </button>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  modalOpen: state.modal,
  direction: state.direction,
  method: state.method,
});

const mapActionsToProps = {
  onModalToggle: toggleModal,
  toggleDirection: toggleDirection,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(React.memo(BlockHeadCenter));
