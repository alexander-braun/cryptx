import { WORDBOOK } from '../actions/constants'

export default function(state = null, action) {
    switch(action.type) {
        case WORDBOOK:
            return action.payload.data
        default:
            return state
    }
}
