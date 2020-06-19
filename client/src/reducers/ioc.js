import { SET_IOC_INPUT, SET_IOC_OUTPUT } from '../actions/constants';

const initialState = {
  input: 0,
  output: 0,
};

const ioc = (state = initialState, action) => {
  switch (action.type) {
    case SET_IOC_OUTPUT:
      return {
        ...state,
        output: action.output,
      };
    case SET_IOC_INPUT:
      return {
        ...state,
        input: action.input,
      };
    default:
      return state;
  }
};

export default ioc;
