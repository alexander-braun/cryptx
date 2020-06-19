import { SET_CIPHER_NIHILIST } from '../actions/constants';

const cipherNihilist = (state = 'RUSSIAN', action) => {
  switch (action.type) {
    case SET_CIPHER_NIHILIST:
      return action.cipherNihilist;
    default:
      return state;
  }
};

export default cipherNihilist;
