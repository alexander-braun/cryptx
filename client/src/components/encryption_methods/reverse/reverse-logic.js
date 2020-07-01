const Reverse = (() => {
  const encrypt = (input, caseFormat, foreignChars, alphabet) => {
    //Calc
    let output = [];
    for (let i = input.length - 1; i >= 0; i--) {
      output.push(input[i]);
    }

    //Format
    let formattedOutput = [];

    if (foreignChars === 'ignore') {
      for (let char of output) {
        if (alphabet.indexOf(char.toLowerCase()) !== -1 || char === ' ') {
          formattedOutput.push(char);
        }
      }
    } else formattedOutput = output;

    if (caseFormat === 'ignore') {
      formattedOutput = formattedOutput.join('').toLowerCase();
    } else formattedOutput = formattedOutput.join('');

    return formattedOutput;
  };

  return {
    encrypt: encrypt,
  };
})();

export default Reverse;
