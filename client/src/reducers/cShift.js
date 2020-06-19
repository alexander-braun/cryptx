import { SET_CSHIFT } from '../actions/constants';

const cShift = (state = 3, action) => {
  switch (action.type) {
    case SET_CSHIFT:
      return action.cShift;
    default:
      return state;
  }
};

export default cShift;
