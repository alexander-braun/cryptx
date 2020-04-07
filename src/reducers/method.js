import { CHANGE_METHOD } from '../actions/constants'

const initialState = {
    method: 'skytale'
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CHANGE_METHOD:
            return {
                ...state,
                method: action.method
            }
        default:
            return state
    }
}
