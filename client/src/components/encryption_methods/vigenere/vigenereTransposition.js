import React from 'react';
import { connect } from 'react-redux';

class VigenereTransposition extends React.PureComponent {
  genAlphabet = () => {
    let keys = [
      'ika',
      'D5u',
      'JVA',
      '1Js',
      'FAf',
      'r2k',
      'Tla',
      '9br',
      'D8g',
      'bB9',
      'Lo8',
      'ajb',
      '8bx',
      'l5i',
      '6zq',
      '5DP',
      'yUd',
      '2gr',
      '8XH',
      'pHv',
      'TBV',
      'wnj',
      'DXo',
      'JzT',
      'bqo',
      'coo',
    ];

    //Generate Inputstream
    let input = this.props.input.split(' ').join('').split('');
    input = input.length >= 27 ? input.slice(0, 26) : input;
    let keywordVigenere = this.props.keywordVigenere;

    //Generate Keystream
    let key = new Array(input.length);
    for (let j = 0; j < Math.ceil(input.length / keywordVigenere.length); j++) {
      for (let i = 0; i < keywordVigenere.length; i++) {
        key[j * keywordVigenere.length + i] = keywordVigenere[i];
      }
    }

    //Generate Outputstream
    let out = this.props.output.split(' ').join('').split('');
    out = out.length >= 27 ? out.slice(0, 26) : out;

    //Generate Visualisation with all elements
    let output = [];
    let counter = 0;
    for (let element of input) {
      output.push(
        <div className='alphabet_transpos' key={keys[counter] + element}>
          <div>{element}</div>
          <div className='arrow'>&</div>
          <div
            style={
              counter < keywordVigenere.length
                ? { fontWeight: '900' }
                : { color: 'rgba(255, 255, 255, 0.43)', fontWeight: '200' }
            }
          >
            {key[counter]}
          </div>
          <div className='arrow'>=</div>
          <div>{out[counter]}</div>
        </div>
      );
      counter++;
    }
    return output;
  };

  render() {
    return (
      <div className='controller'>
        <div className='settings_name'>Vigenère Cipher Transposition</div>
        <div id='caesar_transposition'>
          <div className='alphabet_row_collect'>
            <div id='alphabet_standart'>{this.genAlphabet()}</div>
          </div>
        </div>
        <div id='caesar_explanatory_text'>
          <p className='feature_text'>
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
