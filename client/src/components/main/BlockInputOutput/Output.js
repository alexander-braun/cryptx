import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Helper
import math from '../helper/Math';

//Components
import MenueButtons from './MenueButtons';
import AnalysisMethods from './analysis_methods_dropdowns';

const Output = ({ output }) => {
  /**
   * Ref for the output-field.
   */
  const textareaRef = useRef();

  /**
   * Initial output-field resize.
   */
  useEffect(() => {
    math.autoresize(textareaRef.current);
  });

  return (
    <div className='block'>
      <div className='block__head'>
        <div className='block__title'>Output</div>
        <MenueButtons />
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

Output.propTypes = {
  output: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Output);
