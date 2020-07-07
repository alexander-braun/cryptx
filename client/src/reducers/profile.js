import {
  GET_PROFILE,
  PROFILE_ERROR,
  DELETE_PROFILE,
} from '../actions/constants';

const initialState = {
  profile: null,
  loading: true,
  error: {},
  presets: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DELETE_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
