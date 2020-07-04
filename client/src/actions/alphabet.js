import { SET_ALPHABET_ACTIVE, UPDATE_ALPHABET } from './constants';

export const setAlphabetActive = (active) => ({
  type: SET_ALPHABET_ACTIVE,
  active,
});

export const updateAlphabet = (new_alphabet) => ({
  type: UPDATE_ALPHABET,
  new_alphabet,
});
