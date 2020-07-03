import { TOGGLE_FOREIGN_CHARS } from '../actions/constants';

const foreignChars = (state = 'include', action) => {
  switch (action.type) {
    case TOGGLE_FOREIGN_CHARS:
      return action.chars;
    default:
      return state;
  }
};

export default foreignChars;
