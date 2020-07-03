import { TOGGLE_FOREIGN_CHARS } from './constants';

const toggleForeignChars = (chars) => ({
  type: TOGGLE_FOREIGN_CHARS,
  chars,
});

export default toggleForeignChars;
