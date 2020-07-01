import math from '../../math/Math';

const caesar = (() => {
  //Setup all variables
  math.restoreForeignChars();
  let userInput,
    saltInput,
    alphabet,
    direction,
    wordbook,
    includeChars,
    caseFormat;

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

  //Standart Caesar Method

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

  //Crack functionality

  const setWordbook = (words) => {
    wordbook = words;
  };

  const readCharCrack = (textinput, salt) => {
    const decryptedChars = [];
    for (let char of textinput) {
      let charLower = char.toLowerCase();
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

  const removeSignsKeepSpaces = (textinput) => {
    let output = [];
    for (let char of textinput) {
      if (alphabet.indexOf(char) !== -1 || char === ' ') {
        output.push(char);
      }
    }
    return output.join('');
  };

  const createAllOutputs = () => {
    let arr = [];
    const textinput = removeSignsKeepSpaces(userInput.toLowerCase());
    for (let i = 1; i < 26; i++) {
      let salt = i;
      const textoutput = readCharCrack(textinput, salt);
      arr.push([textoutput.split(' '), i]);
    }
    return arr;
  };

  const findWords = (words) => {
    let allOutputs = createAllOutputs();
    let possibleCombinations = {};
    let counter = 0;
    // Brute Force lookup all possibilities against the english dictionary
    for (let output of allOutputs) {
      possibleCombinations[counter] = [];
      for (let word of output[0]) {
        possibleCombinations[counter].shiftV = output[1];
        if (words[word] === 1) {
          possibleCombinations[counter].push(word);
        }
      }
      counter++;
    }
    // Find the option with the most words fitting and return them

    let keys = Object.keys(possibleCombinations);
    let length = 0;
    let result;
    let shiftV;

    for (let key of keys) {
      if (possibleCombinations[key].length > length) {
        length = possibleCombinations[key].length;
        result = possibleCombinations[key];
        shiftV = 26 - possibleCombinations[key].shiftV;
      }
    }
    if (length === 0)
      return `Weird text you got there! This tool can only crack english texts that are encrypted with the caesar cipher! Your input: "${userInput}"`;
    direction = 'decrypt';
    setSaltInput(shiftV);

    result = encrypt(
      null,
      userInput,
      alphabet.join(''),
      shiftV,
      'decrypt',
      caseFormat,
      includeChars
    );
    return result;
  };

  const loadWordbook = () => {
    if (!userInput) return;
    else return findWords(wordbook);
  };

  const checkIfSigns = () => {
    return alphabet.length > 26 ? false : true;
  };

  //Crack or other ? Return the according method

  const encrypt = (
    wordbook,
    input,
    alphabet,
    cShift,
    direction,
    caseFormat,
    foreignChars
  ) => {
    setAll(
      wordbook,
      input,
      alphabet,
      cShift,
      direction,
      foreignChars,
      caseFormat
    );
    if (direction !== 'crack') {
      let rawOutput = readChar();
      if (checkIfSigns()) {
        return math.transformCaseAndChars(
          userInput,
          rawOutput,
          caseFormat,
          includeChars
        );
      } else return rawOutput;
    } else {
      if (wordbook !== 'FAIL') {
        return loadWordbook();
      } else return `WORDBOOK COULDN'T LOAD`;
    }
  };

  const setAll = (
    wordbook,
    input,
    alphabet,
    cShift,
    direction,
    foreignChars,
    caseFormat
  ) => {
    setWordbook(wordbook);
    setUserInput(input);
    setAlphabet(alphabet);
    setSaltInput(cShift);
    setDirection(direction);
    setForeignChars(foreignChars);
    setCaseFormat(caseFormat);
  };

  return {
    setAll: setAll,
    encrypt: encrypt,
  };
})();

export default caesar;
