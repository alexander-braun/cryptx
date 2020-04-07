import React from 'react'
import ExplanatoryText from './ExplanatoryText'
import BlockHeadSettings from './BlockHeadSettings'
import Settings from './settings'

const BlockElementSettings = ({
                                skytalePlusMinus,
                                alphabet, 
                                alphabetUpdate, 
                                selectCase, 
                                includeChars, 
                                method, 
                                methodNameInset, 
                                changeDirection, 
                                direction,
                                setAlpha,
                                setBeta,
                                updateKeyword,
                                keyword,
                                playSquare,
                                ringLength,
                                skytaleLength,
                                skytaleProjectedValue,
                                alphabetActive,
                                updateOtpKey,
                                genRandomKey,
                                otpKey,
                                inputValue,
                                setPrimeOne,
                                setPrimeTwo,
                                setE,
                                e,
                                prime_one,
                                prime_two,
                                phi,
                                n,
                                d,
                                timeToCalculate
                                }) => {
  return (
    <div className="block_settings">
      <BlockHeadSettings 
        methodNameInset={methodNameInset}
        changeDirection={changeDirection}
      />
      <div className="block_body">
          <div className="block_body_input">
              <Settings 
                alphabetActive = {alphabetActive}
                direction={direction}
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
                ringLength = {ringLength}
                skytaleLength = {skytaleLength}
                skytaleProjectedValue = {skytaleProjectedValue}
                updateOtpKey = {updateOtpKey}
                inputValue = {inputValue}
                genRandomKey = {genRandomKey}
                otpKey = {otpKey}
                setPrimeOne = {setPrimeOne}
                setPrimeTwo = {setPrimeTwo}
                setE = {setE}
                e = {e}
                prime_one = {prime_one}
                prime_two = {prime_two}
                phi = {phi}
                n = {n}
                d = {d}
                timeToCalculate = {timeToCalculate}
                skytalePlusMinus = {skytalePlusMinus}
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

