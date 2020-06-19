import { SET_IOC_OUTPUT } from './constants';

const setIocOutput = (output) => ({
  type: SET_IOC_OUTPUT,
  output,
});

export default setIocOutput;
