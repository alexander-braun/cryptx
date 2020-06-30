import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

class VigenereTransposition extends React.PureComponent {
  genAlphabet = () => {
    /**
     * Gets the userinput and shortens it if neccesary to alphabet
     * length
     */
    let input = this.props.input.split(' ').join('').split('');
    input = input.length >= 27 ? input.slice(0, 26) : input;

    /**
     * Gets the ciphertext and extends it to the length of the
     * previously generated input
     */
    let keywordVigenere = this.props.keywordVigenere;
    let key = new Array(input.length);
    for (let j = 0; j < Math.ceil(input.length / keywordVigenere.length); j++) {
      for (let i = 0; i < keywordVigenere.length; i++) {
        key[j * keywordVigenere.length + i] = keywordVigenere[i];
      }
    }

    /**
     * Slices the encrypted text to alphabet length
     */
    let out = this.props.output.split(' ').join('').split('');
    out = out.length >= 27 ? out.slice(0, 26) : out;

    /**
     * Generates all the columns for the transposition element.
     */
    let output = [];
    let counter = 0;
    for (let element of input) {
      output.push(
        <div className='alphabet-row__character' key={uuidv4()}>
          <div className='alphabet-row__character--white'>{element}</div>
          <div className='arrow'>&</div>
          <div
            className={
              counter < keywordVigenere.length
                ? 'alphabet-row__character--white'
                : 'alphabet-row__character'
            }
          >
            {key[counter]}
          </div>
          <div className='arrow'>=</div>
          <div className='alphabet-row__character--white'>{out[counter]}</div>
        </div>
      );
      counter++;
    }
    return output;
  };

  render() {
    return (
      <div className='contentbox'>
        <div className='content-element'>
          <div className='content-element__settings-name'>
            Vigenère Cipher Transposition
          </div>
          <div className='content-element__content content-element__content--alphabet-transposition'>
            <div className='alphabet-row'>
              <div className='alphabet-row__standard'>{this.genAlphabet()}</div>
            </div>
          </div>
          <p className='content-element__feature_text'>
            Visualization of the character mapping for input, keyword and
            output.
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  keywordVigenere: state.keywordVigenere,
  output: state.output,
  input: state.input,
  direction: state.direction,
});

export default connect(mapStateToProps)(VigenereTransposition);
