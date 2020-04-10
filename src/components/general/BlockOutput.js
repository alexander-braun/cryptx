import React from 'react'
import ChartImporter from '../freqencyAnalysis/ChartImporter'
import IndexOfCoincidence from '../indexOfCoincidence/IndexOfCoincidence'
import math from './Math'
import { connect } from 'react-redux'


class BlockElementOutput extends React.PureComponent {

  componentDidUpdate(prevProps) {
    if (prevProps.output !== this.props.output) {
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
        </div>
    )
  }
}

const mapStateToProps = state => ({
  output: state.output,
  iocOutput: state.ioc.output
})

export default connect(mapStateToProps)(BlockElementOutput)

