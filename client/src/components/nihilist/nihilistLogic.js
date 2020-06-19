const Nihilist = (() => {
  //Setup all variables

  let userInput, alphabet, direction, nihilistRunningKey, nihilistPlainNumbers;

  const setUserInput = (input) => {
    userInput = String(input);
  };

  const setAlphabet = (input) => {
    alphabet = input;
  };

  const setDirection = (input) => {
    direction = input;
  };

  let keyphrase;
  const setKeyPhrase = (input) => {
    keyphrase = input;
  };

  let cipherWord;
  const setCipherWord = (input) => {
    cipherWord = input;
  };

  const getNihilistRunningKey = () => {
    return nihilistRunningKey;
  };

  const getNihilistPlainNumbers = () => {
    return nihilistPlainNumbers;
  };

  const polybiusSquare = () => {
    if (typeof keyphrase === 'string') keyphrase = keyphrase.split('');
    const arr = [];
    for (let i = 0; i < keyphrase.length; i++) {
      if (
        alphabet.indexOf(keyphrase[i].toLowerCase()) !== -1 &&
        !arr.includes(keyphrase[i].toLowerCase()) &&
        keyphrase[i].toLowerCase() !== 'j'
      ) {
        arr.push(keyphrase[i].toLowerCase());
      }
    }
    for (let i = 0; i < alphabet.length; i++) {
      if (!arr.includes(alphabet[i]) && alphabet[i] !== 'j') {
        arr.push(alphabet[i]);
      }
    }
    const square = [];
    for (let i = 0; i < 5; i++) {
      square.push([]);
      for (let j = 0; j < 5; j++) {
        square[i].push(arr[i * 5 + j]);
      }
    }
    return square;
  };

  const getNumberForOne = (letter) => {
    let num1,
      num2,
      i = 0;
    let squareArr = polybiusSquare();
    for (let element of squareArr) {
      if (element.includes(letter.toLowerCase())) {
        num1 = i + 1;
        num2 = element.indexOf(letter.toLowerCase()) + 1;
        break;
      } else i++;
    }
    return `${num1}${num2}`;
  };

  const getNumbersText = (text) => {
    let array = [];
    for (let i = 0; i < text.length; i++) {
      if (alphabet.indexOf(text[i].toLowerCase()) !== -1) {
        if (isNaN(getNumberForOne(text[i]))) array.push(getNumberForOne('i'));
        else array.push(getNumberForOne(text[i]));
      }
    }
    return array;
  };

  const getNumbers = () => {
    let plainArray = getNumbersText(userInput);
    let keyArray = getNumbersText(cipherWord);
    return [plainArray, keyArray];
  };

  const encrypt = () => {
    let numberArray = getNumbers();
    let cleanKeyArr = [];
    let ind = 0;
    if (numberArray[0].length > numberArray[1].length) {
      for (let i = 0; i < numberArray[0].length; i++) {
        if (ind < numberArray[1].length - 1) {
          cleanKeyArr.push(numberArray[1][ind]);
          ind++;
        } else {
          cleanKeyArr.push(numberArray[1][ind]);
          ind = 0;
        }
      }
    } else cleanKeyArr = numberArray[1];

    nihilistRunningKey = cleanKeyArr;
    nihilistPlainNumbers = numberArray[0];

    let out = [];
    for (let i = 0; i < numberArray[0].length; i++) {
      out.push(Number(numberArray[0][i]) + Number(cleanKeyArr[i]));
    }

    return out.join(' ');
  };

  const subtractKeyFromPlaintext = (inputArray, cleanKeyArr) => {
    let outputNumbers = [];
    for (let i = 0; i < inputArray.length; i++) {
      outputNumbers.push(inputArray[i] - cleanKeyArr[i]);
    }
    return outputNumbers;
  };

  const transformNumbersToText = (numbers) => {
    const square = polybiusSquare();

    const plainTextArray = [];
    for (let number of numbers) {
      let numElem = String(number).split('');
      let letter = square[Number(numElem[0]) - 1][Number(numElem[1]) - 1];
      plainTextArray.push(letter);
    }
    return plainTextArray;
  };

  const decrypt = () => {
    let numberArray = getNumbers()[1];
    let inputArray = userInput.split(' ');
    if (inputArray[0].length !== 2) return '';

    let cleanKeyArr = [];
    let ind = 0;

    if (inputArray.length > numberArray.length) {
      for (let i = 0; i < inputArray.length; i++) {
        if (ind < numberArray.length - 1) {
          cleanKeyArr.push(numberArray[ind]);
          ind++;
        } else {
          cleanKeyArr.push(numberArray[ind]);
          ind = 0;
        }
      }
    } else cleanKeyArr = numberArray;

    let plainNumbers = subtractKeyFromPlaintext(inputArray, cleanKeyArr);
    let outputClearText = transformNumbersToText(plainNumbers);

    return outputClearText.join('');
  };

  const transformText = () => {
    if (cipherWord.length === 0) return 'Please enter a Keyphrase';
    for (let i = 0; i < alphabet.length; i++) {
      if (isNaN(Number(userInput[i])) && direction === 'decrypt') {
        return 'Not a valid input';
      }
    }
    return direction === 'encrypt' ? encrypt() : decrypt();
  };

  const setAll = (input, alphabet, direction, keyword, cipherWord) => {
    setUserInput(input);
    setAlphabet(alphabet);
    setDirection(direction);
    setKeyPhrase(keyword);
    setCipherWord(cipherWord);
  };

  return {
    setAll: setAll,
    transformText: transformText,
    getSquare: polybiusSquare,
    getNihilistRunningKey,
    getNihilistPlainNumbers,
  };
})();

export default Nihilist;
