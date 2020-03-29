const skytale = (() => {
    let userInput, caseFormat, ringLength, direction

    const setUserInput = (value) => {
        value = value.split(' ').join('')
        userInput = value
    }

    const setCase = (value) => {
        caseFormat = value
    }

    const setDirection = (value) => {
        direction = value
    }

    const setRingLength = (value) => {
        ringLength = value
    }

    const calcSkytaleLength = () => {
        return Math.ceil(userInput.length / ringLength)
    }

    const getProjectedValue = () => {
        let projectedValue = ''

        if(direction === 'encrypt') {
            setDirection('decrypt')
            projectedValue = transformText(false)[0]
            return projectedValue
        }
        else if(direction === 'decrypt') {
            let tempVal = transformText(false)[0]
            setUserInput(tempVal)
            setDirection('decrypt')
            projectedValue = transformText(false)[0]
            return projectedValue
        }
        return projectedValue
    }

    const transformText = () => {
        if(direction === 'encrypt') {
            if(!userInput) return ''
            const skytaleArr = [[]]
            let j = 0;
            for(let i = 0; i < userInput.length; i++) {
                if(i % ringLength === 0 && i !== 0) {
                    j++
                    skytaleArr.push([])
                    skytaleArr[j].push(userInput[i])
                } else {
                    skytaleArr[j].push(userInput[i])
                }
            }

            const encryptedText = []
            for(let i = 0; i < ringLength; i++) {
                for(let j = 0; j < skytaleArr.length; j++) {
                    if(skytaleArr[j][i]) encryptedText.push(skytaleArr[j][i])
                }
            }

            let encrypted

            if(caseFormat === 'ignore') {
                encrypted = encryptedText.join('').toLowerCase()
            }
            else {
                encrypted = encryptedText.join('')
            }

            let skytaleLenght = calcSkytaleLength()

            return [encrypted, skytaleLenght]
        }
        else if(direction === 'decrypt') {
            
            const skytaleRows = Math.ceil(userInput.length / ringLength)
            let lastRowLength = userInput.length % ringLength
            if(lastRowLength === 0) lastRowLength = ringLength

            const skyArr = []

            for(let i = 0; i < skytaleRows; i++) {
                skyArr.push([])
            }

            let indexOne = 0;
            for(let i = 0; i < lastRowLength; i++) {
                for(let j = 0; j < skytaleRows; j++) {
                    skyArr[j].push(userInput[indexOne])
                    indexOne++
                }
            }

            let restInput = userInput.slice(skytaleRows * lastRowLength)
            
            let indexTwo = 0
            for(let j = 0; j < ringLength - lastRowLength; j++) {
                for(let i = 0; i < skytaleRows - 1; i++) {
                    skyArr[i].push(restInput[indexTwo])
                    indexTwo++
                }    
            }
            
            let encrypted

            if(caseFormat === 'ignore') {
                encrypted = skyArr.flat().join('').toLowerCase()
            }
            else {
              encrypted = skyArr.flat().join('')  
            }

            let skytaleLenght = calcSkytaleLength()
            return [encrypted, skytaleLenght]
        }
    }

    const setAll = (direction, caseFormat, input, ringLength) => {
        setDirection(direction)
        setCase(caseFormat)
        setUserInput(input)
        setRingLength(ringLength)
    }

    return {
        encrypt: transformText,
        setUserInput: setUserInput,
        setRingLength: setRingLength,
        setCase: setCase,
        setDirection: setDirection,
        setAll: setAll,
        getProjectedValue: getProjectedValue
    }
})()

export default skytale