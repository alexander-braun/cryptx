import { SET_SKYTALE_PROJECTED_VALUE } from './constants';

const setSkytaleProjectedValue = (projectedValue) => ({
  type: SET_SKYTALE_PROJECTED_VALUE,
  projectedValue,
});

export default setSkytaleProjectedValue;
