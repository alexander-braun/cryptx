const general = [
  'method',
  'input',
  'direction',
  'foreignChars',
  'caseformat',
  'alphabet',
];

export const save_preset_settings = {
  caesar: [...general, 'cShift'],
  casetransform: [...general, 'caseTransformChoice'],
  replace: [...general, 'toReplaceLetter', 'replaceLetter'],
  reverse: [...general],
  rsa: [...general, 'prime1', 'prime2', 'e'],
  trifid: [...general, 'trifidKey', 'trifid27thLetter', 'trifidGroupSize'],
  substitution: [...general, 'substitutionAlphabet'],
  nihilist: [...general, 'keywordNihilist', 'cipherNihilist'],
  skytale: [...general, 'ringLength'],
  otp: [...general, 'otpKey'],
  affine: [...general, 'affine_alpha', 'affine_beta'],
  vigenere: [...general, 'keywordVigenere'],
  playfair: [...general, 'keywordPlayfair'],
  atbash: [...general],
  rot13: [...general],
  morse: [...general],
};
