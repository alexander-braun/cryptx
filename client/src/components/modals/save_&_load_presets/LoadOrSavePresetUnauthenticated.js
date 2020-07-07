import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Actions
import { toggleLoadPresetModal } from '../../../actions/toggleLoadPresetModal';
import { toggleSavePresetModal } from '../../../actions/toggleSavePresetModal';

//MUI
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const LoadOrSavePresetUnauthenticated = (props) => {
  const toggleModalOnWrapperClick = (e) => {
    if (e.target.className === 'modal-wrapper') {
      if (props.savePresetModal) {
        props.toggleSavePresetModal();
      } else {
        props.toggleLoadPresetModal();
      }
    }
  };

  const toggleSaveLoadPresetModals = () => {
    if (props.savePresetModal) {
      props.toggleSavePresetModal();
    } else {
      props.toggleLoadPresetModal();
    }
  };

  return (
    <div
      className='modal-wrapper'
      onClick={(e) => toggleModalOnWrapperClick(e)}
    >
      <div className='modal'>
        <div className='modal__header modal__header--space-between'>
          {props.type === 'load' ? 'Load a Preset' : 'Save as Preset'}
          <button className='modal__close-btn'>
            <HighlightOffIcon onClick={() => toggleSaveLoadPresetModals()} />
          </button>
        </div>
        <div className='modal__content modal__content--message'>
          <SentimentVeryDissatisfiedIcon style={{ fontSize: '12rem' }} />
          <h2 className='modal__message'>
            Please Login or Signup to use this feature!
          </h2>
        </div>
        <div className='modal__bottom-wrapper modal__bottom-wrapper--split-buttons'>
          <Link
            className='modal__link'
            onClick={() => toggleSaveLoadPresetModals()}
            to='/Login'
          >
            Login
          </Link>
          <Link
            className='modal__link'
            onClick={() => toggleSaveLoadPresetModals()}
            to='/Signup'
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  savePresetModal: state.savePresetModal,
  loadPresetModal: state.loadPresetModal,
});

const mapActionsToProps = {
  toggleLoadPresetModal,
  toggleSavePresetModal,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LoadOrSavePresetUnauthenticated);
