import { UPDATE_INPUT } from '../actions/constants'

export default function(state = 'The quick brown fox jumps over the lazy dog.', action) {
    switch(action.type) {
        case UPDATE_INPUT:
            return action.input
        default:
            return state
    }
}
