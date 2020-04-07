import { TO_REPLACE_LETTER, REPLACE_LETTER } from "./constants"

export const toReplaceLetter = (toReplaceLetter) => ({
    type: TO_REPLACE_LETTER,
    payload: {
        toReplaceLetter
    }
})

export const replaceLetter = (replaceLetter) => ({
    type: REPLACE_LETTER,
    payload: {
        replaceLetter
    }
})

