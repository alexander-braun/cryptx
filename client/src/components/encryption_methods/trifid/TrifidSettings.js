import React from 'react';
import { connect } from 'react-redux';
import {
  setTrifidGroupSize,
  setTrifidKey,
  setTrifid27thLetter,
} from '../../../actions/setTrifid';

const TrifidSettings = (props) => {
  /**
   * Calculate and set the group size for redux
   */
  const handleGroupSizeChange = (e) => {
    if (e === '+') {
      if (props.trifidGroupSize <= 15) {
        props.setTrifidGroupSize(props.trifidGroupSize + 1);
      }
    } else if (e === '-') {
      if (props.trifidGroupSize >= 3) {
        props.setTrifidGroupSize(props.trifidGroupSize - 1);
      }
    }
  };

  /**
   * Update the keyword - send to redux
   */
  const handleKeywordChange = (e) => {
    props.setTrifidKey(e.target.value);
  };

  /**
   * Update 27th letter and send to redux
   */
  const handleLetterChange = (e) => {
    let value = e.target.value;
    if (value.length === 0) value = '+';
    props.setTrifid27thLetter(value);
  };

  return (
    <React.Fragment>
      <div className='contentbox'>
        <div className='content-element'>
          <div className='content-element__settings-name'>Trifid Keyword</div>
          <div className='content-element__settings-operators'>
            <textarea
              defaultValue={'FELIX MARIE DELASTELLE'}
              onChange={(e) => handleKeywordChange(e)}
              className='content-element__textarea'
            />
          </div>
        </div>
      </div>

      <div className='contentbox'>
        <div className='content-element'>
          <div className='content-element__settings-name'>
            Trifid Group Size
          </div>
          <div className='content-element__settings-operators'>
            <div
              value='-'
              className='content-element__adjust-plus-minus'
              onClick={() => handleGroupSizeChange('-')}
            >
              -
            </div>
            <div className='content-element__adjust-plus-minus'>
              {props.trifidGroupSize}
            </div>
            <div
              value='+'
              className='content-element__adjust-plus-minus'
              onClick={() => handleGroupSizeChange('+')}
            >
              +
            </div>
          </div>
        </div>
      </div>
      <div className='contentbox'>
        <div className='content-element'>
          <div className='content-element__settings-name'>
            Trifid 27th Letter
          </div>
          <div className='content-element__settings-operators'>
            <textarea
              defaultValue={'+'}
              onChange={(e) => handleLetterChange(e)}
              className='content-element__textarea content-element__textarea--single-big'
              maxLength='1'
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  trifidKey: state.trifid.trifidKey,
  trifid27thLetter: state.trifid.trifid27thLetter,
  trifidGroupSize: state.trifid.trifidGroupSize,
});

const mapActionsToProps = {
  setTrifidGroupSize,
  setTrifidKey,
  setTrifid27thLetter,
};

export default connect(mapStateToProps, mapActionsToProps)(TrifidSettings);
