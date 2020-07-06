import React from 'react';
import { connect } from 'react-redux';
import { setPrime1, setPrime2, setRsaE } from '../../../actions/rsa';
import PropTypes from 'prop-types';

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
      <div className='content-element__feature_text'>
        <p>
          To encrypt longer messages, use longer prime numbers from this
          site:&nbsp;
          <a
            href='https://primes.utm.edu/curios/page.php?number_id=3818'
            target='blank'
          >
            primes.utm.edu
          </a>
          <br></br>
          (spaces are automatically beeing removed from the input when you
          copy-paste). If your computer feels stuck for some seconds, that's
          because it's calculating.
        </p>
        <p>
          This site is using a <strong className='underline'>pure</strong>{' '}
          version of RSA. First every character is encoded to it's
          character-code equivalent. Then all character codes are joined
          together into a big number and the actual encryption takes place.
        </p>
        <p>
          For the decryption process the encrypted message is first decoded and
          is then ready to be converted back to it's character codes and
          original characters.
        </p>
        <p>
          A regular RSA algorithm is usually only used as a way to encrypt keys
          for symmetric encrytion algorithms like AES - it's a misconception,
          that the actual message is encrypted using RSA. There is also a
          padding scheme (OAEP) involved to obscure potentially insecure
          messages and make them harder to break. RSA is incredibly slow when
          used with longer messages/bigger prime numbers.{' '}
          <strong className='underline'>
            The longer the message that you want to encrypt, the more digits
            your prime numbers needs to have for the algorithm to work.
          </strong>
        </p>
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
