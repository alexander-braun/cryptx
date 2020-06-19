import { UPDATE_ALPHABET } from '../actions/constants';
import { SET_ALPHABET_ACTIVE } from '../actions/constants';

const initialState = {
  alphabet: 'abcdefghijklmnopqrstuvwxyz',
  active: false,
};

const alphabet = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ALPHABET:
      return {
        ...state,
        alphabet: action.new_alphabet,
      };
    case SET_ALPHABET_ACTIVE:
      return {
        ...state,
        active: action.active,
      };
    default:
      return state;
  }
};

export default alphabet;
