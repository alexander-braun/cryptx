import { SET_SUBSTITUTION_ALPHABET } from './constants';

const setSubstitutionAlphabet = (substParent, substValue) => ({
  type: SET_SUBSTITUTION_ALPHABET,
  substParent,
  substValue,
});

export default setSubstitutionAlphabet;
