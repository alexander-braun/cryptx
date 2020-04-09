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
import prime2 from './prime2'
import alphabet from './alphabet'
import keywordVigenere from './keywordVigenere'
import keywordPlayfair from './keywordPlayfair'
import affine from './affine'
import otpKey from './otpKey'
import playsquare from './playsquare'

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
    prime1,
    prime2,
    alphabet,
    keywordVigenere,
    keywordPlayfair,
    affine,
    otpKey,
    playsquare
})