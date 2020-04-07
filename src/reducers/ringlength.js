import { SET_RINGLENGTH } from '../actions/constants'

export default function(state = 8, action) {
    switch(action.type) {
        case SET_RINGLENGTH: 
            return action.length
        default:
            return state
    }
}
