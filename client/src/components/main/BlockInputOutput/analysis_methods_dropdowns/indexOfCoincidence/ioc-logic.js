export const calcIndexOfCoincidence = (input) => {
  //Check if input or outputfield

  if (!input || input.length === 0) return;

  //calc for input or output -> true = input, false = output
  let inputValue = input.toString();

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  //don't use foreign chars
  let cleanedInput = inputValue.split('').filter((character) => {
    return alphabet.indexOf(character.toLowerCase()) !== -1;
  });

  //Return if only signs
  if (cleanedInput.length === 0) return;

  // count all the occurences of every letter in the input
  let counts = new Array(26).fill(0);
  for (let character of cleanedInput) {
    let indexOfCharacter = alphabet.indexOf(character.toLowerCase());
    counts[indexOfCharacter]++;
  }

  // don't use letters that have a count of one as 1 * (1 - 1) === 0
  let countsCleaned = counts.filter((element) => element > 1);

  // calculate count ( count - 1 ) and sum all the results up
  let countCi = countsCleaned
    .map((count) => {
      return count * (count - 1);
    })
    .reduce((a, b) => a + b, 0);

  //final calculation with countsum and inputlength
  let ioc = countCi / (cleanedInput.length * (cleanedInput.length - 1));

  return !isNaN(ioc) ? ioc : '0';
};

const probabilities = {
  English: 1.73,
  French: 2.02,
  German: 2.05,
  Italian: 1.94,
  Portugese: 1.94,
  Russian: 1.76,
  Spanish: 1.94,
};

export const calcLanguageProbability = (ioc) => {
  let adjustedIOC = ioc * 26;
  let tempProbability = Infinity;
  let language = '';
  for (let probability of Object.keys(probabilities)) {
    let diff = probabilities[probability] - adjustedIOC;
    if (Math.abs(diff) < tempProbability) {
      tempProbability = Math.abs(diff);
      language = probability;
    }
  }
  return language;
};
