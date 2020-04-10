import React from 'react'
import ExplanatoryText from './ExplanatoryText'
import BlockHeadSettings from './BlockHeadSettings'
import Settings from './settings'

const BlockElementSettings = ({
                                alphabetActive,
                                setE,
                                e,
                                prime_two,
                                phi,
                                n,
                                d,
                                timeToCalculate
                                }) => {
  return (
    <div className="block_settings">
      <BlockHeadSettings />
      <div className="block_body">
          <div className="block_body_input">
              <Settings 
                alphabetActive = {alphabetActive}
                setE = {setE}
                e = {e}
                prime_two = {prime_two}
                phi = {phi}
                n = {n}
                d = {d}
                timeToCalculate = {timeToCalculate}
              />
              <ExplanatoryText />
          </div>
      </div>
    </div>
  )
}

export default BlockElementSettings

