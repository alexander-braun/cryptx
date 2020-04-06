import { TOGGLE_MODAL } from '../actions/constants'

const initialState = {
    modalOpen: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                modalOpen: !state.modalOpen
            }
        default:
            return state
    }
}
