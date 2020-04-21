import { SET_NIHILIST_SQUARE } from "../actions/constants"

const nihilistSquare = (state=[], action) => {
    switch(action.type) {
        case SET_NIHILIST_SQUARE:
            return action.nihilistSquare
        default:
            return state
    }
}

export default nihilistSquare