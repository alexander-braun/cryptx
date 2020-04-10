import React from 'react'
import ExplanatoryText from './ExplanatoryText'
import BlockHeadSettings from './BlockHeadSettings'
import Settings from './settings'

const BlockElementSettings = ({
                                alphabetActive,
                                setE,
                                e,
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
              />
              <ExplanatoryText />
          </div>
      </div>
    </div>
  )
}

export default BlockElementSettings

