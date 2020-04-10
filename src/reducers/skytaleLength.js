import { SET_SKYTALE_LENGTH } from '../actions/constants'

const skytaleLength = (state = 1, action) => {
    switch(action.type) {
        case SET_SKYTALE_LENGTH: 
            return action.skytaleLength
        default:
            return state
    }
}

export default skytaleLength