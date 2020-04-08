import { combineReducers } from 'redux'
import modal from './modal'
import replace from './replace'
import wordbook from './wordbook'
import cShift from './cShift'
import ringLength from './ringlength'
import toggleDirection from './direction'
import updateInput from './input'
import method from './method'
import includeChars from './includechars'

export default combineReducers({
    modal,
    replace,
    wordbook,
    cShift,
    ringLength,
    toggleDirection,
    updateInput,
    method,
    includeChars
})