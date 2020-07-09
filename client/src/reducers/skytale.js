import { SET_SKYTALE_LENGTH } from '../actions/constants';
import { SET_RINGLENGTH } from '../actions/constants';

const initialState = {
  length: 1,
  ringLength: 12,
};

const skytale = (state = initialState, action) => {
  switch (action.type) {
    case SET_SKYTALE_LENGTH:
      return {
        ...state,
        length: action.length,
      };
    case SET_RINGLENGTH:
      return {
        ...state,
        ringLength: action.ringLength,
      };
    default:
      return state;
  }
};

export default skytale;
