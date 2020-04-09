import { SET_WORDBOOK } from '../actions/constants'

const wordbook = (state = null, action) => {
    switch(action.type) {
        case SET_WORDBOOK:
            return action.payload.data
        default:
            return state
    }
}

export default wordbook
