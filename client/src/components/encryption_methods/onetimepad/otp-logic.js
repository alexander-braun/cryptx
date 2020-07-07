import math from '../../math/Math';

const otp = (() => {
  let userInput, direction, includeChars, key, alphabet;

  const setUserInput = (input) => {
    userInput = String(input);
  };

  const setForeignChars = (input) => {
    includeChars = input;
  };

  const setAlphabet = (input) => {
    alphabet = input;
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
    let index = 0;
    const input = [];
    for (let i = 0; i < userInput.length; i++) {
      if (alphabet.indexOf(userInput[i].toLowerCase()) !== -1) {
        input.push(userInput[i].toLowerCase());
      }
    }

    let output = input.map((char) => {
      let encryptedKey;
      if (key[index] && input && alphabet && alphabet.indexOf(char) !== -1) {
        const indexChar = alphabet.indexOf(char);
        const indexKey = alphabet.indexOf(key[index].toLowerCase());
        const resultIndex =
          direction === 'encrypt' ? indexChar + indexKey : indexChar - indexKey;
        encryptedKey =
          direction === 'encrypt'
            ? alphabet[resultIndex % 26]
            : alphabet[modulo(indexChar - indexKey, 26)];
        index++;
      }
      return encryptedKey;
    });
    return output.join('');
  };

  const encrypt = (
    input,
    caseFormat,
    foreignChars,
    direction,
    otpKey,
    alphabet
  ) => {
    setAll(input, foreignChars, direction, otpKey, alphabet);
    if (direction !== 'crack') {
      if (userInput.length <= 0) return '';
      let rawOutput = transformText();
      return math.transformCaseAndChars(
        userInput,
        rawOutput,
        caseFormat,
        includeChars
      );
    } else return '';
  };

  const setAll = (input, foreignChars, direction, otpKey, alphabet) => {
    setUserInput(input);
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
