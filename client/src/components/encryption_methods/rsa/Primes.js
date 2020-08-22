import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Actions
import { setPrime1, setPrime2, setRsaE } from '../../../actions/rsa';

const Primes = (props) => {
  /**
   * Get rid of all non-numericals from prime input.
   */
  const cleanPrime = (rawInput) => {
    if (rawInput.length !== 0) {
      let numbers = '0123456789';
      let cleanInput = [];
      for (let element of rawInput) {
        if (numbers.indexOf(element) !== -1) cleanInput.push(element);
      }
      if (cleanInput[0] === '0') return;
      if (
        (cleanInput.length === 1 &&
          (cleanInput[0] === '1' || cleanInput[0] === '0')) ||
        cleanInput.length === 0
      )
        return;
      return cleanInput.join('');
    } else return;
  };
  return (
    <React.Fragment>
      <div className='contentbox contentbox--double'>
        <div className='content-element content-element--double'>
          <div className='content-element__settings-name content-element__settings-name--double'>
            Prime 1
          </div>
          <div className='content-element__settings-operators content-element__settings-operators--double'>
            <textarea
              className='content-element__textarea content-element__textarea--window-light'
              type='text'
              name='tentacles'
              defaultValue={props.prime1}
              onChange={(e) => {
                let input = cleanPrime(e.target.value);
                props.setPrime1(input);
              }}
            ></textarea>
          </div>
        </div>
        <div className='content-element content-element--double'>
          <div className='content-element__settings-name content-element__settings-name--double'>
            Prime 2
          </div>
          <div className='content-element__settings-operators content-element__settings-operators--double'>
            <textarea
              className='content-element__textarea content-element__textarea--window-light'
              type='text'
              name='tentacles'
              defaultValue={props.prime2}
              onChange={(e) => {
                let input = cleanPrime(e.target.value);
                props.setPrime2(input);
              }}
            ></textarea>
          </div>
        </div>
      </div>
      <div className='contentbox contentbox--double'>
        <div className='content-element content-element--double'>
          <div className='content-element__settings-name content-element__settings-name--double'>
            e = PUBLIC KEY
          </div>
          <div className='content-element__settings-operators content-element__settings-operators--double'>
            <textarea
              className='content-element__textarea content-element__textarea--window-light'
              type='text'
              name='tentacles'
              defaultValue={props.e}
              onChange={(e) => {
                props.setRsaE(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className='content-element content-element--double'>
          <div className='content-element__settings-name content-element__settings-name--double'>
            n = PUBLIC KEY
          </div>
          <div className='content-element__settings-operators content-element__settings-operators--double'>
            <textarea
              className='content-element__textarea content-element__textarea--window-light'
              readOnly
              value={props.n}
              type='text'
              name='tentacles'
            ></textarea>
          </div>
        </div>
      </div>
      <div className='contentbox contentbox--double'>
        <div className='content-element content-element--double phi'>
          <div className='content-element__settings-name content-element__settings-name--double'>
            φ<i>=(Prime1 - 1)*(Prime2 - 1)</i>
          </div>
          <div className='content-element__settings-operators content-element__settings-operators--double'>
            <textarea
              className='content-element__textarea content-element__textarea--window-light'
              readOnly
              value={props.phi}
              type='text'
              name='tentacles'
            ></textarea>
          </div>
        </div>
        <div className='content-element content-element--double'>
          <div className='content-element__settings-name content-element__settings-name--double'>
            d <i> = (e ^ −1) mod ϕ</i>
          </div>
          <div className='content-element__settings-operators content-element__settings-operators--double'>
            <textarea
              className='content-element__textarea content-element__textarea--window-light'
              readOnly
              value={props.d}
              type='text'
              name='tentacles'
            ></textarea>
          </div>
        </div>
      </div>
      <div className='contentbox'>
        <div className='content-element'>
          <div className='content-element__settings-name'>
            Time to calculate
          </div>
          <div className='content-element__settings-operators content-element__settings-operators--vertical-center-flex'>
            <div className='content-element__single-operator content-element__single-operator--left'>
              {props.timeToCalculate}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  prime1: state.rsa.prime1,
  prime2: state.rsa.prime2,
  timeToCalculate: state.rsa.timeToCalculate,
  d: state.rsa.d,
  phi: state.rsa.phi,
  n: state.rsa.n,
  e: state.rsa.e,
});

const mapActionsToProps = {
  setPrime1,
  setPrime2,
  setRsaE,
};

Primes.propTypes = {
  prime1: PropTypes.string.isRequired,
  prime2: PropTypes.string.isRequired,
  timeToCalculate: PropTypes.string.isRequired,
  d: PropTypes.string,
  phi: PropTypes.string,
  n: PropTypes.string,
  e: PropTypes.string.isRequired,
  setPrime1: PropTypes.func.isRequired,
  setPrime2: PropTypes.func.isRequired,
  setRsaE: PropTypes.func.isRequired,
};

export default React.memo(connect(mapStateToProps, mapActionsToProps)(Primes));
