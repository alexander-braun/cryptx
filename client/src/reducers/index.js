import { combineReducers } from 'redux'
import modal from './modal'
import replace from './replace'
import wordbook from './wordbook'
import cShift from './cShift'
import direction from './direction'
import input from './input'
import method from './method'
import includeChars from './includechars'
import output from './output'
import caseformat from './caseformat'
import alphabet from './alphabet'
import keywordVigenere from './keywordVigenere'
import keywordPlayfair from './keywordPlayfair'
import affine from './affine'
import otpKey from './otpKey'
import playsquare from './playsquare'
import skytale from './skytale'
import rsa from './rsa'
import ioc from './ioc'
import alert from './alert'
import auth from './auth'
import presetsModal from './presetsModal'
import analysisModal from './analysisModal'
import analysisMethod from './analysisMethod'
import profile from './profile'
import presets from './presets'
import presetDescription from './presetDescription'
import presetName from './presetName'
import caseTransformChoice from './caseTransformChoice'
import keyNihilist from './keyNihilist'
import cipherNihilist from './cipherNihilist'
import nihilistSquare from './nihilistSquare'
import nihilistRunningKey from './nihilistRunningKey'
import nihilistPlainNumbers from './nihilistPlainNumbers'
import substitutionAlphabet from './substitutionAlphabet'
import trifid from './trifid'

export default combineReducers({
    modal,
    replace,
    wordbook,
    cShift,
    direction,
    input,
    method,
    includeChars,
    output,
    caseformat,
    alphabet,
    keywordVigenere,
    keywordPlayfair,
    affine,
    otpKey,
    playsquare,
    skytale,
    rsa,
    ioc,
    alert,
    auth,
    presetsModal,
    analysisModal,
    analysisMethod,
    profile,
    presets,
    presetDescription,
    presetName,
    caseTransformChoice,
    keyNihilist,
    cipherNihilist,
    nihilistSquare,
    nihilistRunningKey,
    nihilistPlainNumbers,
    substitutionAlphabet,
    trifid
})