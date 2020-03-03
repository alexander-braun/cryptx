import React from 'react'

const Otp = ({updateOtpKey, userInput, alphabet}) => {

    const genRandomKey = () => {
        let userInputLength = userInput.length;
        let randomArr = []
        let letters = alphabet.split('')
        for(let i = 0; i < userInputLength; i++) {
            randomArr.push(letters[Math.floor(Math.random() * 26)])
        }
        return randomArr.join('')
    }
    let randomKey = genRandomKey()

    return (
        <div className="controller">
            <div className="settings_name">GENERATE RANDOM KEY</div>
            <div className="settings_operators" id="genRandomTab">
                <div 
                    className="settings_operator" 
                    id="otpKey"
                >
                    {randomKey}
                </div>
                <button 
                    value = '-'
                    id="generate"
                    className="settings_operator" 
                    onClick={(evt) => {
                        randomKey = genRandomKey()
                        updateOtpKey(randomKey)
                    }}
                >
                    Generate new random key
                </button>
            </div>
        </div>
  )
}

export default Otp
