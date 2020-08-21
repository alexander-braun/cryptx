import math from '../../math/Math';
import * as book from '../../../data/words_dictionary.json';

const caesar = (() => {
  const wordbook = JSON.parse(JSON.stringify(book)).default;

  //Setup all variables
  let userInput, saltInput, alphabet, direction, includeChars, caseFormat;

  const setUserInput = (input) => {
    userInput = String(input);
  };

  const setSaltInput = (input) => {
    saltInput = Number(input);
  };

  const setCaseFormat = (input) => {
    caseFormat = input;
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
    setCaseFormat(caseFormat);
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

  /**
   * Cracking Functionality
   */
  const readCharCrack = (textinput, salt) => {
    const decryptedChars = [];
    for (const char of textinput) {
      const charLower = char.toLowerCase();
      if (alphabet.includes(charLower)) {
        const position = charIndexCrack(charLower, salt);
        if (charLower === char) {
          decryptedChars.push(alphabet[position]);
        } else {
          decryptedChars.push(alphabet[position].toUpperCase());
        }
      } else decryptedChars.push(char);
    }
    return decryptedChars.join('');
  };

  const charIndexCrack = (char, saltInput) => {
    const index = alphabet.indexOf(char);
    if (index + saltInput < alphabet.length) {
      return index + saltInput;
    } else {
      return index + saltInput - alphabet.length;
    }
  };

  const createAllOutputs = () => {
    let arr = [];
    const textInput = math.cleanInput(userInput, true, false);
    for (let i = 0; i < 26; i++) {
      let salt = i;
      const textoutput = readCharCrack(textInput, salt);
      arr.push([textoutput.split(' '), i]);
    }
    return arr;
  };

  const handleCracked = (highest, shiftV) => {
    if (highest === 0)
      return `Weird text you got there! This tool can only crack english texts that are encrypted with the caesar cipher! Your input: "${userInput}"`;

    return encrypt(
      userInput,
      alphabet.join(''),
      shiftV,
      'decrypt',
      caseFormat,
      includeChars
    );
  };

  const countCombinations = (possibleCombinations) => {
    const keys = Object.keys(possibleCombinations);
    let highest = 0;
    let shiftV;
    for (const key of keys) {
      if (possibleCombinations[key].count > highest) {
        highest = possibleCombinations[key].count;
        shiftV = 26 - possibleCombinations[key].shiftV;
      }
    }

    return handleCracked(highest, shiftV);
  };

  const findCombinations = () => {
    if (!userInput) return;
    let allOutputs = createAllOutputs();
    let possibleCombinations = {};
    let counter = 0;
    // Brute Force lookup all possibilities against the english dictionary
    for (let output of allOutputs) {
      possibleCombinations[counter] = [];
      possibleCombinations[counter].count = 0;
      for (let word of output[0]) {
        possibleCombinations[counter].shiftV = output[1];
        if (wordbook[word]) {
          possibleCombinations[counter].count++;
        }
      }
      counter++;
    }
    return countCombinations(possibleCombinations);
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
    setAll(input, alphabet, cShift, direction, foreignChars, caseFormat);
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
    } else {
      if (wordbook) {
        return findCombinations();
      } else return `WORDBOOK COULDN'T LOAD`;
    }
  };

  return {
    encrypt: encrypt,
  };
})();

export default caesar;
