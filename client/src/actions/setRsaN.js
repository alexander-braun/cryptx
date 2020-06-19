import { SET_RSA_N } from './constants';

const setRsaN = (n) => ({
  type: SET_RSA_N,
  n,
});

export default setRsaN;
