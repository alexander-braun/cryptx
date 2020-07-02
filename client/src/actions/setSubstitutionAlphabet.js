import { SET_SUBSTITUTION_ALPHABET } from './constants';

const setSubstitutionAlphabet = (substitutionAlphabet) => ({
  type: SET_SUBSTITUTION_ALPHABET,
  substitutionAlphabet,
});

export default setSubstitutionAlphabet;
