import React, { useEffect } from 'react'
import ChartImporter from '../freqencyAnalysis/ChartImporter'
import IndexOfCoincidence from '../indexOfCoincidence/IndexOfCoincidence'
import math from './Math'
import { connect } from 'react-redux'
import { updateInput } from '../../actions/input'
import ChiSquared from '../chi_squared/chisquared'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { toggleDirection } from '../../actions/direction'

const StyledTooltip = withStyles(theme => ({
  tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 420,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
}))(Tooltip);

let icTooltip = (
  <StyledTooltip
      title={
      <React.Fragment>
          Swap Input, Output and encryption direction.
      </React.Fragment>
      }
  >
      <SwapHorizIcon style={{color: '#0a86ce', fontSize: '24px'}}/>
  </StyledTooltip>
)

const BlockElementInput = ({updateInput, iocInput, input, output, direction, toggleDirection}) => {

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
              onClick={() => {
                swapInputOutput()
              }} 
              style={{marginLeft: 'auto', backgroundColor:'transparent', border: 'none', cursor: 'pointer'}}
            >
              {icTooltip}
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
  direction: state.direction
})

const mapActionsToProps = {
  updateInput: updateInput,
  toggleDirection: toggleDirection,
}

export default connect(mapStateToProps, mapActionsToProps)(BlockElementInput)

