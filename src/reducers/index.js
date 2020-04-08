import { combineReducers } from 'redux'
import modal from './modal'
import replace from './replace'
import wordbook from './wordbook'
import cShift from './cShift'
import ringLength from './ringlength'
import direction from './direction'
import input from './input'
import method from './method'
import includeChars from './includechars'
import output from './output'
import caseformat from './caseformat'

export default combineReducers({
    modal,
    replace,
    wordbook,
    cShift,
    ringLength,
    direction,
    input,
    method,
    includeChars,
    output,
    caseformat
})