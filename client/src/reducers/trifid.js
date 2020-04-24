import { SET_TRIFID_KEY, SET_TRIFID_27TH_LETTER, SET_TRIFID_GROUP_SIZE } from '../actions/constants'

const initialState = {
    trifidKey: 'FELIX MARIE DELASTELLE',
    trifid27thLetter: '+',
    trifidGroupSize: 5
}

const trifid = (state = initialState, action) => {
    switch(action.type) {
        case SET_TRIFID_KEY:
            return {
                ...state,
                trifidKey: action.trifidKey
            }
        case SET_TRIFID_GROUP_SIZE:
            return {
                ...state,
                trifidGroupSize: action.trifidGroupSize
            }
        case SET_TRIFID_27TH_LETTER:
            return {
                ...state,
                trifid27thLetter: action.trifid27thLetter
            }
        default:
            return state
    }
}

export default trifid
