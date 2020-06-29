import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import setAffineAlpha from '../../../actions/setAffineAlpha';
import setAffineBeta from '../../../actions/setAffineBeta';

const AlphaBetaSelectors = (props) => {
  const optionsBeta = () => {
    const optionsArray = [];
    for (let i = 0; i < 25; i++) {
      optionsArray.push(
        <option value={i + 1} key={uuidv4()}>
          {i + 1}
        </option>
      );
    }
    return optionsArray;
  };

  const optionsAlpha = () => {
    let valuesAlpha = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
    valuesAlpha = valuesAlpha.map((value) => {
      return (
        <option value={value} key={uuidv4()}>
          {value}
        </option>
      );
    });
    return valuesAlpha;
  };

  return (
    <div className='controller double_content'>
      <div className='controllbox'>
        <div className='settings_name' style={{ textTransform: 'none' }}>
          α
        </div>
        <div className='settings_operators'>
          <select
            defaultValue='5'
            className='affine'
            onChange={(evt) => {
              props.setAffineAlpha(evt.target.value);
            }}
          >
            {optionsAlpha()}
          </select>
        </div>
      </div>
      <div className='controllbox' style={{ borderRight: 'none' }}>
        <div className='settings_name' style={{ textTransform: 'none' }}>
          β
        </div>
        <div className='settings_operators'>
          <select
            defaultValue='1'
            className='affine'
            onChange={(evt) => {
              props.setAffineBeta(evt.target.value);
            }}
          >
            {optionsBeta()}
          </select>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  affine_alpha: state.affine.affine_alpha,
  affine_beta: state.affine.affine_beta,
});

const mapActionsToProps = {
  setAffineAlpha: setAffineAlpha,
  setAffineBeta: setAffineBeta,
};

export default connect(mapStateToProps, mapActionsToProps)(AlphaBetaSelectors);
