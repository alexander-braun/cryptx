/**
 * Calculates the lettercount
 */
const letterCount = (input, alphabet) => {
  let map = new Array(26).fill(0);
  for (let element of input.toString()) {
    let index = alphabet.indexOf(element.toLowerCase());
    if (index !== -1) map[index] += 1;
  }
  return map;
};

/**
 * Gets the frequency for every letter
 */
const frequency = (input, alphabet) => {
  let arr = letterCount(input, alphabet);
  let totalLetters = arr.reduce((a, b) => a + b, 0);
  let freq = new Array(26).fill(0);

  let index = 0;
  for (let char of arr) {
    if (char !== 0) freq[index] = (char / totalLetters) * 100;
    index++;
  }
  return freq;
};

export default frequency;
