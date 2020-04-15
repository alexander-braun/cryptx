import { TOGGLE_ANALYSIS_MODAL } from '../actions/constants'

const analysisModal = (state = false, action) => {
    switch(action.type) {
        case TOGGLE_ANALYSIS_MODAL:
            return !state
        default:
            return state
    }
}

export default analysisModal