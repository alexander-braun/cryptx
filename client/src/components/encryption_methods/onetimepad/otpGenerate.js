import React from 'react';
import './otp.scss';
import { connect } from 'react-redux';
import setOtpKey from '../../../actions/setOtpKey';

class Otp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.genRandomKey = this.genRandomKey.bind(this);
  }

  /**
   * Set a key for the initial calculation.
   */
  componentDidMount() {
    this.props.setOtpKey(this.genRandomKey());
  }

  /**
   * Method to generate random characters fitting the input length.
   * Nonalphabetic characters are not beeing encoded.
   */
  genRandomKey = () => {
    let randomArr = [];
    let letters = this.props.alphabet.split('');
    let input = [];
    for (let i = 0; i < this.props.input.length; i++) {
      if (this.props.alphabet.indexOf(this.props.input[i] !== -1)) {
        input.push(this.props.input[i]);
      }
    }
    let inputLength = input.length;
    for (let i = 0; i < inputLength; i++) {
      randomArr.push(letters[Math.floor(Math.random() * 26)]);
    }
    return randomArr.join('');
  };

  render() {
    return (
      <div className='contentbox'>
        <div className='content-element'>
          <div className='content-element__settings-name'>
            GENERATE RANDOM KEY
          </div>
          <div className='content-element__settings-operators content-element__settings-operators--vertical-center-flex'>
            <div className='content-element__single-operator'>
              {this.props.otpKey}
            </div>
            <button
              id='generate'
              className='content-element__single-operator content-element__single-operator--button'
              onClick={() => {
                this.props.setOtpKey(this.genRandomKey());
              }}
            >
              Generate new random key
            </button>
            <p className='content-element__feature_text'>
              For the purpose of trying out de- and encryption with the same
              key, the key will not update when your input message updates. A
              real one-time-pad key updates with every new message.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  otpKey: state.otpKey,
  alphabet: state.alphabet.alphabet,
  input: state.input,
});

const mapActionsToProps = {
  setOtpKey: setOtpKey,
};

export default connect(mapStateToProps, mapActionsToProps)(Otp);
