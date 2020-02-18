const math = (() => {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    const addSigns = (textoutput, textinput) => {
        let output = [];
        let i = 0;
        for(let element of textinput) {
            if(alphabet.indexOf(element.toLowerCase()) === -1) {
                output.push(element);
                if(element === ' ') i++
            } else {
                output.push(textoutput[i]);
                i++;
            }
        }
        return output.join('');
    }

    const addSpaces = (userinput, encrypted) => {
        let arr =  [...encrypted]
        for(let i = 0; i < userinput.length; i++) {
            if(userinput[i] === ' ') {
                arr.splice(i, 0, userinput[i]);
            }
        }
        return arr.join('')
    }

    const removeSigns = (textinput) => {
        textinput = textinput.toLowerCase()
        let output = [];
        for(let char of textinput) {
            if(alphabet.indexOf(char) !== -1) {
                output.push(char);
            }
        }
        return output.join('');
    }

    const correctCase = (userInput, output) => {
        let noSigns = []
        for(let char of userInput) {
            if(alphabet.indexOf(char.toLowerCase()) !== -1 || char === ' ') {
                noSigns.push(char)
            }
        }
        noSigns = noSigns.join('')

        let caseCorrected = []

        for(let i = 0; i < userInput.length; i++) {
            if(userInput[i].toLowerCase() === userInput[i]) {
                caseCorrected.push(output[i])
            } else {
                caseCorrected.push(output[i].toUpperCase())
            }
        }
        return caseCorrected.join('')
    }

    return {
        removeSigns: removeSigns,
        addSpaces: addSpaces,
        addSigns: addSigns,
        correctCase: correctCase
    }
})();


export default math;