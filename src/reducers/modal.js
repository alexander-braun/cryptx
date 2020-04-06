import { SHOW_MODAL, HIDE_MODAL } from '../actions/constants'

const initialState = {
    modalOpen: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_MODAL:
            return {
                modalOpen: true
            }
        case HIDE_MODAL:
            return {
                modalOpen: false
            }
        default:
            return state
    }
}
