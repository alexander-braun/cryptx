const math = (() => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    //Get rid of everything besides pure characters
    //Return lowercase string
    const modInverse = (a, b) => {
        a %= b;
        for (var x = 1; x < b; x++) {
            if ((a * x) % b === 1) {
                return x;
            }
        }
    }

    const cleanInput = (input, blankSpaces, caseSensitive, alphab) => {
        if(input.length === 0) return null
        const inputArr = input.toLowerCase().split('')
        
        if(!alphab) alphab = alphabet;

        let cleanOutput

        if(blankSpaces) {
            if(caseSensitive) {
                cleanOutput = input.split('').filter(char => alphab.indexOf(char.toLowerCase()) !== -1 || char === ' ')
            }
            else if(caseSensitive === false) {
                cleanOutput = inputArr.filter(char => alphab.indexOf(char) !== -1 || char === ' ')      
            }
        } 
        else if(blankSpaces === false) {
            if(caseSensitive) {
                cleanOutput = input.split('').filter(char => alphab.indexOf(char.toLowerCase()) !== -1)
            }
            else if(caseSensitive === false) {
                cleanOutput = inputArr.filter(char => alphab.indexOf(char) !== -1)    
            }
        }

        return cleanOutput.join('')
    }

    //take raw input and lowercase/nosign- output
    //return a string without signs but with correct case format

    const restoreCase = (input, output) => {
        input = input.split('')
        output = output.split('')

        let restoredCaseArr = []
        

        for(let i = 0; i < input.length; i++) {
            if(output[i] && input[i]) {
                input[i].toLowerCase() === input[i] ? restoredCaseArr.push(output[i].toLowerCase()) : restoredCaseArr.push(output[i].toUpperCase())     
            }
        }

        return restoredCaseArr.join('')
    }

    // take raw input and casesensitive output
    // return a string with signs and correct case format and blank spaces

    const restoreForeignChars = (input, output) => {
        input = String(input)
        output = String(output)

        let index = 0;
        let restoredForeignCharsArr = []

        for(let character of input) {
            if(alphabet.indexOf(character.toLowerCase()) !== -1) {
                restoredForeignCharsArr.push(output[index])
                index++
            }
            else if(alphabet.indexOf(character.toLowerCase()) === -1) {
                restoredForeignCharsArr.push(character)
            }
        }
        
        return restoredForeignCharsArr.join('')
    }


    const transformCaseAndChars = (userInput, rawOutput, caseFormat, includeChars) => {

        let cleanOutput

        if(caseFormat === 'maintain') {
            if(includeChars === 'include') {
                cleanOutput = math.restoreForeignChars(userInput, rawOutput)
                cleanOutput = math.restoreCase(userInput, cleanOutput)
                return cleanOutput
            }
            else if(includeChars === 'ignore') {
                cleanOutput = math.restoreForeignChars(userInput, rawOutput)
                cleanOutput = math.restoreCase(userInput, cleanOutput)
                cleanOutput = math.cleanInput(cleanOutput, true, true)
                return cleanOutput
            }
        }
        else if(caseFormat === 'ignore') {
            if(includeChars === 'include') {
                cleanOutput = math.restoreForeignChars(userInput, rawOutput)
                cleanOutput = math.restoreCase(userInput, cleanOutput)
                return cleanOutput.toLowerCase()
            }
            else if(includeChars === 'ignore') {
                cleanOutput = math.restoreForeignChars(userInput, rawOutput)
                cleanOutput = math.restoreCase(userInput, cleanOutput)
                cleanOutput = math.cleanInput(cleanOutput, true, true)
                return cleanOutput.toLowerCase()
            }
        }
    }

    return {
        transformCaseAndChars: transformCaseAndChars,
        cleanInput: cleanInput,
        restoreCase: restoreCase,
        restoreForeignChars: restoreForeignChars,
        modInverse: modInverse
    }
})();

export default math;