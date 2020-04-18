
import { ADD_PRESET, PRESET_ERROR, LOAD_PRESETS } from '../actions/constants'

const initialState = []

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_PRESET:
            return [...state, action.payload]
        case LOAD_PRESETS:
            return action.payload
        case PRESET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state
    }
}