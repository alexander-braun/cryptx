import { SET_PRESET_NAME } from '../actions/constants';

const presetName = (state = '', action) => {
  switch (action.type) {
    case SET_PRESET_NAME:
      return action.presetName;
    default:
      return state;
  }
};

export default presetName;
