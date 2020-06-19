import { UPDATE_OUTPUT } from '../actions/constants';

const output = (state = '', action) => {
  switch (action.type) {
    case UPDATE_OUTPUT:
      return action.output;
    default:
      return state;
  }
};

export default output;
