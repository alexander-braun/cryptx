import math from '../math/Math'

const otp = (() => {

    //Setup all variables
    math.restoreForeignChars()
    let userInput, direction, caseFormat, includeChars, key

    const setUserInput = (input) => {
        userInput = String(input);
    }

    const setForeignChars = (input) => {
        includeChars = input
    }

    const setCase = (input) => {
        caseFormat = input
    }

    const setDirection = (input) => {
        direction = input
    }

    const setKey = (input) => {
        key = input
    }



    const encrypt = () => {
        if(direction !== 'crack') {
            let rawOutput = '1' //readChar()
            return 'aldjksfasdf' //math.transformCaseAndChars(userInput, rawOutput, caseFormat, includeChars) 
        }
    }

    return {
        setUserInput: setUserInput,
        setDirection: setDirection,
        setForeignChars: setForeignChars,
        setCase: setCase,
        setKey: setKey,
        encrypt: encrypt
    }
})();


export default otp;