import React from 'react';
import { connect } from 'react-redux';

//Actions
import { toggleLoadPresetModal } from '../../../actions/toggleLoadPresetModal';

//Components
import LoadPresetAuthenticated from './LoadPresetAuthenticated';
import LoadOrSavePresetUnauthenticated from './LoadOrSavePresetUnauthenticated';

const LoadPreset = (props) => {
  const toggleModal = (e) => {
    if (e.target.className === 'modal-wrapper') {
      props.toggleLoadPresetModal();
    }
  };
  if (props.isAuthenticated && props.loadPresetModal) {
    return (
      <div className='modal-wrapper' onClick={(e) => toggleModal(e)}>
        <div className='modal'>
          <LoadPresetAuthenticated />
        </div>
      </div>
    );
  } else if (props.loadPresetModal) {
    return <LoadOrSavePresetUnauthenticated type={'load'} />;
  } else return null;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loadPresetModal: state.loadPresetModal,
});

const mapActionsToProps = {
  toggleLoadPresetModal,
};

export default connect(mapStateToProps, mapActionsToProps)(LoadPreset);
