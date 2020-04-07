import React, { useEffect } from 'react'
import ChartImporter from '../freqencyAnalysis/ChartImporter'
import IndexOfCoincidence from '../indexOfCoincidence/IndexOfCoincidence'
import math from './Math'
import { connect } from 'react-redux'
import { updateInput } from '../../actions/input'

const BlockElementInput = ({updateInput, inputValue, ioc, input}) => {

  useEffect(() => {
      let textareaOutput = document.getElementById('userinput')
      math.autoresize(textareaOutput)
  });

  const update = (evt) => {
    if(evt.target.value === 'The quick brown fox jumps over the lazy dog.') {
      updateInput('')
    } else {
      updateInput(evt.target.value)
    }
  }

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
                  value={input} 
                  onClick = {(evt) => {
                    update(evt)
                    math.autoresize(evt)
                  }}
                  onChange={(evt) => {
                    update(evt)
                    math.autoresize(evt)
                  }}
                />
            </div>
        </div>
          <div className="chartcontainer"  style={{width: '100%', borderTop: 'none'}}>
            <div className="clickSurface">
              <ChartImporter inputValue={input} menue={'input'} />
            </div>
          </div>
          <div className="chartcontainer" style={{width: '100%'}}>
            <IndexOfCoincidence ioc = {ioc} menue={'input'}/>
          </div>
      </div>
  )
}

const mapStateToProps = state => ({
  input: state.updateInput.inputValue
})

const mapActionsToProps = {
  updateInput: updateInput
}

export default connect(mapStateToProps, mapActionsToProps)(BlockElementInput)

