import React from 'react';
import { connect } from 'react-redux';
import updateAlphabet from '../../../actions/updateAlphabet';

const Alphabet = ({ alphabet, alphabetActive, updateAlphabet }) => {
  return (
    <div className='contentbox'>
      <div className='content-element'>
        <div className='content-element__settings-name'>Alphabet</div>
        <div className='content-element__settings-operators'>
          <textarea
            className='content-element__textarea'
            value={alphabet}
            readOnly={!alphabetActive}
            style={alphabetActive ? { color: '#dadada' } : { color: 'grey' }}
            onChange={(evt) => {
              updateAlphabet(evt.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  alphabet: state.alphabet.alphabet,
  alphabetActive: state.alphabet.active,
});

const mapActionsToProps = {
  updateAlphabet: updateAlphabet,
};

export default connect(mapStateToProps, mapActionsToProps)(Alphabet);
