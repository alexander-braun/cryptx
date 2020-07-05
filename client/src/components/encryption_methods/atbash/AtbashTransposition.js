import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropsTypes from 'prop-types';

class AtbashTransposition extends React.Component {
  /**
   * Generates both the reversed and the normal alphabet for visualization
   */
  genAlphabet = (reverse) => {
    let style = { color: 'white' };

    let alphabet = this.props.alphabet.toLowerCase().split('').sort();

    alphabet = reverse
      ? [...new Set(alphabet)].reverse()
      : [...new Set(alphabet)];

    let output = [];

    for (let element of alphabet) {
      let colorArrow =
        element.toLowerCase() === 'a' || element.toLowerCase() === 'z'
          ? 'white'
          : 'rgba(255, 255, 255, 0.199)';

      output.push(
        <div
          className='alphabet-row__character'
          key={uuidv4()}
          style={
            element.toLowerCase() === 'a' || element.toLowerCase() === 'z'
              ? style
              : { color: '#ffffffa0' }
          }
        >
          <div className={reverse ? 'arrow' : ''} style={{ color: colorArrow }}>
            {reverse ? '↑' : element}
          </div>
          <div className={reverse ? '' : 'arrow'} style={{ color: colorArrow }}>
            {reverse ? element : '↓'}
          </div>
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
            Atbash Cipher Transposition
          </div>
          <div className='content-element__content content-element__content--alphabet-transposition'>
            <div className='alphabet-row'>
              <div className='alphabet-row__standard'>
                {this.genAlphabet(false)}
              </div>
              <div className='alphabet-row__transpositioned'>
                {this.genAlphabet(true)}
              </div>
            </div>
          </div>
        </div>
        <p className='content-element__feature_text'>
          Visualization of the mirror-like character mapping of the atbash
          cipher. The cipher is very easy to break as the letter mapping always
          stays the same. The encryption- decryption- and cracking algorithm are
          exactly the same. Have a look at the frequency analysis graphs on both
          sides to see the mirror effect.
        </p>
      </div>
    );
  }
}

AtbashTransposition.propTypes = {
  alphabet: PropsTypes.string.isRequired,
};

export default connect()(AtbashTransposition);
