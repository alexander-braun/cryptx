import { UPDATE_INPUT } from '../actions/constants'

const initialState = {
    inputValue: 'The quick brown fox jumps over the lazy dog.'
}

export default function(state = initialState, action) {
    switch(action.type) {
        case UPDATE_INPUT:
            return {
                ...state,
                inputValue: action.input
            }
        default:
            return state
    }
}
