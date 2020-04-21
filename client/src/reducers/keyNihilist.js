import { SET_KEYWORD_NIHILIST } from '../actions/constants'

const keywordNihilist = (state = 'ZEBRAS', action) => {
    switch(action.type) {
        case SET_KEYWORD_NIHILIST:
            return action.keywordNihilist
        default:
            return state
    }
}

export default keywordNihilist