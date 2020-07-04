import { SET_KEYWORD_PLAYFAIR, PLAYSQUARE } from './constants';

export const setKeywordPlayfair = (keywordPlayfair) => ({
  type: SET_KEYWORD_PLAYFAIR,
  keywordPlayfair,
});

export const setPlaysquare = (playsquare) => ({
  type: PLAYSQUARE,
  playsquare,
});
