const CaseTransform = (() => {
    let userInput, caseTransformChoice

    const setUserInput = (value) => {
        userInput = value
    }
    
    const setCaseTransformChoice = (value) => {
        caseTransformChoice = value
    }

    const transformText = () => {
        if(!userInput) return ''
        userInput.trim()
        if(caseTransformChoice === 'lower') {
            return userInput.toLowerCase()
        } else if(caseTransformChoice === 'upper') {
            return userInput.toUpperCase()
        } else if(caseTransformChoice === 'capitalize') {
            let words = userInput.split(' ')
            let wordsUpper = []
            for(let word of words) {
                let transformed = word.toLowerCase().split('')
                if(transformed[0] !== undefined) {
                    transformed[0] = transformed[0].toUpperCase()    
                }
                transformed = transformed.join('')
                wordsUpper.push(transformed)
                wordsUpper.push(' ')  
            }
            return wordsUpper.join('')
        } else if(caseTransformChoice === 'alternating') {
            let wordsAlternate = []
            for(let i = 0; i < userInput.length; i++) {
                i % 2 === 0 ? wordsAlternate.push(userInput[i].toLowerCase()) : wordsAlternate.push(userInput[i].toUpperCase())
            }
            return wordsAlternate.join('')
        } else if(caseTransformChoice === 'inverse') {
            let wordsInverse = []
            for(let i = 0; i < userInput.length; i++) {
                userInput[i].toLowerCase() === userInput[i] ? wordsInverse.push(userInput[i].toUpperCase()) : wordsInverse.push(userInput[i].toLowerCase())
            }
            return wordsInverse.join('')
        }
    }

    const setAll = (input, caseTransformChoice) => {
        setUserInput(input)
        setCaseTransformChoice(caseTransformChoice)
    }

    return {
        encrypt: transformText,
        setAll: setAll,
    }
})()

export default CaseTransform