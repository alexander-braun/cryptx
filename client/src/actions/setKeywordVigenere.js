import { SET_KEYWORD_VIGENERE } from "./constants"

const setKeywordVigenere = keywordVigenere => ({
    type: SET_KEYWORD_VIGENERE,
    keywordVigenere
})

export default setKeywordVigenere