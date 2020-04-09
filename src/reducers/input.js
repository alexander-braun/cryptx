import { UPDATE_INPUT } from '../actions/constants'

const input = (state = 'The quick brown fox jumps over the lazy dog.', action) => {
    switch(action.type) {
        case UPDATE_INPUT:
            return action.input
        default:
            return state
    }
}

export default input