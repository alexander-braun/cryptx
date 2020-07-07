import math from '../../math/Math';

const atbash = (() => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const encrypt = (input) => {
    const userInput = input.toString();
    const cleanInput = math.transformToLowerCaseChars(userInput);

    if (!cleanInput.length) return '';

    const alphabetReverse = [...alphabet].reverse();
    const output = [];

    for (const character of cleanInput) {
      const characterIndex = alphabet.indexOf(character);
      output.push(alphabetReverse[characterIndex]);
    }

    return output.join('');
  };

  const transform = (input, caseFormat, foreignChars) => {
    const rawOutput = encrypt(input);

    return math.transformCaseAndChars(
      input,
      rawOutput,
      caseFormat,
      foreignChars
    );
  };

  return {
    encrypt: transform,
  };
})();

export default atbash;
