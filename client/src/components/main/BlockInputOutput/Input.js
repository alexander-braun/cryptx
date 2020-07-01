import React, { useEffect, useRef } from 'react';
import math from '../helper/Math';
import { connect } from 'react-redux';
import { updateInput } from '../../../actions/updateInput';
import BlockheadButtons from './HeadButtons';
import AnalysisMethods from './analysis_methods_dropdowns';

const Input = ({ updateInput, input }) => {
  const textareaRef = useRef();
  useEffect(() => {
    math.autoresize(textareaRef.current);
  });

  const update = (evt) => {
    if (evt.target.value === 'The quick brown fox jumps over the lazy dog.') {
      updateInput('');
    } else {
      updateInput(evt.target.value.replace(/(\r\n|\n|\r)/gm, ''));
    }
  };

  return (
    <div className='block'>
      <div className='block__head'>
        <div className='block__title'>Input</div>
        <BlockheadButtons />
      </div>
      <div className='block__input-wrapper'>
        <textarea
          ref={textareaRef}
          name='userinput'
          className='block__input'
          value={input}
          onClick={(evt) => {
            update(evt);
            math.autoresize(evt);
          }}
          onChange={(evt) => {
            update(evt);
            math.autoresize(evt);
          }}
        />
      </div>
      <AnalysisMethods menue={'input'} input={input} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  input: state.input,
});

const mapActionsToProps = {
  updateInput: updateInput,
};

export default connect(mapStateToProps, mapActionsToProps)(Input);
