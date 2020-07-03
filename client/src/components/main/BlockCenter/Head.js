import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Assets
import { ReactComponent as Caret } from './img/caret.svg';

import { EncryptionMethodsDetails } from './EncryptionMethodsDetails';

//Actions
import { toggleModal } from '../../../actions/toggleModal';
import { toggleDirection } from '../../../actions/toggleDirection';

const Head = (props) => {
  return (
    <div className='block-settings__head'>
      <button
        className='block-settings__head-caret'
        onClick={() => props.onModalToggle()}
      >
        {EncryptionMethodsDetails[props.method].display}
        <Caret className='caret' />
      </button>
      <div className='block-settings__head-options'>
        <button
          value='encrypt'
          onClick={(evt) => {
            props.toggleDirection(evt.target.value);
          }}
          className={`block-settings__head-option ${
            props.direction === 'encrypt' &&
            'block-settings__head-option--selected'
          }`}
        >
          Encrypt
        </button>
        <button
          value='decrypt'
          onClick={(evt) => {
            props.toggleDirection(evt.target.value);
          }}
          className={`block-settings__head-option ${
            props.direction === 'decrypt' &&
            'block-settings__head-option--selected'
          }`}
        >
          Decrypt
        </button>
        {EncryptionMethodsDetails[props.method].crack ? (
          <button
            value='crack'
            onClick={(evt) => {
              props.toggleDirection(evt.target.value);
            }}
            className={`block-settings__head-option ${
              props.direction === 'crack' &&
              'block-settings__head-option--selected'
            }`}
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

Head.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  onModalToggle: PropTypes.func.isRequired,
  toggleDirection: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(React.memo(Head));
