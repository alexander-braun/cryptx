import { SET_TO_REPLACE_LETTER, SET_REPLACE_LETTER } from "./constants"

export const toReplaceLetter = (toReplaceLetter) => ({
    type: SET_TO_REPLACE_LETTER,
    payload: {
        toReplaceLetter
    }
})

export const replaceLetter = (replaceLetter) => ({
    type: SET_REPLACE_LETTER,
    payload: {
        replaceLetter
    }
})

