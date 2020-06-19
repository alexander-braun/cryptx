import { SET_PRESET_NAME } from './constants';

const setPresetName = (presetName) => ({
  type: SET_PRESET_NAME,
  presetName,
});

export default setPresetName;
