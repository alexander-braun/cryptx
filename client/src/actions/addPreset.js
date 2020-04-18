
import { ADD_PRESET, LOAD_PRESETS, PRESET_ERROR } from './constants'
import axios from 'axios'

//Add Preset
export const addPreset = (formData) => async dispatch => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('./api/presets', formData, config)
        dispatch({
            type: ADD_PRESET,
            payload: res.data
        })

    } catch(error) {
        dispatch({
            type: PRESET_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
    }
} 

//Load all presets
export const loadPresets = () => async dispatch => {
    try {
        const res = await axios.get('./api/presets')
        dispatch({
            type: LOAD_PRESETS,
            payload: res.data
        })
    } catch(error) {
        dispatch({
            type: PRESET_ERROR
        })
    }
}