
import { ADD_PRESET, PRESET_ERROR, LOAD_PRESETS, DELETE_PRESET_ERROR, DELETE_PRESET_SUCCESS } from '../actions/constants'

const initialState = []
Object.freeze(initialState)

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_PRESET:
            return [...state, action.payload]
        case LOAD_PRESETS:
            return action.payload
        case PRESET_ERROR:
        case DELETE_PRESET_ERROR:
            return {
                ...state
            }
        case DELETE_PRESET_SUCCESS:
            return state.filter(preset => preset._id !== action.id)
        default: 
            return state
    }
}