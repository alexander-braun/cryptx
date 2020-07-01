const CaseTransform = (() => {
  const encrypt = (input, caseTransformChoice) => {
    if (!input) return '';
    input.trim();
    if (caseTransformChoice === 'lower') {
      return input.toLowerCase();
    } else if (caseTransformChoice === 'upper') {
      return input.toUpperCase();
    } else if (caseTransformChoice === 'capitalize') {
      let words = input.split(' ');
      let wordsUpper = [];
      for (let word of words) {
        let transformed = word.toLowerCase().split('');
        if (transformed[0] !== undefined) {
          transformed[0] = transformed[0].toUpperCase();
        }
        transformed = transformed.join('');
        wordsUpper.push(transformed);
        wordsUpper.push(' ');
      }
      return wordsUpper.join('');
    } else if (caseTransformChoice === 'alternating') {
      let wordsAlternate = [];
      for (let i = 0; i < input.length; i++) {
        i % 2 === 0
          ? wordsAlternate.push(input[i].toLowerCase())
          : wordsAlternate.push(input[i].toUpperCase());
      }
      return wordsAlternate.join('');
    } else if (caseTransformChoice === 'inverse') {
      let wordsInverse = [];
      for (let i = 0; i < input.length; i++) {
        input[i].toLowerCase() === input[i]
          ? wordsInverse.push(input[i].toUpperCase())
          : wordsInverse.push(input[i].toLowerCase());
      }
      return wordsInverse.join('');
    }
  };

  return {
    encrypt: encrypt,
  };
})();

export default CaseTransform;
