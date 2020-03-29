import math from '../math/Math'

const affine = (() => {

    //Setup all variables
    
    let userInput, alphabet, direction, caseFormat, includeChars, alpha, beta, correctedInput

    const setUserInput = (input) => {
        userInput = String(input);
        let temp = []
        for(let char of userInput) {
            if(alphabet.indexOf(char.toLowerCase()) !== -1) {
                temp.push(char)
            }
        }
        correctedInput = temp.join('')
    }

    const setAlpha = (input) => {
        alpha = Number(input)
    }

    const setBeta = (input) => {
        beta = Number(input)
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


    //Affine Method

    // Modulo to account for stupid js

    const modulo = (a, b) => {
        return(a % b + b) % b;
    }

    // Modular inverse by brute force
    
    const modInverse = (a, b) => {
        a %= b;
        for (var x = 1; x < b; x++) {
            if ((a * x) % b === 1) {
                return x;
            }
        }
    }

    const encrypt = (input, a, b) => {
        let arr = [];
        let lowerInput = input.toLowerCase()
        for(let i = 0; i < lowerInput.length; i++) {
            let char = lowerInput[i];
            if(alphabet.indexOf(char) !== -1) {
                let numberId = (a * alphabet.indexOf(char) + b) % alphabet.length;
                let character = alphabet[numberId];
                if(character === undefined) {
                    arr.push(char)
                } else arr.push(character);
            } else arr.push(lowerInput[i]);
        }
        return arr.join('');
    }

    

    const decrypt = (input, a, b) => {
        let arr = [];
        let inverseAlpha = modInverse(a, alphabet.length)
        let lowerInput = input.toLowerCase()
        for(let i = 0; i < lowerInput.length; i++) {
            let char = lowerInput[i];
            if(alphabet.indexOf(char) !== -1) {
                let indexChar = alphabet.indexOf(char)
                let resultIndex = modulo(inverseAlpha * (indexChar - b), alphabet.length)
                if(alphabet[resultIndex]) {
                    arr.push(alphabet[resultIndex])    
                } else {
                    arr.push(char)
                }
            } else {
                arr.push(char);
            }
        };
        return arr.join('');
    }

    const transformText = () => {
        let rawOutput
        direction === 'encrypt' ? rawOutput = encrypt(correctedInput, alpha, beta) : rawOutput = decrypt(correctedInput, alpha, beta)
        return math.transformCaseAndChars(userInput, rawOutput, caseFormat, includeChars)
    } 

    const setAll = (alphabet, input, affineAlpha, affineBeta, direction, foreignChars, caseFormat) => {
        setAlphabet(alphabet)
        setUserInput(input)
        setAlpha(affineAlpha)
        setBeta(affineBeta)
        setDirection(direction)
        setForeignChars(foreignChars)
        setCase(caseFormat)
    }

    return {
        setAll: setAll,
        encrypt: transformText
    }
})();


export default affine;

