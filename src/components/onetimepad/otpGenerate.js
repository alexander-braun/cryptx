import React from 'react'

const Otp = ({updateOtpKey, userInput, alphabet}) => {

    const randomKey = () => {
        let userInputLength = userInput.length;
        let randomArr = []
        let letters = alphabet.split('')
        for(let i = 0; i < userInputLength; i++) {
            randomArr.push(letters[Math.floor(Math.random() * 26)])
        }
        return randomArr.join('')
    }

    return (
        <div className="controller">
            <div className="settings_name">GENERATE RANDOM KEY</div>
            <div className="settings_operators">
                <div 
                    value = '-'
                    id="generate"
                    className="settings_operator" 
                    onClick={(evt) => {
                        updateOtpKey(randomKey())
                    }}
                >
                    Generate new random key
                </div>
                <div 
                    className="settings_operator" 
                    id="otpKey"
                >
            </div>
            </div>
        </div>
  )
}

export default Otp
