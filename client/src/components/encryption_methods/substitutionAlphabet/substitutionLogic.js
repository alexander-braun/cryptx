const Substitute = (() => {
  let userInput, alphabet, substitutionAlphabet, direction;

  const setUserInput = (value) => {
    userInput = value;
  };

  const setSubstitutionAlphabet = (value) => {
    substitutionAlphabet = value;
  };

  const setAlphabet = (value) => {
    alphabet = value;
  };

  const setDirection = (value) => {
    direction = value;
  };

  const transformText = () => {
    let output = [];
    if (direction === 'encrypt') {
      for (let i = 0; i < userInput.length; i++) {
        output.push(
          substitutionAlphabet[userInput[i].toLowerCase()] || userInput[i]
        );
      }
    }
    if (direction === 'decrypt') {
      for (let i = 0; i < userInput.length; i++) {
        output.push(
          Object.keys(substitutionAlphabet).find(
            (key) => substitutionAlphabet[key] === userInput[i].toLowerCase()
          ) || userInput[i]
        );
      }
    }
    return output.join('');
  };

  const setAll = (input, substitutionAlphabet, direction) => {
    setUserInput(input);
    setSubstitutionAlphabet(substitutionAlphabet);
    setDirection(direction);
  };

  return {
    encrypt: transformText,
    setAll: setAll,
  };
})();

export default Substitute;
