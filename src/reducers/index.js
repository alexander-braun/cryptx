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
import prime1 from './prime1'

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
    caseformat,
    prime1
})