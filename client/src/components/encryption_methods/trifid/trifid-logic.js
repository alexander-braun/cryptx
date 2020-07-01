const Trifid = (() => {
  let userInput, trifidKey, groupSize, twentySeventhLetter, alphabet;

  const setUserInput = (value) => {
    userInput = value;
  };

  const setAlphabet = (value) => {
    alphabet = value;
  };

  const setTrifidKey = (value) => {
    trifidKey = value;
  };

  const setGroupSize = (value) => {
    groupSize = Number(value);
  };

  const setTwentySeventhLetterLetter = (value) => {
    twentySeventhLetter = value;
  };

  const generateLayerElement = (letters) => {
    const element = [];
    for (let i = 0; i < 3; i++) {
      element.push(letters[i]);
    }
    return element;
  };

  const generateOneLayer = (letters) => {
    const layer = [];
    for (let i = 0; i < 9; i += 3) {
      let threeLetters = [letters[i], letters[i + 1], letters[i + 2]];
      layer.push(generateLayerElement(threeLetters));
    }
    return layer;
  };

  const genKey = () => {
    const key = [];
    for (let i = 0; i < 26; i++) {
      if (
        trifidKey[i] &&
        key.indexOf(trifidKey[i].toLowerCase()) === -1 &&
        alphabet.indexOf(trifidKey[i].toLowerCase()) !== -1
      ) {
        key.push(trifidKey[i].toLowerCase());
      }
    }
    for (let i = 0; i < 26; i++) {
      if (key.indexOf(alphabet[i].toLowerCase()) === -1) {
        key.push(alphabet[i].toLowerCase());
      }
    }
    key.push(twentySeventhLetter);
    return key;
  };

  const generateAllLayers = () => {
    const key = genKey();
    const layers = [];
    for (let i = 0; i < 3; i++) {
      layers.push(generateOneLayer(key.slice(i * 9, i * 9 + 9)));
    }
    return layers;
  };

  const getRowAndColumn = (layer, letter) => {
    let index = 0;
    for (let layerRow of layer) {
      if (layerRow.indexOf(letter.toLowerCase()) !== -1) {
        return [index, layerRow.indexOf(letter.toLowerCase())];
      } else index++;
    }
    return undefined;
  };

  const getEncodedNumber = (layers, letter) => {
    let layerindex = 0;
    for (let layerElement of layers) {
      const rowCol = getRowAndColumn(layerElement, letter);
      if (rowCol !== undefined) {
        return [layerindex, ...rowCol];
      } else layerindex++;
    }
    return undefined;
  };

  const encodeLetters = () => {
    const layers = generateAllLayers();
    const numbers = [];
    for (let i = 0; i < userInput.length; i++) {
      const num = getEncodedNumber(layers, userInput[i]);
      if (num !== undefined) {
        numbers.push(num);
      }
    }
    return numbers;
  };

  const generateGroup = (groupNumber) => {
    let encodedLettersArr = encodeLetters();
    let group = [];
    for (
      let i = groupNumber * groupSize;
      i < groupNumber * groupSize + groupSize;
      i++
    ) {
      group.push(encodedLettersArr[i]);
    }
    return group;
  };

  const cleanInputLength = () => {
    let cleanInputLength = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (alphabet.indexOf(userInput[i].toLowerCase()) !== -1)
        cleanInputLength++;
    }
    return cleanInputLength;
  };

  const generateGroups = () => {
    let groups = [];
    for (let i = 0; i < Math.ceil(cleanInputLength() / groupSize); i++) {
      groups.push(generateGroup(i));
    }
    return groups;
  };

  //GENERATES THE FINAL SCHEME TO ENCRYPT BY
  const transformToEncryptedGroup = (groupNumber) => {
    let group = generateGroups()[groupNumber];

    const encodedGroup = [[]];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < groupSize; j++) {
        if (!group[j] || isNaN(group[j][i])) break;
        encodedGroup[i].push(group[j][i]);
      }
      encodedGroup.push([]);
    }
    let encodedNumbers = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < groupSize; j++) {
        encodedNumbers.push(encodedGroup[i][j]);
      }
    }

    let encodedNumbersClean = [];
    for (let i = 0; i < encodedNumbers.length; i++) {
      if (encodedNumbers[i] !== undefined) {
        encodedNumbersClean.push(encodedNumbers[i]);
      }
    }

    let encodedNumbersArray = [[]];
    let index = 0;
    for (let i = 0; i < encodedNumbersClean.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        encodedNumbersArray.push([]);
        index++;
      }
      encodedNumbersArray[index].push(encodedNumbersClean[i]);
    }
    return encodedNumbersArray;
  };

  const transformAllGroups = () => {
    let groups = [];
    const length = generateGroups().length;
    for (let i = 0; i < length; i++) {
      groups.push(transformToEncryptedGroup(i));
    }
    return groups;
  };

  const cleanLettersEncrypt = () => {
    let groups = transformAllGroups();
    const cleanGroups = [];
    for (let i = 0; i < groups.length; i++) {
      cleanGroups.push(...groups[i]);
    }
    let allLayers = generateAllLayers();
    let decrypted = [];
    for (let i = 0; i < cleanGroups.length; i++) {
      let numbers = cleanGroups[i];
      decrypted.push(allLayers[numbers[0]][numbers[1]][numbers[2]]);
    }
    return decrypted.join('');
  };

  //Decryption Process
  const generateDecryptionGroups = () => {
    let encodedNumbers = encodeLetters().flat();
    let groups = [];
    for (let i = 0; i < Math.ceil(cleanInputLength() / groupSize); i++) {
      groups.push([]);
      groups[i].push(
        encodedNumbers.slice(
          i * groupSize * 3,
          i * groupSize * 3 + groupSize * 3
        )
      );
    }

    let groupsDecodedNumbers = [];
    for (let i = 0; i < groups.length; i++) {
      groupsDecodedNumbers.push(generateOneDecryptionGroup(groups[i]));
    }
    return groupsDecodedNumbers;
  };

  const generateOneDecryptionGroup = (slice) => {
    let groupsRow = [];
    for (let j = 0; j < 3; j++) {
      groupsRow.push(
        slice[0].slice(
          (j * slice[0].length) / 3,
          (j * slice[0].length) / 3 + slice[0].length / 3
        )
      );
    }

    const cleanGroupsRow = [];
    for (let i = 0; i < groupsRow.length; i++) {
      if (groupsRow[i].length !== 0) {
        cleanGroupsRow.push(groupsRow[i]);
      }
    }
    const groupsCol = [];
    for (let i = 0; i < groupSize; i++) {
      groupsCol.push([]);
      for (let j = 0; j < cleanGroupsRow.length; j++) {
        groupsCol[i].push(cleanGroupsRow[j][i]);
      }
    }

    const cleanGroupsCol = [];
    for (let i = 0; i < groupsCol.length; i++) {
      if (groupsCol[i][0] !== undefined) cleanGroupsCol.push(groupsCol[i]);
    }

    return cleanGroupsCol;
  };

  const cleanLettersDecrypt = () => {
    let groups = generateDecryptionGroups();
    const cleanGroups = [];
    for (let i = 0; i < groups.length; i++) {
      cleanGroups.push(...groups[i]);
    }

    let allLayers = generateAllLayers();

    let decrypted = [];
    for (let i = 0; i < cleanGroups.length; i++) {
      let numbers = cleanGroups[i];
      decrypted.push(allLayers[numbers[0]][numbers[1]][numbers[2]]);
    }
    return decrypted.join('');
  };

  const encrypt = (
    input,
    trifidKey,
    groupSize,
    twentySeventhLetter,
    alphabet,
    direction
  ) => {
    setAll(
      input,
      trifidKey,
      groupSize,
      twentySeventhLetter,
      alphabet,
      direction
    );
    if (!userInput || userInput.length === 0)
      return [null, generateAllLayers(), null];
    if (direction === 'encrypt') {
      return [cleanLettersEncrypt(), generateAllLayers(), encodeLetters()];
    } else {
      return [
        cleanLettersDecrypt(),
        generateAllLayers(),
        generateDecryptionGroups().flat(1),
      ];
    }
  };

  const setAll = (
    input,
    trifidKey,
    groupSize,
    twentySeventhLetter,
    alphabet
  ) => {
    setUserInput(input);
    setTrifidKey(trifidKey);
    setGroupSize(groupSize);
    setTwentySeventhLetterLetter(twentySeventhLetter);
    setAlphabet(alphabet);
  };

  return {
    encrypt: encrypt,
    setAll: setAll,
  };
})();

export default Trifid;
