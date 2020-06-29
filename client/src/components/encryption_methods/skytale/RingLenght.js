import React from 'react';
import { connect } from 'react-redux';
import { setRinglength } from '../../../actions/setRingLength';

const RingLength = (props) => {
  const setRings = (evt) => {
    let id = evt.target.id;
    if (id === 'minus_ring') {
      if (props.ringLength < 4) {
        props.setRings(20);
      } else {
        props.setRings(props.ringLength - 1);
      }
    } else {
      if (props.ringLength > 19) {
        props.setRings(3);
      } else {
        props.setRings(props.ringLength + 1);
      }
    }
  };

  return (
    <div className='controller'>
      <div className='settings_name'>RING SEGMENTS</div>
      <div className='settings_operators'>
        <div
          value='-'
          className='settings_operator'
          id='minus_ring'
          onClick={(evt) => {
            setRings(evt);
          }}
        >
          -
        </div>
        <div className='settings_operator' id='caesar_shift_value'>
          {props.ringLength}
        </div>
        <div
          value='+'
          id='plus_ring'
          className='settings_operator'
          onClick={(evt) => {
            setRings(evt);
          }}
        >
          +
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ringLength: state.skytale.ringLength,
});

const mapActionsToProps = {
  setRings: setRinglength,
};

export default connect(mapStateToProps, mapActionsToProps)(RingLength);
