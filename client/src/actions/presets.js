import {
  ADD_PRESET,
  LOAD_PRESETS,
  PRESET_ERROR,
  DELETE_PRESET_ERROR,
  DELETE_PRESET_SUCCESS,
} from './constants';
import axios from 'axios';

//Add Preset
export const addPreset = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('./api/presets', formData, config);
    dispatch({
      type: ADD_PRESET,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRESET_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Load all presets
export const loadPresets = () => async (dispatch) => {
  try {
    const res = await axios.get('./api/presets');
    dispatch({
      type: LOAD_PRESETS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRESET_ERROR,
    });
  }
};

//Delete a preset
export const deletePreset = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`./api/presets/${id}`);
    dispatch({
      type: DELETE_PRESET_SUCCESS,
      payload: res.data,
      id: id,
    });
  } catch (error) {
    console.error('ERROR', error);
    dispatch({
      type: DELETE_PRESET_ERROR,
    });
  }
};
