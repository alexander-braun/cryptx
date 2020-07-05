import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropsTypes from 'prop-types';

class NihilistTransposition extends React.PureComponent {
  genAlphabet = () => {
    /**
     * Get the numbers wich are formed by the plaintext letters in the
     * nihilist matrix and slice them if there are more then 14.
     */
    let inputToNumbers = this.props.nihilistPlainNumbers;
    inputToNumbers =
      inputToNumbers.length >= 15
        ? inputToNumbers.slice(0, 14)
        : inputToNumbers;

    /**
     * Get the numbers wich are formed by the letters of the
     * key in the matrix and slice them if there are more then 14.
     */
    let key = this.props.nihilistRunningKey;
    key = key.length >= 15 ? key.slice(0, 14) : key;

    /**
     * Get the final sum of key and plaintext numbers and slice
     * them if they are bigger then 14.
     */
    let out =
      this.props.direction === 'encrypt'
        ? this.props.output.split(' ')
        : this.props.input.split(' ');
    out = out.length >= 15 ? out.slice(0, 14) : out;

    /**
     * Get the plaintext input and slice if bigger then 14 chars.
     */
    let plaintext =
      this.props.direction === 'encrypt'
        ? this.props.input.split(' ').join('').split('')
        : this.props.output.split(' ').join('').split('');
    plaintext = plaintext.length >= 15 ? plaintext.slice(0, 14) : plaintext;

    /**
     * Get the key in its original form, not transformed by numbers.
     * Continuously add the letters of the key to the newKey array so
     * it repeats itself.
     */
    let plainkey = this.props.cipherNihilist.split('');
    let newKey = [];
    let i = 0;
    while (newKey.length < 14) {
      if (i < plainkey.length) {
        newKey.push(plainkey[i]);
        i++;
      } else {
        i = 0;
      }
    }

    /**
     * Bring all elements together into the visualisation.
     * This mapping is happening vertically not horizontally
     * like with caesar and atbash. (change later!)
     */
    let output = [];
    let counter = 0;
    for (let element of inputToNumbers) {
      output.push(
        <div
          className='alphabet-row__vertically'
          style={{ fontSize: '12px' }}
          key={uuidv4()}
        >
          <div>{plaintext[counter]}</div>
          <div className='arrow'>=</div>
          <div>{element}</div>
          <div className='arrow'>+</div>
          <div>{newKey[counter]}</div>
          <div className='arrow'>=</div>
          <div>{key[counter]}</div>
          <div className='arrow'>=</div>
          <div>{out[counter]}</div>
        </div>
      );
      counter++;
    }
    if (this.props.output === 'Not a valid input') return null;
    return output;
  };

  render() {
    return (
      <React.Fragment>
        {this.props.output !== 'Not a valid input' &&
        this.props.output !== 'Please enter a Keyphrase' ? (
          <div
            className='contentbox'
            style={{
              borderBottom: 'none',
              borderTop: '1px solid rgba(255, 255, 255, 0.192)',
            }}
          >
            <div className='content-element'>
              <div className='content-element__settings-name'>
                Nihilist Cipher Transposition
              </div>
              <div className='content-element__content content-element__content--alphabet-transposition'>
                <div className='alphabet-row'>
                  <div className='alphabet-row__standard'>
                    {this.genAlphabet()}
                  </div>
                </div>
              </div>
              <p className='content-element__feature_text'>
                Visualization of the character mapping for input, keyword and
                output.
              </p>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  nihilistRunningKey: state.nihilist.nihilistRunningKey,
  nihilistPlainNumbers: state.nihilist.nihilistPlainNumbers,
  cipherNihilist: state.nihilist.cipherNihilist,
  input: state.input,
  output: state.output,
  direction: state.direction,
});

NihilistTransposition.propTypes = {
  nihilistRunningKey: PropsTypes.array.isRequired,
  nihilistPlainNumbers: PropsTypes.array.isRequired,
  cipherNihilist: PropsTypes.string.isRequired,
  input: PropsTypes.string.isRequired,
  output: PropsTypes.string.isRequired,
  direction: PropsTypes.string.isRequired,
};

export default connect(mapStateToProps)(NihilistTransposition);
