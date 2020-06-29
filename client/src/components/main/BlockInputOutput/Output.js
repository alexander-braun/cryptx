import React from 'react';
import math from '../helper/Math';
import { connect } from 'react-redux';
import { updateInput } from '../../../actions/updateInput';
import BlockheadButtons from './HeadButtons';
import AnalysisMethods from './analysis_methods_dropdowns';

class BlockElementOutput extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (prevProps.output !== this.props.output) {
      let textareaOutput = document.getElementById('output');
      math.autoresize(textareaOutput);
    }
  }

  componentDidMount() {
    let textareaOutput = document.getElementById('output');
    math.autoresize(textareaOutput);
  }

  render() {
    return (
      <div className='block'>
        <div className='block_head'>
          <div className='block_head_text'>Output</div>
          <BlockheadButtons />
        </div>
        <div className='block_body'>
          <div className='block_body_output'>
            <textarea
              name='output'
              id='output'
              value={this.props.output ? this.props.output : ''}
              onChange={(evt) => {
                this.value = this.props.output;
                math.autoresize(evt);
              }}
            ></textarea>
          </div>
        </div>
        <AnalysisMethods
          menue={'output'}
          input={this.props.output}
          iocInput={this.props.iocOutput}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  output: state.output,
  iocOutput: state.ioc.output,
});

const mapActionsToProps = {
  updateInput: updateInput,
};

export default connect(mapStateToProps, mapActionsToProps)(BlockElementOutput);
