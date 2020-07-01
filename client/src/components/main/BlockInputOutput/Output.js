import React, { useRef, useEffect } from 'react';
import math from '../helper/Math';
import { connect } from 'react-redux';
import BlockheadButtons from './HeadButtons';
import AnalysisMethods from './analysis_methods_dropdowns';

const Output = ({ updateInput, output }) => {
  const textareaRef = useRef();
  useEffect(() => {
    math.autoresize(textareaRef.current);
  });

  return (
    <div className='block'>
      <div className='block__head'>
        <div className='block__title'>Output</div>
        <BlockheadButtons />
      </div>
      <div className='block__output-wrapper'>
        <textarea
          ref={textareaRef}
          className='block__output'
          name='output'
          value={output ? output : ''}
          onChange={(evt) => {
            math.autoresize(evt);
          }}
        ></textarea>
      </div>
      <AnalysisMethods menue={'output'} output={output} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  output: state.output,
});

export default connect(mapStateToProps)(Output);
