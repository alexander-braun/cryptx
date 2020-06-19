import React from 'react';
import { connect } from 'react-redux';
import {
  setTrifidGroupSize,
  setTrifidKey,
  setTrifid27thLetter,
} from '../../actions/setTrifid';

const TrifidSettings = (props) => {
  const handleGroupSizeChange = (e) => {
    if (e === '+') {
      props.setTrifidGroupSize(props.trifidGroupSize + 1);
    } else if (e === '-') {
      if (props.trifidGroupSize >= 3) {
        props.setTrifidGroupSize(props.trifidGroupSize - 1);
      }
    } else {
      if (e.target.value >= 2) {
        props.setTrifidGroupSize(e.target.value);
      } else props.setTrifidGroupSize(2);
    }
  };

  const handleKeywordChange = (e) => {
    props.setTrifidKey(e.target.value);
  };

  const handleLetterChange = (e) => {
    let value = e.target.value[0];
    if (value.length === 0) value = '+';
    props.setTrifid27thLetter(value);
  };

  return (
    <React.Fragment>
      <div className='controller'>
        <div className='settings_name'>Trifid Keyword</div>
        <div className='settings_operators'>
          <textarea
            defaultValue={'FELIX MARIE DELASTELLE'}
            onChange={(e) => handleKeywordChange(e)}
            style={{ boxShadow: 'none' }}
            id='trifid_key'
          />
        </div>
      </div>
      <div className='controller'>
        <div className='settings_name'>Trifid Group Size</div>
        <div className='settings_operators'>
          <div
            value='-'
            id='minus_caesar'
            className='settings_operator'
            onClick={() => handleGroupSizeChange('-')}
          >
            -
          </div>
          <input
            className='trifid_input'
            value={props.trifidGroupSize}
            onChange={(e) => handleGroupSizeChange(e)}
          ></input>
          <div
            value='+'
            id='plus_caesar'
            className='settings_operator'
            onClick={() => handleGroupSizeChange('+')}
          >
            +
          </div>
        </div>
      </div>
      <div className='controller'>
        <div className='settings_name'>Trifid 27th Letter</div>
        <div className='settings_operators'>
          <textarea
            defaultValue={'+'}
            onChange={(e) => handleLetterChange(e)}
            style={{ boxShadow: 'none' }}
            id='trifid_27th_letter'
          />
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
