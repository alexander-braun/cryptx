import React from 'react'
import ExplanatoryText from './ExplanatoryText'
import BlockHeadSettings from './BlockHeadSettings'
import Settings from './settings'

const BlockSettings = () => {
  return (
    <div className="block_settings">
      <BlockHeadSettings />
      <div className="block_body">
          <div className="block_body_input">
              <Settings />
              <ExplanatoryText />
          </div>
      </div>
    </div>
  )
}

export default BlockSettings

