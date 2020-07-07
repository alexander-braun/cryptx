const skytale = (() => {
  let userInput, caseFormat, ringLength, direction, foreignChars;

  const setUserInput = (value) => {
    value = value.split(' ').join('');
    userInput = value;
  };

  const setCase = (value) => {
    caseFormat = value;
  };

  const setDirection = (value) => {
    direction = value;
  };

  const setForeignChars = (value) => {
    foreignChars = value;
  };

  const setRingLength = (value) => {
    ringLength = value;
  };

  const calcSkytaleLength = () => {
    return Math.ceil(userInput.length / ringLength);
  };

  const transformText = () => {
    let input = userInput;
    if (foreignChars === 'ignore') {
      let inp = [];
      let alphabet = 'abcdefghijklmnopqrstuvwxyz';
      for (let i = 0; i < input.length; i++) {
        if (alphabet.indexOf(input[i].toLowerCase()) !== -1) inp.push(input[i]);
      }
      input = inp.join('');
    }

    if (direction === 'encrypt') {
      const skytaleArr = [[]];
      let j = 0;
      for (let i = 0; i < input.length; i++) {
        if (i % ringLength === 0 && i !== 0) {
          j++;
          skytaleArr.push([]);
          skytaleArr[j].push(input[i]);
        } else {
          skytaleArr[j].push(input[i]);
        }
      }

      const encryptedText = [];
      for (let i = 0; i < ringLength; i++) {
        for (let j = 0; j < skytaleArr.length; j++) {
          if (skytaleArr[j][i]) encryptedText.push(skytaleArr[j][i]);
        }
      }

      let encrypted;

      if (caseFormat === 'ignore') {
        encrypted = encryptedText.join('').toLowerCase();
      } else {
        encrypted = encryptedText.join('');
      }

      let skytaleLength = calcSkytaleLength();
      return [encrypted, skytaleLength];
    } else if (direction === 'decrypt') {
      const skytaleRows = Math.ceil(input.length / ringLength);
      let lastRowLength = input.length % ringLength;
      if (lastRowLength === 0) lastRowLength = ringLength;

      const skyArr = [];

      for (let i = 0; i < skytaleRows; i++) {
        skyArr.push([]);
      }

      let indexOne = 0;
      for (let i = 0; i < lastRowLength; i++) {
        for (let j = 0; j < skytaleRows; j++) {
          skyArr[j].push(input[indexOne]);
          indexOne++;
        }
      }

      let restInput = input.slice(skytaleRows * lastRowLength);

      let indexTwo = 0;
      for (let j = 0; j < ringLength - lastRowLength; j++) {
        for (let i = 0; i < skytaleRows - 1; i++) {
          skyArr[i].push(restInput[indexTwo]);
          indexTwo++;
        }
      }

      let encrypted;

      if (caseFormat === 'ignore') {
        encrypted = skyArr.flat().join('').toLowerCase();
      } else {
        encrypted = skyArr.flat().join('');
      }

      let skytaleLenght = calcSkytaleLength();
      return [encrypted, skytaleLenght];
    }
  };

  const encrypt = (direction, caseFormat, input, ringLength, foreignChars) => {
    if (direction === 'crack') return ['', 0];
    setAll(direction, caseFormat, input, ringLength, foreignChars);
    return transformText();
  };

  const setAll = (direction, caseFormat, input, ringLength, foreignChars) => {
    setDirection(direction);
    setCase(caseFormat);
    setUserInput(input);
    setRingLength(ringLength);
    setForeignChars(foreignChars);
  };

  return {
    encrypt: encrypt,
  };
})();

export default skytale;
