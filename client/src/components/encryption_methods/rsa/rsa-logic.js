const Rsa = (() => {
  const bigInt = require('big-integer');

  let prime_one, prime_two, e, phi, userInput, n, d;

  const setPrimeOne = (val) => {
    prime_one = val;
  };

  const setPrimeTwo = (val) => {
    prime_two = val;
  };

  const setE = (val) => {
    e = val;
  };

  const setUserInput = (val) => {
    userInput = val;
  };

  const encrypt = () => {
    if (userInput === '' || !userInput || !e || !n) return;

    let t0 = performance.now();

    //First check if phi and e are coprime otherwise this is a waste of time.
    let gcd = bigInt.gcd(phi, e);
    if (bigInt(gcd).compare(bigInt(1)) !== 0)
      return [
        '!!! φ(n) and e are not coprime - gcd of φ(n) and e is ' +
          gcd +
          ' Please check that you have two prime numbers and an appropriate e without a common gcd!!!',
        '',
      ];

    //Convert Input to Dezimal to get an encryptable number
    let inputArr = userInput.split('');
    let dezArr = [];
    for (let element of inputArr) {
      dezArr.push(element.charCodeAt(0));
    }
    let longNumber = dezArr.join('');
    //Encrypt the Number
    let encryptedDEZ = bigInt(longNumber).modPow(e, n);

    //let encryptedHEX = encryptedDEZ.toString(16)
    let t1 = performance.now();

    if (!encryptedDEZ || !t1 || !t0 || t1 - t0 === undefined)
      return ['Bad Input', ''];
    return [
      encryptedDEZ.toString(),
      Math.round((t1 - t0) / 1000).toString() + 's',
      calcPhi(),
      calcD(),
      calcN(),
    ];
  };

  const decrypt = () => {
    let t0 = performance.now();
    if (userInput.length === 0 || !d || !n) return;

    //Check if we are trying to decrypt a number
    let numbers = '0123456789';
    for (let i = 0; i < userInput.length; i++) {
      if (numbers.indexOf(userInput[i]) === -1)
        return [
          `Please don't enter anything but a big number into the input field when you decrypt something.`,
          '',
        ];
    }

    let decryptedDEZ = bigInt(userInput).modPow(d, n).toString();
    let decryptedArr = [];
    let i = 0;
    while (decryptedDEZ.length > 0) {
      if (
        Number(
          String(decryptedDEZ[i]) +
            String(decryptedDEZ[i + 1]) +
            String(decryptedDEZ[i + 2])
        ) <= 255
      ) {
        decryptedArr.push(
          Number(
            String(decryptedDEZ[i]) +
              String(decryptedDEZ[i + 1]) +
              String(decryptedDEZ[i + 2])
          )
        );
        decryptedDEZ = decryptedDEZ.slice(3);
      } else if (
        Number(String(decryptedDEZ[i]) + String(decryptedDEZ[i + 1])) <= 255
      ) {
        decryptedArr.push(
          Number(String(decryptedDEZ[i]) + String(decryptedDEZ[i + 1]))
        );
        decryptedDEZ = decryptedDEZ.slice(2);
      } else {
        return ['Something went wrong...', ''];
      }
    }

    let decryptedLetters = [];
    for (let i = 0; i < decryptedArr.length; i++) {
      let char = String.fromCharCode(decryptedArr[i]);
      decryptedLetters.push(char);
    }

    let t1 = performance.now();

    if (!decryptedLetters || !t1 || !t0 || t1 - t0 === undefined)
      return ['Bad Input', ''];

    return [
      decryptedLetters.join(''),
      Math.round((t1 - t0) / 1000).toString() + 's',
      calcPhi(),
      calcD(),
      calcN(),
    ];
  };

  const calcPhi = () => {
    let bigP1 = bigInt(prime_one);
    let bigP2 = bigInt(prime_two);
    let big1 = bigInt(1);
    phi = bigInt(bigP1).minus(bigInt(big1)).times(bigInt(bigP2).minus(big1));
    return phi.toString();
  };

  const calcD = () => {
    if (!e || !phi || e === null || phi === null) return;

    //Calc to check if coprime before modInverse
    let gcd = bigInt.gcd(phi, e);
    if (bigInt(gcd).compare(bigInt(1)) !== 0) return [gcd];

    d = bigInt(e).modInv(bigInt(phi)).toString();
    return d;
  };

  const calcN = () => {
    n = bigInt(prime_one).times(bigInt(prime_two));
    return n.toString();
  };

  const numberChecker = (input) => {
    if (!input) return;
    let numbers = '0123456789'.split('');
    for (let i = 0; i < input.length; i++) {
      if (numbers.indexOf(input[i]) === -1) return false;
    }
    return true;
  };

  const setAll = (input, prime1, prime2, e) => {
    setUserInput(input);
    setPrimeOne(prime1);
    setPrimeTwo(prime2);
    setE(e);
    if (
      !numberChecker(prime_one) ||
      !numberChecker(prime_two) ||
      !numberChecker(e)
    ) {
      return;
    }
    phi = calcPhi();
    d = calcD();
    n = calcN();
  };

  const calc = (input, prime1, prime2, e, direction) => {
    setAll(input, prime1, prime2, e);
    if (typeof calcD() === 'object')
      return [
        '!!! φ(n) and e are not coprime - gcd of φ(n) and e is ' +
          calcD().join('') +
          ' Please check that you have two prime numbers and an appropriate e without a common gcd!!!',
        '',
      ];
    if (
      !numberChecker(prime_one) ||
      !numberChecker(prime_two) ||
      !numberChecker(e) ||
      !numberChecker(d) ||
      !numberChecker(n)
    ) {
      return ['BAD INPUT', 'BAD INPUT', 'BAD INPUT', 'BAD INPUT', 'BAD INPUT'];
    }

    return direction === 'encrypt' ? encrypt() : decrypt();
  };

  return {
    encrypt: encrypt,
    decrypt: decrypt,
    calcD: calcD,
    calcPhi: calcPhi,
    calcN: calcN,
    setAll: setAll,
    calc: calc,
  };
})();

export default Rsa;
