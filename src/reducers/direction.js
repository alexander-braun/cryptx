import { TOGGLE_DIRECTION } from '../actions/constants'

const direction = (state = 'encrypt', action) => {
    switch(action.type) {
        case TOGGLE_DIRECTION:
            return action.direction
        default:
            return state
    }
}

export default direction