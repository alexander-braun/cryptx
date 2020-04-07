import { combineReducers } from 'redux'
import modal from './modal'
import replace from './replace'
import wordbook from './wordbook'
import cShift from './cShift'

export default combineReducers({
    modal,
    replace,
    wordbook,
    cShift,
})