import { CHANGE_METHOD } from '../actions/constants'

export default function(state = 'skytale', action) {
    switch(action.type) {
        case CHANGE_METHOD:
            return action.method
        default:
            return state
    }
}
