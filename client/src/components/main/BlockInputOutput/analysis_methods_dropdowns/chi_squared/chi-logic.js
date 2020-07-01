import languages from './letterFrequency';

export const chiSquaredCalculation = (language, input) => {
  const letters = 'abcdefghijklmnopqrstuvwxyzœßàąçĉćèéêëęĝĥîìïĵłńóòŝśùŭźż';

  //Puts the letter occurences of every letter into an array

  const countLetters = () => {
    let output = Array(letters.length).fill(0);
    for (let letterToSearch of letters) {
      for (let i = 0; i < input.split('').length; i++) {
        if (letterToSearch === input.split('')[i].toLowerCase()) {
          output[letters.indexOf(letterToSearch)] += 1;
        }
      }
    }
    return output;
  };

  // Calculate the expected letter distribution for every letter and
  // put it into an array

  const calcExpectedCount = () => {
    let cleanInput = [];
    for (let i = 0; i < input.length; i++) {
      if (letters.indexOf(input[i].toLowerCase()) !== -1) {
        cleanInput.push(input[i].toLowerCase());
      }
    }
    let expectedCounts = [];
    if (language !== undefined) {
      let lang = languages[language];
      for (let letterToSearch of letters) {
        let ind = letters.indexOf(letterToSearch);
        expectedCounts.push((cleanInput.length / 100) * lang[ind]);
      }
    }
    return expectedCounts;
  };

  // Calculates the final chi squared value

  const difference = () => {
    if (language !== undefined) {
      let expected = calcExpectedCount();
      let observed = countLetters();
      let singleChis = [];

      let index = 0;
      for (let element of observed) {
        // Division by 0 is not possible so if ...

        if (
          Math.pow(element - expected[index], 2) !== 0 &&
          expected[index] !== 0
        ) {
          singleChis.push(
            Math.pow(element - expected[index], 2) / expected[index]
          );
        } else singleChis.push(0);
        index++;
      }

      // The last step is to add the single chi squared values up to the final chi squared value for the whole text

      return singleChis.reduce((total, num) => total + num);
    }
  };
  return difference();
};
