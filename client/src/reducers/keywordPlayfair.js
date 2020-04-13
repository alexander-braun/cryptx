import { SET_KEYWORD_PLAYFAIR } from '../actions/constants'

const keywordPlayfair = (state = 'cipher', action) => {
    switch(action.type) {
        case SET_KEYWORD_PLAYFAIR:
            return action.keywordPlayfair
        default:
            return state
    }
}

export default keywordPlayfair