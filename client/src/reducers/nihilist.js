import {
  SET_NIHILIST_SQUARE,
  SET_CIPHER_NIHILIST,
  SET_KEYWORD_NIHILIST,
  SET_NIHILIST_PLAIN_NUMBERS,
  SET_NIHILIST_RUNNING_KEY,
} from '../actions/constants';

const initialState = {
  cipherNihilist: 'RUSSIAN',
  keywordNihilist: 'ZEBRAS',
  nihilistPlainNumbers: [],
  nihilistRunningKey: [],
  nihilistSquare: [],
};

const nihilist = (state = initialState, action) => {
  switch (action.type) {
    case SET_CIPHER_NIHILIST:
      return {
        ...state,
        cipherNihilist: action.cipherNihilist,
      };
    case SET_KEYWORD_NIHILIST:
      return {
        ...state,
        keywordNihilist: action.keywordNihilist,
      };
    case SET_NIHILIST_PLAIN_NUMBERS:
      return {
        ...state,
        nihilistPlainNumbers: action.nihilistPlainNumbers,
      };
    case SET_NIHILIST_RUNNING_KEY:
      return {
        ...state,
        nihilistRunningKey: action.nihilistRunningKey,
      };
    case SET_NIHILIST_SQUARE:
      return {
        ...state,
        nihilistSquare: action.nihilistSquare,
      };
    default:
      return state;
  }
};

export default nihilist;
