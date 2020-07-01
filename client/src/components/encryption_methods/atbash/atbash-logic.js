import math from '../../math/Math';

const atbash = (() => {
  //Setup all variables
  let userInput;

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  alphabet = alphabet.split('');

  //Encryption Method
  const readChar = () => {
    let cleanInput = math.cleanInput(userInput, false, false, alphabet);
    if (cleanInput === null) return null;

    let alphabetReverse = [...alphabet].reverse();

    let output = [];

    for (let char of cleanInput) {
      let charIndex = alphabet.indexOf(char);
      output.push(alphabetReverse[charIndex]);
    }

    return output.join('');
  };

  const checkIfSigns = () => {
    return alphabet.length > 26 ? false : true;
  };

  //Crack or other ? Return the according method

  const encrypt = (input, caseFormat, foreignChars) => {
    input = String(input);
    userInput = input;
    let rawOutput = readChar();
    if (checkIfSigns()) {
      return math.transformCaseAndChars(
        userInput,
        rawOutput,
        caseFormat,
        foreignChars
      );
    } else return rawOutput;
  };

  return {
    encrypt: encrypt,
  };
})();

export default atbash;
