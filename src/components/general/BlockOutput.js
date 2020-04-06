import React from 'react'
import ChartImporter from '../freqencyAnalysis/ChartImporter'
import IndexOfCoincidence from '../indexOfCoincidence/IndexOfCoincidence'
import math from './Math'


class BlockElementOutput extends React.PureComponent {

  componentDidUpdate(prevProps) {
    if (prevProps.outputValue !== this.props.outputValue) {
      let textareaOutput = document.getElementById('output')
      math.autoresize(textareaOutput)
    }
  }

  render() {
      return (
        <div className="block">
          <div className="block_head">
              <div className="block_head_text">Output</div>
          </div>
          <div className="block_body">
                <div className="block_body_output">
                  <textarea
                    name="output" 
                    id="output" 
                    value={this.props.outputValue ? this.props.outputValue : ''}
                    onChange={(evt) => {
                      this.value = this.props.outputValue
                      math.autoresize(evt)
                    }}
                  >
                  </textarea>
              </div>
          </div>
            <div className="chartcontainer" style={{width: '100%', borderTop: 'none'}}>
              <ChartImporter inputValue={this.props.outputValue} menue = {'output'}/>
            </div>
            <div className="chartcontainer" style={{width: '100%'}}>
              <IndexOfCoincidence ioc = {this.props.ioc} menue={'output'}/>
            </div>
        </div>
    )
  }
}

export default BlockElementOutput

