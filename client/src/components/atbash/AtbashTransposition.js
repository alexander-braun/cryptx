import React from 'react';
import { connect } from 'react-redux';

class AtbashTransposition extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.alphabet !== this.props.alphabet) {
      return true;
    } else return false;
  }

  genAlphabet = (reverse) => {
    if (this.props.alphabet.length === 0) return;

    let style = { color: 'white' };
    let keys = [
      'iBk',
      'DB5',
      'JyV',
      '1Ts',
      'FUf',
      'rMk',
      'TVa',
      '9b3',
      'Dk8',
      'byB',
      'Lo8',
      'ayb',
      '8Cx',
      'lv5',
      '6z4',
      '5nD',
      'yUs',
      '2er',
      '8QH',
      'BHv',
      'TJV',
      'wJn',
      'DmX',
      'JXz',
      'bKq',
      'coo',
    ];

    let alphabet = this.props.alphabet.toLowerCase().split('').sort();
    alphabet = reverse
      ? [...new Set(alphabet)].reverse()
      : [...new Set(alphabet)];

    let output = [];
    let counter = 0;

    for (let element of alphabet) {
      let colorArrow =
        element.toLowerCase() === 'a' || element.toLowerCase() === 'z'
          ? 'white'
          : 'rgba(255, 255, 255, 0.199)';

      output.push(
        <div
          className='alphabet_transpos'
          key={keys[counter]}
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
      counter++;
    }
    return output;
  };

  render() {
    return (
      <div className='controller'>
        <div className='settings_name'>Atbash Cipher Transposition</div>
        <div id='caesar_transposition'>
          <div className='alphabet_row_collect'>
            <div id='alphabet_standart'>{this.genAlphabet(false)}</div>
            <div id='alphabet_transpositioned'>{this.genAlphabet(true)}</div>
          </div>
        </div>
        <div id='caesar_explanatory_text'>
          <p className='feature_text'>
            Visualization of the mirror-like character mapping of the atbash
            cipher. The cipher is very easy to break as the letter mapping
            always stays the same. The encryption- decryption- and cracking
            algorithm are exactly the same. Have a look at the frequency
            analysis graphs on both sides to see the mirror effect.
          </p>
        </div>
      </div>
    );
  }
}

export default connect()(AtbashTransposition);
