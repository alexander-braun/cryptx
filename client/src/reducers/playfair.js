import { SET_KEYWORD_PLAYFAIR, PLAYSQUARE } from '../actions/constants';

const initialState = {
  keywordPlayfair: 'cipher',
  playsquare: [''],
};

const playfair = (state = initialState, action) => {
  switch (action.type) {
    case PLAYSQUARE:
      return {
        ...state,
        playsquare: action.playsquare,
      };
    case SET_KEYWORD_PLAYFAIR:
      return {
        ...state,
        keywordPlayfair: action.keywordPlayfair,
      };
    default:
      return state;
  }
};

export default playfair;
