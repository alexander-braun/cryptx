const Trifid = (() => {

    let userInput, trifidKey, groupSize, tSthLetter

    const setUserInput = (value) => {
        userInput = value
    }

    const setTrifidKey = (value) => {
        trifidKey = value
    }

    const setGroupSize = (value) => {
        groupSize = value
    }

    const setTSthLetter = (value) => {
        tSthLetter = value
    }

    const encrypt = () => {
        
    }

    const setAll = (input, trifidKey, groupSize, tSthLetter) => {
        setUserInput(input)
        setTrifidKey(trifidKey)
        setGroupSize(groupSize)
        setTSthLetter(tSthLetter)
    }

    return {
        encrypt: transformText,
        setAll: setAll,
    }
})()

export default Trifid