const Substitute = (() => {
  const encrypt = (input, substitutionAlphabet, direction) => {
    let output = [];
    if (direction === 'encrypt') {
      for (let i = 0; i < input.length; i++) {
        output.push(substitutionAlphabet[input[i].toLowerCase()] || input[i]);
      }
    }
    if (direction === 'decrypt') {
      let sAlphabet = substitutionAlphabet;
      let uInput = input;
      let keys = Object.keys(sAlphabet);
      for (let i = 0; i < input.length; i++) {
        output.push(
          keys.find((key) => sAlphabet[key] === uInput[i].toLowerCase()) ||
            input[i]
        );
      }
    }
    return output.join('');
  };

  return {
    encrypt: encrypt,
  };
})();

export default Substitute;
