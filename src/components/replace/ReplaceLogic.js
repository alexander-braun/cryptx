const replace = (() => {

    let userInput, caseFormat, includeChars, toReplaceLetter, replaceLetter

    const setUserInput = (value) => {
        userInput = value
    }

    const setCase = (value) => {
        caseFormat = value
    }

    const setToReplaceLetter = (value) => {
        toReplaceLetter = value
    }

    const setReplaceLetter = (value) => {
        replaceLetter = value
    }

    const replaceAll = (str1, str2, ignore) => {
        return userInput.replace(new RegExp(str1.replace(/([/,!\\^${}[\]().*+?|<>\-&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
    };

    const transformText = () => {
        console.log(replaceAll(toReplaceLetter, replaceLetter, true))
        return replaceAll(toReplaceLetter, replaceLetter, true);
    }


    return {
        encrypt: transformText,
        setUserInput: setUserInput,
        setCase: setCase,
        setToReplaceLetter: setToReplaceLetter,
        setReplaceLetter: setReplaceLetter
    }
})()

export default replace