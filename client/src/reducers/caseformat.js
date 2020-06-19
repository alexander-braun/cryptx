import { TOGGLE_CASEFORMAT } from '../actions/constants';

const caseformat = (state = 'maintain', action) => {
  switch (action.type) {
    case TOGGLE_CASEFORMAT:
      return action.caseformat;
    default:
      return state;
  }
};

export default caseformat;
