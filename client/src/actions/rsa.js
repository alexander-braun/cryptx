import {
  SET_PRIME_1,
  SET_PRIME_2,
  SET_RSA_D,
  SET_RSA_E,
  SET_RSA_N,
  SET_RSA_PHI,
  SET_TIME_TO_CALCULATE,
} from './constants';

export const setPrime1 = (prime1) => ({
  type: SET_PRIME_1,
  prime1,
});

export const setPrime2 = (prime2) => ({
  type: SET_PRIME_2,
  prime2,
});

export const setRsaD = (d) => ({
  type: SET_RSA_D,
  d,
});

export const setRsaE = (e) => ({
  type: SET_RSA_E,
  e,
});

export const setRsaN = (n) => ({
  type: SET_RSA_N,
  n,
});

export const setRsaPhi = (phi) => ({
  type: SET_RSA_PHI,
  phi,
});

export const setTimeToCalculate = (timeToCalculate) => ({
  type: SET_TIME_TO_CALCULATE,
  timeToCalculate,
});
