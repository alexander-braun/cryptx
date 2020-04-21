import { SET_NIHILIST_PLAIN_NUMBERS } from "../actions/constants"

const nihilistPlainNumbers = (state=[], action) => {
    switch(action.type) {
        case SET_NIHILIST_PLAIN_NUMBERS:
            return action.nihilistPlainNumbers
        default:
            return state
    }
}

export default nihilistPlainNumbers