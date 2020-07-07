const morse = (() => {
  //Setup all variables

  let userInput;

  const characters = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    ä: '.-.-',
    á: '.--.-',
    å: '.--.-',
    é: '..-..',
    ñ: '--.--',
    ö: '---.',
    ü: '..--',
    '&': '.-...',
    "'": '.----.',
    '@': '.--.-.',
    ')': '-.--.-',
    '(': '-.--.',
    ':': '---...',
    ',': '--..--',
    '=': '-...-',
    '!': '-.-.--',
    '.': '.-.-.-',
    '-': '-....-',
    '+': '.-.-.',
    '"': '.-..-.',
    '?': '..--..',
    '/': '-..-.',
  };

  const encrypt = (inputArray) => {
    const outputArray = [];
    for (const char of inputArray) {
      const lowerChar = char.toLowerCase();
      if (characters[lowerChar]) {
        outputArray.push(characters[lowerChar] + ' ');
      } else if (char === ' ') {
        outputArray.push('/ ');
      } else {
        return [char, '...is not defined in Morse Code'];
      }
    }
    return outputArray;
  };

  const decrypt = (inputArray) => {
    const outputArray = [];
    const values = Object.values(characters);
    for (let i = 0; i < inputArray.length; i++) {
      const char = inputArray[i];
      if (char === '/') {
        outputArray.push(' ');
      } else if (values.indexOf(char) !== -1) {
        outputArray.push(
          Object.keys(characters).find((key) => characters[key] === char)
        );
      } else if (char) {
        return ['Invalid Characters or not valid Morse Code'];
      }
    }
    return outputArray;
  };

  const transformText = (input, direction) => {
    userInput = input;

    if (direction === 'encrypt') {
      const inputArray = [...userInput];
      return encrypt(inputArray).join(' ');
    } else {
      const inputArray = userInput.trim().split(' ');
      return decrypt(inputArray).join('');
    }
  };

  return {
    encrypt: transformText,
  };
})();

export default morse;
