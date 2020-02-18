import React from 'react'
import ExplanatoryText from './ExplanatoryText'
import BlockHead from './BlockHead'
import BlockBodyInput from './BlockBodyInput'

const BlockElementSettings = ({ minus, 
                                plus, 
                                cShift, 
                                alphabet, 
                                alphabetUpdate, 
                                selectCase, 
                                includeChars, 
                                encrypt, 
                                openModal, 
                                method, 
                                methodNameInset, 
                                changeDirection, 
                                direction,
                                setAlpha,
                                setBeta,
                                updateKeyword,
                                keywordVigenere,
                                updateKeywordPlayfair,
                                keywordPlayfair,
                                playSquare
                                }) => {
  return (
    <div className="block_settings">
      <div className="block_top_decoration"></div>
      <BlockHead 
        openModal={openModal} 
        methodNameInset={methodNameInset}
        changeDirection={changeDirection}
        encrypt={encrypt}
      />
      <div className="block_body">
          <div className="block_body_input">
              <BlockBodyInput 
                direction={direction}
                minus={minus}
                plus={plus}
                cShift={cShift}
                alphabet={alphabet}
                alphabetUpdate={alphabetUpdate}
                selectCase={selectCase}
                includeChars={includeChars}
                encrypt={encrypt}
                method={method}
                setAlpha={setAlpha}
                setBeta={setBeta}
                updateKeyword={updateKeyword}
                keywordVigenere={keywordVigenere}
                updateKeywordPlayfair={updateKeywordPlayfair}
                keywordPlayfair={keywordPlayfair}
                playSquare = {playSquare}
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

