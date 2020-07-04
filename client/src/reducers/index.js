import { combineReducers } from 'redux';
import modal from './modal';
import replace from './replace';
import wordbook from './wordbook';
import cShift from './cShift';
import direction from './direction';
import input from './input';
import method from './method';
import foreignChars from './foreignChars';
import output from './output';
import caseformat from './caseformat';
import alphabet from './alphabet';
import keywordVigenere from './keywordVigenere';
import affine from './affine';
import otpKey from './otpKey';
import skytale from './skytale';
import rsa from './rsa';
import alert from './alert';
import auth from './auth';
import presetsModal from './presetsModal';
import analysisModal from './analysisModal';
import analysisMethod from './analysisMethod';
import profile from './profile';
import presets from './presets';
import presetDescription from './presetDescription';
import presetName from './presetName';
import caseTransformChoice from './caseTransformChoice';
import substitutionAlphabet from './substitutionAlphabet';
import trifid from './trifid';
import playfair from './playfair';
import nihilist from './nihilist';

export default combineReducers({
  modal,
  replace,
  wordbook,
  cShift,
  direction,
  input,
  method,
  foreignChars,
  output,
  caseformat,
  alphabet,
  keywordVigenere,
  affine,
  otpKey,
  skytale,
  rsa,
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
  nihilist,
  substitutionAlphabet,
  trifid,
  playfair,
});
