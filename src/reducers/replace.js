import { TO_REPLACE_LETTER, REPLACE_LETTER } from '../actions/constants'

const initialState = {
    toReplaceLetter: 'quick',
    replaceLetter: 'mean',
}

export default function(state = initialState, action) {
    switch(action.type) {
        case TO_REPLACE_LETTER:
            return {
                ...state,
                toReplaceLetter: action.payload.toReplaceLetter
            }
        case REPLACE_LETTER:
            return {
                ...state,
                replaceLetter: action.payload.replaceLetter
            }
        default:
            return state
    }
}
