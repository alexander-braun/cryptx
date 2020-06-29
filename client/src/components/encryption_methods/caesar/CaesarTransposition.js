import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

class CaesarTransposition extends React.PureComponent {
  genAlphabet = () => {
    if (this.props.alphabet.length === 0) return;

    let style = { color: 'white' };

    let alphabet = this.props.alphabet.toLowerCase().split('').sort();
    alphabet = [...new Set(alphabet)];

    let output = [];
    for (let element of alphabet) {
      output.push(
        <div
          className='alphabet_transpos'
          key={uuidv4()}
          style={
            element.toLowerCase() === 'a'
              ? style
              : { color: 'rgba(255, 255, 255, 0.627)' }
          }
        >
          <div>{element}</div>
          <div className={element.toLowerCase() === 'a' ? '' : 'arrow'}>↓</div>
        </div>
      );
    }
    return output;
  };

  genShifted = (shift) => {
    if (this.props.alphabet.length === 0) return;

    let style = { color: 'white' };

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
          className='alphabet_transpos'
          key={uuidv4()}
          style={
            alphabet[i].toLowerCase() === 'a'
              ? style
              : { color: 'rgba(255, 255, 255, 0.627)' }
          }
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
      <div className='controller'>
        <div className='settings_name'>Caesar Cipher Transposition</div>
        <div id='caesar_transposition'>
          <div className='alphabet_row_collect'>
            <div id='alphabet_standart'>{this.genAlphabet()}</div>
            <div id='alphabet_transpositioned'>
              {this.genShifted(this.props.cShift)}
            </div>
          </div>
        </div>
        <div id='caesar_explanatory_text'>
          <p className='feature_text'>
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

export default connect(mapStateToProps)(CaesarTransposition);
