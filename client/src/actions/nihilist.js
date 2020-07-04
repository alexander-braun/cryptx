import {
  SET_NIHILIST_SQUARE,
  SET_NIHILIST_RUNNING_KEY,
  SET_CIPHER_NIHILIST,
  SET_KEYWORD_NIHILIST,
  SET_NIHILIST_PLAIN_NUMBERS,
} from './constants';

export const setCipherNihilist = (cipherNihilist) => ({
  type: SET_CIPHER_NIHILIST,
  cipherNihilist,
});

export const setKeywordNihilist = (keywordNihilist) => ({
  type: SET_KEYWORD_NIHILIST,
  keywordNihilist,
});

export const setNihilistPlainNumbers = (nihilistPlainNumbers) => ({
  type: SET_NIHILIST_PLAIN_NUMBERS,
  nihilistPlainNumbers,
});

export const setNihilistRunningKey = (nihilistRunningKey) => ({
  type: SET_NIHILIST_RUNNING_KEY,
  nihilistRunningKey,
});

export const setNihilistSquare = (nihilistSquare) => ({
  type: SET_NIHILIST_SQUARE,
  nihilistSquare,
});
