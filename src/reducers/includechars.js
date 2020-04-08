import { TOGGLE_INCLUDE_CHARS } from '../actions/constants'

export default function(state = 'include', action) {
    switch(action.type) {
        case TOGGLE_INCLUDE_CHARS:
            return action.chars
        default:
            return state
    }
}
