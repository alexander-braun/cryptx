import React, { useEffect } from 'react'
import ChartImporter from '../freqencyAnalysis/ChartImporter'
import IndexOfCoincidence from '../indexOfCoincidence/IndexOfCoincidence'
import math from './Math'

const BlockElementInput = ({updateInput, inputValue, ioc}) => {

  useEffect(() => {
      let textareaOutput = document.getElementById('userinput')
      math.autoresize(textareaOutput)
  });

  return (
      <div className="block" id="user_input">
        <div className="block_head">
            <div className="block_head_text">Input</div>
        </div>
        <div className="block_body">
            <div className="block_body_input">
                <textarea 
                  name="userinput" 
                  id="userinput" 
                  defaultValue={inputValue} 
                  onClick = {(evt) => {
                    updateInput(evt)
                    math.autoresize(evt)
                  }}
                  onChange={(evt) => {
                    updateInput(evt)
                    math.autoresize(evt)
                  }}
                />
            </div>
        </div>
          <div className="chartcontainer"  style={{width: '100%', borderTop: 'none'}}>
            <div className="clickSurface">
              <ChartImporter inputValue={inputValue} menue={'input'} />
            </div>
          </div>
          <div className="chartcontainer" style={{width: '100%'}}>
            <IndexOfCoincidence ioc = {ioc} menue={'input'}/>
          </div>
      </div>
  )
}

export default BlockElementInput

