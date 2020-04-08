import { TOGGLE_CASEFORMAT } from '../actions/constants'

export default function(state = 'maintain', action) {
    switch(action.type) {
        case TOGGLE_CASEFORMAT:
            return action.caseformat
        default:
            return state
    }
}
