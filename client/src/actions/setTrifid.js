import { SET_TRIFID_KEY, SET_TRIFID_27TH_LETTER, SET_TRIFID_GROUP_SIZE } from './constants'

const setTrifidKey = trifidKey => ({
    type: SET_TRIFID_KEY,
    trifidKey
})

const setTrifid27thLetter = trifid27thLetter => ({
    type: SET_TRIFID_27TH_LETTER,
    trifid27thLetter
})

const setTrifidGroupSize = trifidGroupSize => ({
    type: SET_TRIFID_GROUP_SIZE,
    trifidGroupSize
})

export default { setTrifidKey, setTrifid27thLetter, setTrifidGroupSize }