import React from 'react';
import { connect } from 'react-redux';
import { setCaseTransformChoice } from '../../../actions/setCaseTransformChoice';

let options = [
  'Lower case',
  'Upper case',
  'Capitalize',
  'Alternating case',
  'Inverse case',
];

const CaseTransform = (props) => {
  const onClickSetChoice = (e) => {
    let val = e.target.value.split(' ')[0].toLowerCase();
    props.setCaseTransformChoice(val);
  };

  return (
    <div className='controller' style={{ borderBottom: 'none' }}>
      <div className='settings_name'>Case Format</div>
      <div
        className='settings_operators'
        style={{ paddingRight: '24px', margin: '2em 0' }}
      >
        <div id='select_case_transform' className='settings_operator'>
          Select Case:
        </div>
        <select
          id='case_transform_select'
          style={{
            width: 'fit-content',
            marginLeft: '1em',
            backgroundColor: 'transparent',
            border: '1px solid #ffffff78',
            padding: '5px',
            fontWeight: '400',
            borderRadius: '20px',
            fontSize: '12px',
          }}
          onClick={(e) => onClickSetChoice(e)}
        >
          {options.map((option) => {
            return (
              <option
                style={{ fontWeight: '400', fontSize: '12px' }}
                key={option}
                id={option}
              >
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

const mapActionsToProps = {
  setCaseTransformChoice,
};

export default connect(null, mapActionsToProps)(CaseTransform);
