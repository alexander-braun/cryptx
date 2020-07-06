import React from 'react';
import { connect } from 'react-redux';

//Actions
import { toggleSavePresetModal } from '../../../actions/toggleSavePresetModal';

//Components
import SavePresetAuthenticated from './SavePresetAuthenticated';
import LoadOrSavePresetUnauthenticated from './LoadOrSavePresetUnauthenticated';

const SavePreset = (props) => {
  const toggleModal = (e) => {
    if (e.target.className === 'modal-wrapper') {
      props.toggleSavePresetModal();
    }
  };
  if (props.isAuthenticated && props.savePresetModal) {
    return (
      <div className='modal-wrapper' onClick={(e) => toggleModal(e)}>
        <div className='modal'>
          <SavePresetAuthenticated />
        </div>
      </div>
    );
  } else if (props.savePresetModal) {
    return <LoadOrSavePresetUnauthenticated type={'save'} />;
  } else return null;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  savePresetModal: state.savePresetModal,
});

const mapActionsToProps = {
  toggleSavePresetModal,
};

export default connect(mapStateToProps, mapActionsToProps)(SavePreset);
