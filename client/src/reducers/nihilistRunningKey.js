import { SET_NIHILIST_RUNNING_KEY } from '../actions/constants';

const nihilistRunningKey = (state = [], action) => {
  switch (action.type) {
    case SET_NIHILIST_RUNNING_KEY:
      return action.nihilistRunningKey;
    default:
      return state;
  }
};

export default nihilistRunningKey;
