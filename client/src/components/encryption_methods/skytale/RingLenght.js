import React from 'react';
import { connect } from 'react-redux';
import { setRinglength } from '../../../actions/setRingLength';

const RingLength = (props) => {
  /**
   * Calculate and set ring-length
   */
  const setRings = (evt) => {
    let value = evt.target.dataset.value;
    if (value === '-') {
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
    <div className='contentbox'>
      <div className='content-element'>
        <div className='content-element__settings-name'>RING SEGMENTS</div>
        <div className='content-element__settings-operators'>
          <div
            data-value='-'
            className='content-element__adjust-plus-minus'
            onClick={(evt) => {
              setRings(evt);
            }}
          >
            -
          </div>
          <div className='content-element__adjust-plus-minus'>
            {props.ringLength}
          </div>
          <div
            data-value='+'
            className='content-element__adjust-plus-minus'
            onClick={(evt) => {
              setRings(evt);
            }}
          >
            +
          </div>
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
