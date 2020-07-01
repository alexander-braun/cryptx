const vigenere = (() => {
  //Setup all variables

  let userInput, alphabet, direction, includeChars, keywordVigenere;

  const setUserInput = (input) => {
    userInput = String(input);
  };

  const setAlphabet = (input) => {
    alphabet = input.split('');
    alphabet = [...new Set(alphabet)].join('');
    alphabet = alphabet.replace(/[^0-9a-zA-Z]/gi, '');
  };

  const setForeignChars = (input) => {
    includeChars = input;
  };

  const setDirection = (input) => {
    direction = input;
  };

  const setKeyWord = (input) => {
    keywordVigenere = input.toLowerCase();
  };

  const createSaltArray = (salt, textInput) => {
    const saltArray = [];
    let i = 0;
    while (textInput.length >= saltArray.length) {
      if (i === salt.length) i = 0;
      saltArray.push(salt[i]);
      i++;
    }
    return saltArray;
  };

  const alphabetFromCharacter = (char) => {
    let index = alphabet.indexOf(char);
    const alphabetVig = [];
    while (alphabetVig.length < 26) {
      alphabetVig.push(alphabet[index]);
      if (index === 25) {
        index = 0;
      } else if (index < 25) index++;
    }
    return alphabetVig;
  };

  const encryptCharacterVigenere = (textInput, salt, index) => {
    const char = textInput[index];
    const saltLetter = createSaltArray(salt, textInput)[index];
    const vigalphabet = alphabetFromCharacter(saltLetter);
    const encryptedCharacter = vigalphabet[alphabet.indexOf(char)];
    return encryptedCharacter;
  };

  const decryptCharacterVigenere = (textInput, salt, index) => {
    const char = textInput[index];
    const saltLetter = createSaltArray(salt, textInput)[index];
    const vigalphabet = alphabetFromCharacter(saltLetter);
    return alphabet[vigalphabet.indexOf(char)];
  };

  const transformText = (
    input,
    alphabet,
    direction,
    foreignChars,
    caseFormat,
    keyword
  ) => {
    setAll(input, alphabet, direction, foreignChars, keyword);
    const textinputCleaned = removeSigns(userInput.toLowerCase(), false);
    let textoutput = readChar(textinputCleaned, keywordVigenere);

    textoutput = addSigns(textoutput, userInput);
    if (caseFormat === 'ignore') {
      if (includeChars === 'include') {
        return textoutput;
      } else if (includeChars === 'ignore') {
        return removeSigns(textoutput, true);
      }
    } else if (caseFormat === 'maintain') {
      if (includeChars === 'include') {
        return caseTransform(userInput, textoutput);
      } else if (includeChars === 'ignore') {
        return removeSigns(caseTransform(userInput, textoutput), true);
      }
    }

    //return caseTransform(user, textoutput)
  };

  const caseTransform = (textinput, textoutput) => {
    let output = [];
    for (let i = 0; i < textinput.length; i++) {
      if (textoutput[i]) {
        textinput[i].toUpperCase() === textinput[i]
          ? output.push(textoutput[i].toUpperCase())
          : output.push(textoutput[i].toLowerCase());
      }
    }
    return output.join('');
  };

  const removeSigns = (textinput, spaces) => {
    // spaces false = remove all signs
    // spaces true = leave the spacing
    let output = [];
    for (let char of textinput) {
      if (spaces === false) {
        if (alphabet.indexOf(char.toLowerCase()) !== -1) {
          output.push(char);
        }
      } else if (spaces === true) {
        if (alphabet.indexOf(char.toLowerCase()) !== -1 || char === ' ') {
          output.push(char);
        }
      }
    }
    return output.join('');
  };

  const addSigns = (textoutput, textinput) => {
    textinput = textinput.toLowerCase();
    let output = [];
    let i = 0;
    for (let element of textinput) {
      if (alphabet.indexOf(element) === -1) {
        output.push(element);
      } else {
        output.push(textoutput[i]);
        i++;
      }
    }
    return output.join('');
  };

  const readChar = (textinput, salt) => {
    let text = [];
    for (let i = 0; i < textinput.length; i++) {
      if (alphabet.indexOf(textinput[i]) === -1) {
        text.push(textinput[i]);
      } else {
        if (direction === 'encrypt') {
          text.push(encryptCharacterVigenere(textinput, salt, i));
        } else {
          text.push(decryptCharacterVigenere(textinput, salt, i));
        }
      }
    }
    return text;
  };

  const setAll = (input, alphabet, direction, foreignChars, keyword) => {
    setUserInput(input);
    setAlphabet(alphabet);
    setDirection(direction);
    setForeignChars(foreignChars);
    setKeyWord(keyword);
  };

  return {
    setAll: setAll,
    encrypt: transformText,
  };
})();

export default vigenere;
