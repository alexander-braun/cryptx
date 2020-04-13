import { SET_KEYWORD_VIGENERE } from '../actions/constants'

const keywordVigenere = (state = 'cipher', action) => {
    switch(action.type) {
        case SET_KEYWORD_VIGENERE:
            return action.keywordVigenere
        default:
            return state
    }
}

export default keywordVigenere