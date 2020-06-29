import React from 'react';
import '../../../styles/otp.css';
import { connect } from 'react-redux';
import setOtpKey from '../../../actions/setOtpKey';

class Otp extends React.PureComponent {
  constructor(props) {
    super(props);

    this.genRandomKey = this.genRandomKey.bind(this);
  }

  componentDidMount() {
    this.props.setOtpKey(this.genRandomKey());
  }

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
      <div className='controller'>
        <div className='settings_name'>GENERATE RANDOM KEY</div>
        <div className='settings_operators' id='genRandomTab'>
          <div className='settings_operator' id='otpKey'>
            {this.props.otpKey}
          </div>
          <button
            id='generate'
            className='settings_operator'
            onClick={() => {
              this.props.setOtpKey(this.genRandomKey());
            }}
          >
            Generate new random key
          </button>
          <div id='caesar_explanatory_text'>
            <p className='feature_text'>
              For the purpose of trying out de- and encryption with the same
              key, the key will not update when your input message updates.
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
