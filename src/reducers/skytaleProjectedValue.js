import { SET_SKYTALE_PROJECTED_VALUE } from '../actions/constants'

const skytaleProjectedValue = (state = '', action) => {
    switch(action.type) {
        case SET_SKYTALE_PROJECTED_VALUE:
            return action.skytaleProjectedValue
        default: 
            return state
    }
}

export default skytaleProjectedValue