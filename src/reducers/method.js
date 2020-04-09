import { CHANGE_METHOD } from '../actions/constants'

const method = (state = 'skytale', action) => {
    switch(action.type) {
        case CHANGE_METHOD:
            return action.method
        default:
            return state
    }
}

export default method
