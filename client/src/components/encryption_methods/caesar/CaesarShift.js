import React from 'react';
import { setCshift } from '../../../actions/setCShift';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CaesarShift = (props) => {
  /**
   * Finds the shift value according to
   * the plus/minus button and sends the
   * value to redux.
   */
  const calcShift = (evt) => {
    let method = evt.target.dataset.val;
    if (method === '-') {
      if (props.cShift < 1) {
        props.setCshift(25);
      } else {
        props.setCshift(props.cShift - 1);
      }
    } else if (method === '+') {
      if (props.cShift > 24) {
        props.setCshift(0);
      } else {
        props.setCshift(props.cShift + 1);
      }
    }
  };

  return (
    <div className='contentbox'>
      <div className='content-element'>
        <div className='content-element__settings-name'>SHIFT</div>
        <div className='content-element__settings-operators'>
          <div
            data-val='-'
            className='content-element__adjust-plus-minus'
            onClick={(evt) => {
              calcShift(evt);
            }}
          >
            -
          </div>
          <div className='content-element__adjust-plus-minus'>
            {props.cShift}
          </div>
          <div
            data-val='+'
            className='content-element__adjust-plus-minus'
            onClick={(evt) => calcShift(evt)}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cShift: state.cShift,
});

const mapActionsToProps = {
  setCshift: setCshift,
};

CaesarShift.propTypes = {
  cShift: PropTypes.number.isRequired,
};

export default React.memo(
  connect(mapStateToProps, mapActionsToProps)(CaesarShift)
);
