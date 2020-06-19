import { SET_OTP_KEY } from './constants';

const setOtpKey = (otpKey) => ({
  type: SET_OTP_KEY,
  otpKey,
});

export default setOtpKey;
