import { SET_TIME_TO_CALCULATE } from './constants';

const setTimeToCalculate = (timeToCalculate) => ({
  type: SET_TIME_TO_CALCULATE,
  timeToCalculate,
});

export default setTimeToCalculate;
