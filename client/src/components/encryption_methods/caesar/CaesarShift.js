import React from 'react';
import { setCshift } from '../../../actions/setCShift';
import { connect } from 'react-redux';

const CaesarShift = (props) => {
  const calcShift = (evt) => {
    let method = evt.target.id;
    if (method === 'minus_caesar') {
      if (props.cShift < 1) {
        props.setC(25);
      } else {
        props.setC(props.cShift - 1);
      }
    } else if (method === 'plus_caesar') {
      if (props.cShift > 24) {
        props.setC(0);
      } else {
        props.setC(props.cShift + 1);
      }
    }
  };

  return (
    <div className='controller'>
      <div className='settings_name'>SHIFT</div>
      <div className='settings_operators'>
        <div
          value='-'
          id='minus_caesar'
          className='settings_operator'
          onClick={(evt) => {
            calcShift(evt);
          }}
        >
          -
        </div>
        <div className='settings_operator' id='caesar_shift_value'>
          {props.cShift}
        </div>
        <div
          value='+'
          id='plus_caesar'
          className='settings_operator'
          onClick={(evt) => calcShift(evt)}
        >
          +
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cShift: state.cShift,
});

const mapActionsToProps = {
  setC: setCshift,
};

export default React.memo(
  connect(mapStateToProps, mapActionsToProps)(CaesarShift)
);
