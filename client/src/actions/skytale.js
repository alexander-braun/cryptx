import { SET_SKYTALE_LENGTH, SET_RINGLENGTH } from './constants';

export const setSkytaleLength = (length) => ({
  type: SET_SKYTALE_LENGTH,
  length,
});

export const setRinglength = (ringLength) => ({
  type: SET_RINGLENGTH,
  ringLength,
});
