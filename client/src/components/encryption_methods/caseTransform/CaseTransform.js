import React from 'react';
import { connect } from 'react-redux';
import { setCaseTransformChoice } from '../../../actions/setCaseTransformChoice';
import { v4 as uuidv4 } from 'uuid';

/**
 * Abailable Case-Options
 */
let options = [
  'Lower case',
  'Upper case',
  'Capitalize',
  'Alternating case',
  'Inverse case',
];

const CaseTransform = (props) => {
  /**
   * Send case-choice to reduxs
   */
  const setCaseTransform = (e) => {
    let val = e.target.value.split(' ')[0].toLowerCase();
    props.setCaseTransformChoice(val);
  };

  return (
    <div className='contentbox' style={{ borderBottom: 'none' }}>
      <div className='content-element'>
        <div className='content-element__settings-name'>Case Format</div>
        <div className='content-element__settings-operators content-element__settings-operators--split'>
          <div className='content-element__split content-element__split--text'>
            Select Case:
          </div>
          <select
            className='content-element__split content-element__split--button'
            onClick={(e) => setCaseTransform(e)}
          >
            {options.map((option) => {
              return (
                <option
                  key={uuidv4()}
                  className='content-element__split--option'
                >
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

const mapActionsToProps = {
  setCaseTransformChoice,
};

export default connect(null, mapActionsToProps)(CaseTransform);
