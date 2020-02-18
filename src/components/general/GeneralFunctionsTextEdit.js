const GeneralFunctionsTextEdit = (() => {
    
    let userInput, output

    const setUserInput = (input) => {
        userInput = input
    }

    const setOutput = (input) => {
        output = input
    }

    const changeCase = () => {
        if(userInput.length !== output.length) return
        let arr = [];
        for(let i = 0; i < userInput.length; i++){
            userInput[i].toUpperCase() === userInput[i] ? arr.push(output[i].toUpperCase()) : arr.push(output[i]);
        }
        return arr.join('');
    }

    return {
        setUserInput: setUserInput,
        setOutput: setOutput,
        changeCase: changeCase
    }
})();


export default GeneralFunctionsTextEdit;

/*lq fubswrjudskb d fdhvdu flskhu dovr nqrzq dv fdhvduv flskhu
In cryptography, a Caesar cipher, also known as Caesar's cipher,*/