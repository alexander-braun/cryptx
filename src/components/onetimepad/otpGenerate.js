import React from 'react'

const Otp = ({genRandomKey, otpKey}) => {

    return (
        <div className="controller">
            <div className="settings_name">GENERATE RANDOM KEY</div>
            <div className="settings_operators" id="genRandomTab">
                <div 
                    className="settings_operator" 
                    id="otpKey"
                >
                    {otpKey}
                </div>
                <button 
                    id="generate"
                    className="settings_operator" 
                    onClick={() => {
                        genRandomKey()
                    }}
                >
                    Generate new random key
                </button>
                <div id="caesar_explanatory_text">
                    <p className="feature_text"> 
                        For the purpose of trying out de- and encryption with the same key, the key will not
                        update when your input message updates.
                    </p>
                </div>    
            </div>
        </div>
  )
}

export default Otp
