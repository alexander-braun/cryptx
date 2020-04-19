const Reverse = (() => {
    let userInput, caseFormat, foreignChars, alphabet

    const setUserInput = (value) => {
        userInput = value
    }

    const setCaseFormat = (value) => {
        caseFormat = value
    }

    const setForeignChars = (value) => {
        foreignChars = value
    }
    
    const setAlphabet = (value) => {
        alphabet = value
    }

    const transformText = () => {
        //Calc
        let output = []
        for(let i = userInput.length - 1; i >= 0; i--) {
            output.push(userInput[i])
        }

        //Format
        let formattedOutput = []
        
        if(foreignChars === 'ignore') {
            for(let char of output) {
                if(alphabet.indexOf(char.toLowerCase()) !== -1 || char === ' ') {
                    formattedOutput.push(char)
                }
            }
        } else formattedOutput = output

        if(caseFormat === 'ignore') {
            formattedOutput = formattedOutput.join('').toLowerCase()
        } else formattedOutput = formattedOutput.join('')

        return formattedOutput
    }

    const setAll = (input, caseFormat, foreignChars, alphabet) => {
        setUserInput(input)
        setCaseFormat(caseFormat)
        setForeignChars(foreignChars)
        setAlphabet(alphabet)
    }

    return {
        encrypt: transformText,
        setAll: setAll,
    }
})()

export default Reverse