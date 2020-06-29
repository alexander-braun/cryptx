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
    <div className='contentbox contentbox--double'>
      <div className='content-element content-element--double'>
        <div className='content-element__settings-name content-element__settings-name--no-transform'>
          α
        </div>
        <div className='content-element__settings-operators content-element__settings-operators--double'>
          <select
            defaultValue='5'
            className='content-element__select content-element__select--sm'
            onChange={(evt) => {
              props.setAffineAlpha(evt.target.value);
            }}
          >
            {optionsAlpha()}
          </select>
        </div>
      </div>
      <div className='content-element content-element--double'>
        <div className='content-element__settings-name content-element__settings-name--no-transform'>
          β
        </div>
        <div className='content-element__settings-operators content-element__settings-operators--double'>
          <select
            defaultValue='1'
            className='content-element__select'
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
