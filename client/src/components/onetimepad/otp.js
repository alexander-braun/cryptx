import math from '../math/Math';

const otp = (() => {
  math.restoreForeignChars();
  let userInput, direction, caseFormat, includeChars, key, alphabet;

  const setUserInput = (input) => {
    userInput = String(input);
  };

  const setForeignChars = (input) => {
    includeChars = input;
  };

  const setAlphabet = (input) => {
    alphabet = input;
  };

  const setCase = (input) => {
    caseFormat = input;
  };

  const setDirection = (input) => {
    direction = input;
  };

  const setKey = (input) => {
    key = input;
  };

  const modulo = (a, b) => {
    return ((a % b) + b) % b;
  };

  const transformText = () => {
    let ind = 0;
    let input = [];
    for (let i = 0; i < userInput.length; i++) {
      if (alphabet.indexOf(userInput[i].toLowerCase()) !== -1) {
        input.push(userInput[i].toLowerCase());
      }
    }

    let output = input.map((char) => {
      let encryptedKey;
      if (key[ind] && input && alphabet && alphabet.indexOf(char) !== -1) {
        let indexChar = alphabet.indexOf(char);
        let indexKey = alphabet.indexOf(key[ind].toLowerCase());
        let resultIndex =
          direction === 'encrypt' ? indexChar + indexKey : indexChar - indexKey;
        encryptedKey =
          direction === 'encrypt'
            ? alphabet[resultIndex % 26]
            : alphabet[modulo(indexChar - indexKey, 26)];
        ind++;
      }
      return encryptedKey;
    });
    return output.join('');
  };

  const encrypt = () => {
    if (direction !== 'crack') {
      if (userInput.length <= 0) return '';
      let rawOutput = transformText();
      return math.transformCaseAndChars(
        userInput,
        rawOutput,
        caseFormat,
        includeChars
      );
    }
  };

  const setAll = (
    input,
    caseFormat,
    foreignChars,
    direction,
    otpKey,
    alphabet
  ) => {
    setUserInput(input);
    setCase(caseFormat);
    setForeignChars(foreignChars);
    setDirection(direction);
    setKey(otpKey);
    setAlphabet(alphabet);
  };

  return {
    setAll: setAll,
    encrypt: encrypt,
  };
})();

export default otp;
