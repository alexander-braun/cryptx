import { PLAYSQUARE } from '../actions/constants';

const playsquare = (state = [''], action) => {
  switch (action.type) {
    case PLAYSQUARE:
      return action.playsquare;
    default:
      return state;
  }
};

export default playsquare;
