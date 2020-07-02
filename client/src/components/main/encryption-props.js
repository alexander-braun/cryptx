const encryptionProps = (props) => {
  if (!props || !props.method) return;

  switch (props.method) {
    case 'trifid':
      return [
        props.input,
        props.trifidKey,
        props.trifidGroupSize,
        props.trifid27thLetter,
        props.alphabet,
        props.direction,
      ];
    case 'substitution':
      return [props.input, props.substitutionAlphabet, props.direction];
    case 'rot13':
      return [
        props.direction === 'crack' ? props.wordbook : null,
        props.input,
        props.alphabet,
        13,
        props.direction,
        props.caseformat,
        props.includeChars,
      ];
    case 'caesar':
      if (props.direction === 'crack') {
        return [
          props.wordbook,
          props.input,
          props.alphabet,
          props.cShift,
          props.direction,
          props.caseformat,
          props.includeChars,
        ];
      } else
        return [
          null,
          props.input,
          props.alphabet,
          props.cShift,
          props.direction,
          props.caseformat,
          props.includeChars,
        ];
    case 'rsa':
      return [
        props.input,
        props.prime1,
        props.prime2,
        props.e,
        props.direction,
      ];
    case 'otp':
      return [
        props.input,
        props.caseformat,
        props.includeChars,
        props.direction,
        props.otpKey,
        props.alphabet,
      ];

    case 'reverse':
      return [
        props.input,
        props.caseformat,
        props.includeChars,
        props.alphabet,
      ];
    case 'casetransform':
      return [props.input, props.caseTransformChoice];
    case 'atbash':
      return [props.input, props.caseformat, props.includeChars];
    case 'affine':
      return [
        props.alphabet,
        props.input,
        props.affine_alpha,
        props.affine_beta,
        props.direction,
        props.includeChars,
        props.caseformat,
      ];
    case 'vigenere':
      return [
        props.input,
        props.alphabet,
        props.direction,
        props.includeChars,
        props.caseformat,
        props.keywordVigenere,
      ];
    case 'playfair':
      return [
        props.input,
        props.alphabet,
        props.direction,
        props.keywordPlayfair,
      ];
    case 'morse':
      return [props.input, props.direction];
    case 'replace':
      return [props.input, props.toReplaceLetter, props.replaceLetter];
    case 'nihilist':
      return [
        props.input,
        props.alphabet,
        props.direction,
        props.keyNihilist,
        props.cipherNihilist,
      ];
    case 'skytale':
      return [
        props.direction,
        props.caseformat,
        props.input,
        props.ringLength,
        props.includeChars,
      ];
    default:
      return [];
  }
};

export default encryptionProps;
