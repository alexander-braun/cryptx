import { SET_CSHIFT } from '../actions/constants'

export default function(state = 3, action) {
    switch(action.type) {
        case SET_CSHIFT: 
            return action.cShift
        default:
            return state
    }
}
