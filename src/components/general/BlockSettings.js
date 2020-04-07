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
                                setAlpha,
                                setBeta,
                                updateKeyword,
                                keyword,
                                playSquare,
                                skytaleLength,
                                skytaleProjectedValue,
                                alphabetActive,
                                updateOtpKey,
                                genRandomKey,
                                otpKey,
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
      />
      <div className="block_body">
          <div className="block_body_input">
              <Settings 
                alphabetActive = {alphabetActive}
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
                skytaleLength = {skytaleLength}
                skytaleProjectedValue = {skytaleProjectedValue}
                updateOtpKey = {updateOtpKey}
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
                method={method}
              />
          </div>
      </div>
    </div>
  )
}

export default BlockElementSettings

