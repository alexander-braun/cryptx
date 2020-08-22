import math from '../../math/Math';

const caesar = (() => {
  //Setup all variables
  let userInput, saltInput, alphabet, direction, includeChars;

  const setUserInput = (input) => {
    userInput = String(input);
  };

  const setSaltInput = (input) => {
    saltInput = Number(input);
  };

  const setAlphabet = (input) => {
    alphabet = input.split('');
  };

  const setForeignChars = (input) => {
    includeChars = input;
  };

  const setDirection = (input) => {
    direction = input;
  };

  const setAll = (
    input,
    alphabet,
    cShift,
    direction,
    foreignChars,
    caseFormat
  ) => {
    setUserInput(input);
    setAlphabet(alphabet);
    setSaltInput(cShift);
    setDirection(direction);
    setForeignChars(foreignChars);
  };

  /**
   * Standart Caesar encryption
   */
  const charIndex = (char) => {
    const index = alphabet.indexOf(char);
    let alLength = alphabet.length;

    if (direction === 'encrypt') {
      if (index + saltInput < alLength) {
        return index + saltInput;
      } else {
        return index + saltInput - alLength;
      }
    } else {
      if (index - saltInput >= 0) {
        return index - saltInput;
      } else {
        return index - saltInput + alLength;
      }
    }
  };

  const readChar = () => {
    if (!userInput) return;
    const decryptedChars = [];

    let cleanInput = math.cleanInput(userInput, false, false, alphabet);

    for (let char of cleanInput) {
      let charLower = char.toLowerCase();
      let index = charIndex(charLower);
      let decryptedChar = alphabet[index];
      decryptedChars.push(decryptedChar);
    }

    return decryptedChars.join('');
  };

  const checkIfSigns = () => {
    return alphabet.length > 26 ? false : true;
  };

  const encrypt = (
    input,
    alphabet,
    cShift,
    direction,
    caseFormat,
    foreignChars
  ) => {
    setAll(input, alphabet, cShift, direction, foreignChars);
    if (direction !== 'crack') {
      const rawOutput = readChar();
      if (checkIfSigns()) {
        return math.transformCaseAndChars(
          userInput,
          rawOutput,
          caseFormat,
          includeChars
        );
      } else return rawOutput;
    }
  };

  return {
    encrypt: encrypt,
  };
})();

export default caesar;
