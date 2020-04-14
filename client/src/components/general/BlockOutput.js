import React from 'react'
import ChartImporter from '../freqencyAnalysis/ChartImporter'
import IndexOfCoincidence from '../indexOfCoincidence/IndexOfCoincidence'
import math from './Math'
import { connect } from 'react-redux'
import ChiSquared from '../chi_squared/chisquared'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { toggleDirection } from '../../actions/toggleDirection'
import { updateInput } from '../../actions/updateInput'
import IcTooltipSwapInput from './IcTooltipSwapInputs'
import IcTooltipLoadPreset from './IcTooltipLoadPreset'
import { togglePresetsModal } from '../../actions/togglePresetsModal'
import IcTooltipSavePreset from './IcTooltipSavePreset'

class BlockElementOutput extends React.PureComponent {
  
  constructor(props) {
    super(props)
    this.swapInputOutput = this.swapInputOutput.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.output !== this.props.output) {
      let textareaOutput = document.getElementById('output')
      math.autoresize(textareaOutput)
    }
  }

  swapInputOutput = () => {
    this.props.updateInput(this.props.output)
    const newDirection = this.props.direction === 'encrypt' ? 'decrypt' : this.props.direction === 'crack' ? 'crack' : 'encrypt'
    this.props.toggleDirection(newDirection)
  }

  render() {
      return (
        <div className="block">
          <div className="block_head">
            <div className="block_head_text">Output</div>
            <button 
              onClick={(e) => {
                e.preventDefault()
                this.swapInputOutput()
              }} 
              style={{marginLeft: 'auto', backgroundColor:'transparent', border: 'none', cursor: 'pointer'}}
            >
              <IcTooltipSwapInput />
            </button>
            <button 
              style={{backgroundColor:'transparent', border: 'none', cursor: 'pointer'}}
              onClick={(e) => {
                e.preventDefault()
                this.props.togglePresetsModal('load')
              }}
            >
              <IcTooltipLoadPreset />
            </button>
            <button 
              style={{backgroundColor:'transparent', border: 'none', cursor: 'pointer'}}
              onClick={(e) => {
                e.preventDefault()
                this.props.togglePresetsModal('save')
              }}
            >
              <IcTooltipSavePreset />
            </button>
          </div>
          <div className="block_body">
                <div className="block_body_output">
                  <textarea
                    name="output" 
                    id="output" 
                    value={this.props.output ? this.props.output : ''}
                    onChange={(evt) => {
                      this.value = this.props.output
                      math.autoresize(evt)
                    }}
                  >
                  </textarea>
              </div>
          </div>
            <div className="chartcontainer" style={{width: '100%', borderTop: 'none'}}>
              <ChartImporter inputValue={this.props.output} menue = {'output'}/>
            </div>
            <div className="chartcontainer" style={{width: '100%'}}>
              <IndexOfCoincidence ioc = {this.props.iocOutput} menue={'output'}/>
            </div>
            <div className="chartcontainer" style={{width: '100%'}}>
              <ChiSquared menue={'output'}/>
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  output: state.output,
  iocOutput: state.ioc.output,
  direction: state.direction,
  presetsModal: state.presetsModal
})

const mapActionsToProps = {
  updateInput: updateInput,
  toggleDirection: toggleDirection,
  togglePresetsModal: togglePresetsModal
}


export default connect(mapStateToProps, mapActionsToProps)(BlockElementOutput)

