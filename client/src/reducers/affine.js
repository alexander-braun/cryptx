import { SET_AFFINE_ALPHA, SET_AFFINE_BETA } from '../actions/constants';

const initialState = {
  affine_alpha: 5,
  affine_beta: 1,
};

const affine = (state = initialState, action) => {
  switch (action.type) {
    case SET_AFFINE_ALPHA:
      return {
        ...state,
        affine_alpha: action.affine_alpha,
      };
    case SET_AFFINE_BETA:
      return {
        ...state,
        affine_beta: action.affine_beta,
      };
    default:
      return state;
  }
};

export default affine;
