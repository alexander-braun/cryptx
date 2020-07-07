const CaseTransform = (() => {
  const lower = (input) => {
    return input.toLowerCase();
  };

  const upper = (input) => {
    return input.toUpperCase();
  };

  const capitalize = (input) => {
    const words = input.split(' ');
    const wordsCapitalized = [];
    for (let word of words) {
      if (word !== '' && word !== ' ') {
        let newWord = word.toLowerCase().split('');
        newWord[0] = newWord[0].toUpperCase();
        wordsCapitalized.push(newWord.join(''));
      }
    }
    return wordsCapitalized.join(' ');
  };

  const alternating = (input) => {
    const wordsAlternate = [];
    for (let i = 0; i < input.length; i++) {
      i % 2 === 0
        ? wordsAlternate.push(input[i].toLowerCase())
        : wordsAlternate.push(input[i].toUpperCase());
    }
    return wordsAlternate.join('');
  };

  const inverse = (input) => {
    const wordsInverse = [];
    for (let i = 0; i < input.length; i++) {
      input[i].toLowerCase() === input[i]
        ? wordsInverse.push(input[i].toUpperCase())
        : wordsInverse.push(input[i].toLowerCase());
    }
    return wordsInverse.join('');
  };

  const encrypt = (input, caseTransformChoice) => {
    if (!input) return '';
    input.trim();
    if (caseTransformChoice === 'lower') {
      return lower(input);
    } else if (caseTransformChoice === 'upper') {
      return upper(input);
    } else if (caseTransformChoice === 'capitalize') {
      return capitalize(input);
    } else if (caseTransformChoice === 'alternating') {
      return alternating(input);
    } else if (caseTransformChoice === 'inverse') {
      return inverse(input);
    }
  };

  return {
    encrypt: encrypt,
  };
})();

export default CaseTransform;
