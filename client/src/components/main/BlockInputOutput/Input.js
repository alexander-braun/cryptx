import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Helper
import math from '../helper/Math';

//Actions
import { updateInput } from '../../../actions/updateInput';

//Components
import MenueButtons from './MenueButtons';
import AnalysisMethods from './analysis_methods_dropdowns';

const Input = ({ updateInput, input }) => {
  /**
   * Ref for the input field
   */
  const textareaRef = useRef();

  /**
   * Initial input-field resize.
   */
  useEffect(() => {
    math.autoresize(textareaRef.current);
  });

  /**
   * If the value on click is still 'The quick...' then
   * just delete the input for ease of use. Else remove
   * all types of linebreaks.
   */
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
        <MenueButtons />
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

Input.propTypes = {
  updateInput: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Input);
