import { SET_CASE_TRANSFORM_CHOICE } from '../actions/constants';

const caseTransformChoice = (state = 'lower', action) => {
  switch (action.type) {
    case SET_CASE_TRANSFORM_CHOICE:
      return action.case_choice;
    default:
      return state;
  }
};

export default caseTransformChoice;
