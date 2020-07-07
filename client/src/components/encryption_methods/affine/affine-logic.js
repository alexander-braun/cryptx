import math from '../../math/Math';

const affine = (() => {
  //Setup all variables

  let userInput, alphabet, includeChars, alpha, beta, correctedInput;

  const setUserInput = (input) => {
    userInput = input.toString();
    const cleanInput = math.transformToLowerCaseChars(userInput);
    correctedInput = cleanInput.join('');
  };

  const setAlpha = (input) => {
    alpha = Number(input);
  };

  const setBeta = (input) => {
    beta = Number(input);
  };

  const setAlphabet = (input) => {
    alphabet = input.split('');
  };

  const setForeignChars = (input) => {
    includeChars = input;
  };

  // Modulo to account for wrong js method
  const modulo = (a, b) => {
    return ((a % b) + b) % b;
  };

  // Modular inverse
  const modInverse = (a, b) => {
    a %= b;
    for (var x = 1; x < b; x++) {
      if ((a * x) % b === 1) {
        return x;
      }
    }
  };

  const setAll = (alphabet, input, affineAlpha, affineBeta, foreignChars) => {
    setAlphabet(alphabet);
    setUserInput(input);
    setAlpha(affineAlpha);
    setBeta(affineBeta);
    setForeignChars(foreignChars);
  };

  const encrypt = () => {
    const arr = [];
    for (let i = 0; i < correctedInput.length; i++) {
      const char = correctedInput[i];
      if (alphabet.indexOf(char) !== -1) {
        const numberId =
          (alpha * alphabet.indexOf(char) + beta) % alphabet.length;
        const character = alphabet[numberId];
        if (character === undefined) {
          arr.push(char);
        } else arr.push(character);
      } else arr.push(correctedInput[i]);
    }
    return arr.join('');
  };

  const decrypt = () => {
    const arr = [];
    const inverseAlpha = modInverse(alpha, alphabet.length);
    for (let i = 0; i < correctedInput.length; i++) {
      const char = correctedInput[i];
      if (alphabet.indexOf(char) !== -1) {
        const indexChar = alphabet.indexOf(char);
        const resultIndex = modulo(
          inverseAlpha * (indexChar - beta),
          alphabet.length
        );
        if (alphabet[resultIndex]) {
          arr.push(alphabet[resultIndex]);
        } else {
          arr.push(char);
        }
      } else {
        arr.push(char);
      }
    }
    return arr.join('');
  };

  const transform = (
    alphabet,
    input,
    affineAlpha,
    affineBeta,
    direction,
    foreignChars,
    caseFormat
  ) => {
    setAll(alphabet, input, affineAlpha, affineBeta, foreignChars);

    const rawOutput = direction === 'encrypt' ? encrypt() : decrypt();

    return math.transformCaseAndChars(
      userInput,
      rawOutput,
      caseFormat,
      includeChars
    );
  };

  return {
    encrypt: transform,
  };
})();

export default affine;
