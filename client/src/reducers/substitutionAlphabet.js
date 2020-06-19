import { SET_SUBSTITUTION_ALPHABET } from '../actions/constants';

let initialState = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  e: 'e',
  f: 'f',
  g: 'g',
  h: 'h',
  i: 'i',
  j: 'j',
  k: 'k',
  l: 'l',
  m: 'm',
  n: 'n',
  o: 'o',
  p: 'p',
  q: 'q',
  r: 'r',
  s: 's',
  t: 't',
  u: 'u',
  v: 'v',
  w: 'w',
  x: 'x',
  y: 'y',
  z: 'z',
};

const substitutionAlphabet = (state = initialState, action) => {
  let parent = action.substParent;
  let value = action.substValue;

  switch (action.type) {
    case SET_SUBSTITUTION_ALPHABET:
      const newState = { ...state };
      newState[parent] = value;
      return newState;
    default:
      return state;
  }
};

export default substitutionAlphabet;
