import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

class CaesarTransposition extends React.PureComponent {
  /**
   * Generates html structure for one row of the alphabet transposition.
   * The letter "A" is market in white. The othere characters are slightly
   * less visible. Also generates the belonging down-arrow.
   */
  genAlphabet = () => {
    if (this.props.alphabet.length === 0) return;
    let alphabet = this.props.alphabet.toLowerCase().split('').sort();
    alphabet = [...new Set(alphabet)];
    let output = [];
    for (let element of alphabet) {
      output.push(
        <div
          className={
            element.toLowerCase() === 'a'
              ? 'alphabet-row__character alphabet-row__character--white'
              : 'alphabet-row__character'
          }
          key={uuidv4()}
        >
          <div>{element}</div>
          <div className={element.toLowerCase() === 'a' ? '' : 'arrow'}>↓</div>
        </div>
      );
    }
    return output;
  };

  /**
   * Generates the lower half of the alphabet + arrow.
   */
  genShifted = (shift) => {
    if (this.props.alphabet.length === 0) return;
    let alphabet = this.props.alphabet.toLowerCase().split('').sort();
    alphabet = [...new Set(alphabet)];
    for (let i = 0; i < shift; i++) {
      let temp = alphabet.shift();
      alphabet.push(temp);
    }
    let output = [];
    for (let i = 0; i < alphabet.length; i++) {
      output.push(
        <div
          className={
            alphabet[i].toLowerCase() === 'a'
              ? 'alphabet-row__character alphabet-row__character--white'
              : 'alphabet-row__character'
          }
          key={uuidv4()}
        >
          <div className={alphabet[i].toLowerCase() === 'a' ? '' : 'arrow'}>
            ↑
          </div>
          <div>{alphabet[i]}</div>
        </div>
      );
    }
    return output;
  };

  render() {
    return (
      <div className='contentbox'>
        <div className='content-element'>
          <div className='content-element__settings-name'>
            Caesar Cipher Transposition
          </div>
          <div className='content-element__content content-element__content--alphabet-transposition'>
            <div className='alphabet-row'>
              <div className='alphabet-row__standard'>{this.genAlphabet()}</div>
              <div className='alphabet-row__transpositioned'>
                {this.genShifted(this.props.cShift)}
              </div>
            </div>
          </div>
          <p className='content-element__feature_text'>
            Visualization of the character mapping on <b>shift</b> changes.
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cShift: state.cShift,
});

CaesarTransposition.propTypes = {
  cShift: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(CaesarTransposition);
