import { SET_OTP_KEY } from '../actions/constants';

const otpKey = (state = '', action) => {
  switch (action.type) {
    case SET_OTP_KEY:
      return action.otpKey;
    default:
      return state;
  }
};

export default otpKey;
