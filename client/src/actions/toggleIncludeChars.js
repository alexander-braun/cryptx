import { TOGGLE_INCLUDE_CHARS } from './constants';

const toggleChars = (chars) => ({
  type: TOGGLE_INCLUDE_CHARS,
  chars,
});

export default toggleChars;
