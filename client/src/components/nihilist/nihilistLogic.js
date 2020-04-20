const Playfair = (() => {

    //Setup all variables
    
    let userInput, alphabet, direction, keyphrase, cipherWord

    const getSquare = () => playSquare

    const setUserInput = (input) => {
        userInput = String(input);
    }

    const setAlphabet = (input) => {
        alphabet = input.split('')
    }

    const setDirection = (input) => {
        direction = input;
    }

    const setKeyPhrase = (input) => {
        keyphrase = input
    }

    const setCipherWord = (input) => {
        cipherWord = input
    }

    const polybiusSquare = () => {
        let keyphrase = 'ZEBRAS'
        keyphrase = keyphrase.split('')
        const arr = []
        for(let i = 0; i < keyphrase.length; i++) {
            if( alphabet.indexOf(keyphrase[i].toLowerCase()) !== -1 && 
                !arr.includes(keyphrase[i].toLowerCase()) &&
                keyphrase[i].toLowerCase() !== 'j'
                ) {
                arr.push(keyphrase[i].toLowerCase())    
            }
        }
        for(let i = 0; i < alphabet.length; i++) {
            if(!arr.includes(alphabet[i]) && alphabet[i] !== 'j') {
                arr.push(alphabet[i])
            }
        }
        const square = []
        for(let i = 0; i < 5; i++) {
            square.push([])
            for(let j = 0; j < 5; j++) {
                square[i].push(arr[i * 5 + j])
            }
        }
        return square
    }

    const getNumberForOne = (letter) => {
        let num1, num2, i = 0
        for(let element of polybiusSquare()) {
            if(element.includes(letter.toLowerCase())) {
                num1 = i + 1
                num2 = element.indexOf(letter.toLowerCase()) + 1
                break
            } else i++
        }
        return `${num1}${num2}`
    }

    const getNumbersText = (text) => {
        let array = []
        for(let i = 0; i < text.length; i++) {
            if(alphabet.indexOf(text[i].toLowerCase()) !== -1) {
                array.push(getNumberForOne(text[i]))    
            } else array.push(text[i])
        }
        return array
    }

    const getNumbers = () => {
        let plainArray = getNumbersText(userInput)
        let keyArray = getNumbersText(cipherWord)
        return [plainArray, keyArray]
    }

    const encrypt = () => {
        let numberArray = getNumbers()
        let output = []
        let cleanKeyArr = []
        let ind = 0
        if(numberArray[0].length > numberArray[1].length) {
            for(let i = 0; i < numberArray[0].length; i++) {
                if(ind < numberArray[1].length - 1) {
                    cleanKeyArr.push(numberArray[1][ind])
                    ind++
                } else {
                    cleanKeyArr.push(numberArray[1][ind])
                    ind = 0
                }
            }
        }

        for(let i = 0; i < numberArray[0].length; i++) {
            output.push(Number(numberArray[0][i]) + Number(cleanKeyArr[i]))
        }
        return output
    }

    const setAll = (input, alphabet, direction, keyword, cipherWord) => {
        setUserInput(input)
        setAlphabet(alphabet)
        setDirection(direction)
        setKeyPhrase(keyword)
        setCipherWord(cipherword)
    }

    return {
        getSquare: getSquare,
        setAll: setAll,
        encrypt: encrypt
    }
})();


export default Playfair