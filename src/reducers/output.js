import { UPDATE_OUTPUT } from '../actions/constants'

export default function(state = '', action) {
    switch(action.type) {
        case UPDATE_OUTPUT:
            return action.output
        default:
            return state
    }
}
