import React from 'react';
import { connect } from 'react-redux';
import { setCaseTransformChoice } from '../../../actions/setCaseTransformChoice';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

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
            onChange={(e) => setCaseTransform(e)}
            value={props.caseTransformChoice}
          >
            {options.map((option) => {
              return (
                <option
                  key={uuidv4()}
                  value={option.split(' ')[0].toLowerCase()}
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

const mapStateToProps = (state) => ({
  caseTransformChoice: state.caseTransformChoice,
});

const mapActionsToProps = {
  setCaseTransformChoice,
};

CaseTransform.propTypes = {
  caseTransformChoice: PropTypes.string.isRequired,
  setCaseTransformChoice: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(CaseTransform);
