import React from 'react'
import ExplanatoryText from './ExplanatoryText'
import BlockHeadSettings from './BlockHeadSettings'
import BlockBodyInput from './BlockBodyInput'

const BlockElementSettings = ({ plusMinus,
                                cShift, 
                                alphabet, 
                                alphabetUpdate, 
                                selectCase, 
                                includeChars, 
                                switchModal, 
                                method, 
                                methodNameInset, 
                                changeDirection, 
                                direction,
                                setAlpha,
                                setBeta,
                                updateKeyword,
                                keyword,
                                playSquare,
                                setReplaceLetters,
                                toReplaceLetter,
                                replaceLetter,
                                ringLength,
                                skytaleLength,
                                skytaleProjectedValue,
                                alphabetActive,
                                updateOtpKey,
                                userInput,
                                genRandomKey,
                                otpKey
                                }) => {
  return (
    <div className="block_settings">
      <div className="block_top_decoration"></div>
      <BlockHeadSettings 
        switchModal={switchModal} 
        methodNameInset={methodNameInset}
        changeDirection={changeDirection}
      />
      <div className="block_body">
          <div className="block_body_input">
              <BlockBodyInput 
                alphabetActive = {alphabetActive}
                direction={direction}
                plusMinus={plusMinus}
                cShift={cShift}
                alphabet={alphabet}
                alphabetUpdate={alphabetUpdate}
                selectCase={selectCase}
                includeChars={includeChars}
                method={method}
                setAlpha={setAlpha}
                setBeta={setBeta}
                updateKeyword={updateKeyword}
                keyword={keyword}
                playSquare = {playSquare}
                setReplaceLetters = {setReplaceLetters}
                toReplaceLetter = {toReplaceLetter}
                replaceLetter = {replaceLetter}
                ringLength = {ringLength}
                skytaleLength = {skytaleLength}
                skytaleProjectedValue = {skytaleProjectedValue}
                updateOtpKey = {updateOtpKey}
                userInput = {userInput}
                genRandomKey = {genRandomKey}
                otpKey = {otpKey}
              />
              
              <ExplanatoryText 
                direction={direction}
                method={method}
              />
          </div>
      </div>
    </div>
  )
}

export default BlockElementSettings

