import { TOGGLE_SAVE_PRESETS_MODAL } from '../actions/constants';

const savePresetModal = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SAVE_PRESETS_MODAL:
      return !state;
    default:
      return state;
  }
};

export default savePresetModal;
