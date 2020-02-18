const Playfair = (() => {

    //Setup all variables
    
    let userInput, saltInput, alphabet, direction, wordbook, caseFormat, includeChars, keyphrase
    let replaceLetter = 'x'
    let missingLetter = 'j'
    let playSquare

    const getSquare = () => playSquare

    const setUserInput = (input) => {
        userInput = String(input);
    }

    const setSaltInput = (input) => {
        saltInput = Number(input);
    }

    const setAlphabet = (input) => {
        alphabet = input.split('')
    }

    const setForeignChars = (input) => {
        includeChars = input
    }

    const setCase = (input) => {
        caseFormat = input
    }

    const setDirection = (input) => {
        direction = input;
    }

    const setKeyPhrase = (input) => {
        keyphrase = input
    }

    const createPairsOfFive = (alphabet) => {

        // Sort the generated Alphabet into 5 pairs of 5 characters each
    
        const fiveElementPairs = [];
        let pair = [];
    
        for(let i = 0; i <= alphabet.length; i++){
            if(i === 0 || i % 5 !== 0) {
                pair.push(alphabet[i]);
            } else if(pair[0]) {
                fiveElementPairs.push(pair);
                pair = [];
                pair.push(alphabet[i]);
            }
        };
        return fiveElementPairs;
    }

    const rowColumnEncrypt = (element, charPair) => {

        // Get the next letter in the row/column or start from beginning of row/column and encrypt with index + 1
    
        let chars = [];
        
        for(let i = 0; i < 2; i++) {
            const index = element.indexOf(charPair[i]);
            if(index === 4) {
                if(direction === 'encrypt') { 
                    chars.push(element[0]); 
                } else {
                    chars.push(element[3]);
                }
            } else {
                if(direction === 'decrypt') {
                    let newIndex = index - 1;
                    if(newIndex < 0) newIndex = 4;
                    chars.push(element[newIndex]);
                } else {
                    chars.push(element[index + 1]);
                }
            }
        }
        return chars;
    }

    const methodFinder = (alphabet, charPair) => {
        const fiveElementPairs = createPairsOfFive(alphabet);
    
        // Find the method
    
        // Is the Method a row combination ?
        
        for(let element of fiveElementPairs) {
            if(element.indexOf(charPair[0]) !== -1  && element.indexOf(charPair[1]) !== -1) {
    
                //Encrypt and return
                return rowColumnEncrypt(element, charPair)
            }
        }
    
        // Is the Method a column combination ?
        // Convert all columns to rows for ease of use
    
        const fiveElementPairsReverse = [];
            
        for(let i = 0; i < 5; i++) {
            let columnArr = [];
            for(let j = 0; j < 5; j++) {
                columnArr.push(fiveElementPairs[j][i])
            }
            fiveElementPairsReverse.push(columnArr);
            columnArr = [];
        }
    
        // Then encrypt and return
    
        for(let element of fiveElementPairsReverse) {
            if(element.indexOf(charPair[0]) !== -1 && element.indexOf(charPair[1]) !== -1) {
                return rowColumnEncrypt(element, charPair);
            }
        }
    
        // Else the method is always 'rectangle':
    
        // Get the index of both elements in theire respective rows
    
        const indexes = [];
        let char1 = charPair[0];
        let char2 = charPair[1];
        
        for(let element of fiveElementPairs) {
            if(element.indexOf(char1) !== -1) {
                indexes[0] = element.indexOf(char1);
            } else if(element.indexOf(char2) !== -1) {
                indexes[1] = element.indexOf(char2);
            }
        }
    
        // Reverse the indexes to get the corresponding character of the row
    
        let encryptedChar1;
        let encryptedChar2;
    
        for(let element of fiveElementPairs) {
            if(element.indexOf(char1) !== -1) {
                encryptedChar1 = element[indexes[1]];
            } 
            if(element.indexOf(char2) !== -1) {
                encryptedChar2 = element[indexes[0]];
            }
        }
        return [encryptedChar1, encryptedChar2];
    }

    const alphabetFromCharacter = () => {
        const ommited = missingLetter;
    
        //generate alphabet from keyphrase with a set and push missing characters
    
        const key = [...new Set(keyphrase)];
        for(let char of alphabet) {
            if(key.indexOf(char) === -1) {
                key.push(char)
            }
        }
    
        // check if character is the ommited one. create element with id to visualize table.
        
        const arr = [];
        let index = 0;
    
        for(let char of key) {
            if(char !== ommited && alphabet.indexOf(char) !== -1) {
                arr.push(char);
                /*
                const id = 'table' + index;
                const element = document.getElementById(id);
                element.innerText = char;
                */
                index++;
            }
        }
        playSquare = arr;
        return arr;
    }

    const transformInput = (textinput) => {
        const twoLetterPairs = [];
        const cleanText = [...textinput];
    
        // Find elements that are the same in one pair f.e. 'ee' and replace them with the chosen character
        
        for(let i = 0; i < cleanText.length; i += 2){
            if(cleanText[i] === cleanText[i + 1]){
                cleanText.splice(i + 1, 0, replaceLetter)
            }
        };
    
        // Is the length odd ? Put an x at the end
    
        if(cleanText.length % 2 !== 0) {
            cleanText.push(replaceLetter);
        }
    
        // Push pairs of letters into array
    
        for(let i = 0; i < cleanText.length; i += 2) {
            twoLetterPairs.push([cleanText[i], cleanText[i + 1]]);
        };
        return twoLetterPairs;
    }

    const removeSigns = () => {
        let textinput = userInput.toLowerCase()
        let output = [];
        for(let char of textinput) {
            if(alphabet.indexOf(char) !== -1) {
                output.push(char);
            }
        }
        return output.join('');
    }

    const transformText = () => {

        // Get the pairs to encrypt
        const cleanInput = removeSigns();
        const pairs = transformInput(cleanInput);
        const alphabet = alphabetFromCharacter();
    
        // Feed the pairs to the methodfinder
        const encrypted = [];
    
        for(let element of pairs){
            encrypted.push(methodFinder(alphabet, element));
        }
    
        let unformatted = encrypted.join('').split(',').join('');
        //let formatted = spaceTransform(unformatted)
        return unformatted;
    }

    return {
        setUserInput: setUserInput,
        setAlphabet: setAlphabet,
        setDirection: setDirection,
        setForeignChars: setForeignChars,
        setCase: setCase,
        setKeyPhrase: setKeyPhrase,
        getSquare: getSquare,
        encrypt: transformText
    }
})();


export default Playfair;









/*

playfaireSquare() {
    //generate table with letters for playfair
    const visualMatrix = document.createElement('div');
    visualMatrix.id = 'visualMatrix';

    let indTable = 0;
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            const playfairTableElement = document.createElement('div');
            playfairTableElement.setAttribute('id', 'table' + indTable);
            playfairTableElement.setAttribute('class', 'playfairTable')
            visualMatrix.appendChild(playfairTableElement);
            indTable++;
        }
    }
    return visualMatrix;
},

removeMatrix() {
    if(document.getElementById('visualMatrix')) {
        const visualMatrix = document.getElementById('visualMatrix');
        visualMatrix.remove();
    }
},




*/