import React from 'react';
import { connect } from 'react-redux';
import { setAffineAlpha, setAffineBeta } from '../../../actions/affine';

const AlphaBetaSelectors = (props) => {
  /**
   * Option generator for <select> beta
   */
  const optionsBeta = () => {
    const optionsArray = [];
    for (let i = 1; i <= 25; i++) {
      optionsArray.push(
        <option value={i} key={`affine-beta${i}`}>
          {i}
        </option>
      );
    }
    return optionsArray;
  };

  /**
   * Option generator for <select> alpha
   */
  const optionsAlpha = () => {
    let valuesAlpha = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
    valuesAlpha = valuesAlpha.map((value) => {
      return (
        <option value={value} key={`affine-alpha${value}`}>
          {value}
        </option>
      );
    });
    return valuesAlpha;
  };

  return (
    <div className='contentbox contentbox--double'>
      <div className='content-element content-element--double'>
        <div className='content-element__settings-name content-element__settings-name--no-transform content-element__settings-name--double'>
          α
        </div>
        <div className='content-element__settings-operators content-element__settings-operators--double'>
          <select
            value={props.affine_alpha}
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
        <div className='content-element__settings-name content-element__settings-name--no-transform content-element__settings-name--double'>
          β
        </div>
        <div className='content-element__settings-operators content-element__settings-operators--double'>
          <select
            value={props.affine_beta}
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
