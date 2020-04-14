import React, { useEffect, useState } from 'react'
import ChartImporter from '../freqencyAnalysis/ChartImporter'
import IndexOfCoincidence from '../indexOfCoincidence/IndexOfCoincidence'
import math from './Math'
import { connect } from 'react-redux'
import { updateInput } from '../../actions/updateInput'
import ChiSquared from '../chi_squared/chisquared'
import { toggleDirection } from '../../actions/toggleDirection'
import IcTooltipSwapInput from './IcTooltipSwapInputs'
import IcTooltipLoadPreset from './IcTooltipLoadPreset'
import { togglePresetsModal } from '../../actions/togglePresetsModal'
import IcTooltipSavePreset from './IcTooltipSavePreset'

const BlockInput = ({updateInput, iocInput, input, output, direction, toggleDirection, togglePresetsModal}) => {

  useEffect(() => {
      let textareaOutput = document.getElementById('userinput')
      math.autoresize(textareaOutput)
  })

  const update = (evt) => {
    if(evt.target.value === 'The quick brown fox jumps over the lazy dog.') {
      updateInput('')
    } else {
      updateInput(evt.target.value)
    }
  }

  const swapInputOutput = () => {
    updateInput(output)
    const newDirection = direction === 'encrypt' ? 'decrypt' : direction === 'crack' ? 'crack' : 'encrypt'
    toggleDirection(newDirection)
  }

  return (
      <div className="block" id="user_input">
        <div className="block_head">
            <div className="block_head_text">Input</div>
            <button 
              onClick={(e) => {
                e.preventDefault()
                swapInputOutput()
              }} 
              style={{marginLeft: 'auto', backgroundColor:'transparent', border: 'none', cursor: 'pointer'}}
            >
              <IcTooltipSwapInput />
            </button>
            <button 
              style={{backgroundColor:'transparent', border: 'none', cursor: 'pointer'}}
              onClick={(e) => {
                e.preventDefault()
                togglePresetsModal('load')
              }}
            >
              <IcTooltipLoadPreset />
            </button>
            <button 
              style={{backgroundColor:'transparent', border: 'none', cursor: 'pointer'}}
              onClick={(e) => {
                e.preventDefault()
                togglePresetsModal('save')
              }}
            >
              <IcTooltipSavePreset />
            </button>
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
            <IndexOfCoincidence ioc = {iocInput} menue={'input'}/>
          </div>
          <div className="chartcontainer" style={{width: '100%'}}>
            <ChiSquared menue={'input'}/>
          </div>
      </div>
  )
}

const mapStateToProps = state => ({
  input: state.input,
  iocInput: state.ioc.input,
  output: state.output,
  direction: state.direction,
  presetsModal: state.presetsModal
})

const mapActionsToProps = {
  updateInput: updateInput,
  toggleDirection: toggleDirection,
  togglePresetsModal: togglePresetsModal
}

export default connect(mapStateToProps, mapActionsToProps)(BlockInput)

