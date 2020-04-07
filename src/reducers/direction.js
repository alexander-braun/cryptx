import { TOGGLE_DIRECTION } from '../actions/constants'

const initialState = {
    direction: 'encrypt'
}

export default function(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_DIRECTION:
            return {
                ...state,
                direction: action.direction
            }
        default:
            return state
    }
}
