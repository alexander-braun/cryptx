import math from '../math/Math'

const atbash = (() => {

    //Setup all variables
    let userInput, direction, caseFormat, includeChars

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    alphabet = alphabet.split('')

    const setUserInput = (input) => {
        userInput = String(input);
    }

    const setForeignChars = (input) => {
        includeChars = input
    }

    const setCase = (input) => {
        caseFormat = input
    }

    //Encryption Method
    const readChar = () => {
        let cleanInput = math.cleanInput(userInput, false, false, alphabet)
        
        let alphabetReverse = [...alphabet].reverse()

        let output = []

        for(let char of cleanInput) {
            let charIndex = alphabet.indexOf(char);
            output.push(alphabetReverse[charIndex])   
        }
        
        return output.join('')
    }

    const checkIfSigns = () => {
        return alphabet.length > 26 ? false : true
    }

    //Crack or other ? Return the according method

    const encrypt = () => {
        let rawOutput = readChar()
        if(checkIfSigns()) {
            return math.transformCaseAndChars(userInput, rawOutput, caseFormat, includeChars) 
        } else return rawOutput
    }

    return {
        
        setUserInput: setUserInput,
        setForeignChars: setForeignChars,
        setCase: setCase,
        encrypt: encrypt
    }
})();


export default atbash;