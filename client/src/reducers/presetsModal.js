import { TOGGLE_PRESETS_MODAL } from '../actions/constants';

const initialState = {
  modalOpen: false,
  target: null,
};

const presetsModal = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PRESETS_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen,
        target: action.target,
      };
    default:
      return state;
  }
};

export default presetsModal;
