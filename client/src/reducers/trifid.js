import {
  SET_TRIFID_KEY,
  SET_TRIFID_27TH_LETTER,
  SET_TRIFID_GROUP_SIZE,
  SET_TRIFID_LAYERS,
  SET_TRIFID_GROUPS,
} from '../actions/constants';

const initialState = {
  trifidKey: 'FELIX MARIE DELASTELLE',
  trifid27thLetter: '+',
  trifidGroupSize: 5,
  trifidLayers: null,
  trifidGroups: null,
};

const trifid = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRIFID_GROUPS:
      return {
        ...state,
        trifidGroups: action.trifidGroups,
      };
    case SET_TRIFID_KEY:
      return {
        ...state,
        trifidKey: action.trifidKey,
      };
    case SET_TRIFID_LAYERS:
      return {
        ...state,
        trifidLayers: action.trifidLayers,
      };
    case SET_TRIFID_GROUP_SIZE:
      return {
        ...state,
        trifidGroupSize: action.trifidGroupSize,
      };
    case SET_TRIFID_27TH_LETTER:
      return {
        ...state,
        trifid27thLetter: action.trifid27thLetter,
      };
    default:
      return state;
  }
};

export default trifid;
