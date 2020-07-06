import { TOGGLE_LOAD_PRESETS_MODAL } from '../actions/constants';

const loadPresetModal = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_LOAD_PRESETS_MODAL:
      return !state;
    default:
      return state;
  }
};

export default loadPresetModal;
