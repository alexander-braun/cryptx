import {
  SET_TO_REPLACE_LETTER,
  SET_REPLACE_LETTER,
} from '../actions/constants';

const initialState = {
  toReplaceLetter: 'quick',
  replaceLetter: 'mean',
};

const replace = (state = initialState, action) => {
  switch (action.type) {
    case SET_TO_REPLACE_LETTER:
      return {
        ...state,
        toReplaceLetter: action.payload.toReplaceLetter,
      };
    case SET_REPLACE_LETTER:
      return {
        ...state,
        replaceLetter: action.payload.replaceLetter,
      };
    default:
      return state;
  }
};

export default replace;
