import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Actions
import updateAlphabet from '../../../actions/updateAlphabet';

const Alphabet = ({ alphabet, alphabetActive, updateAlphabet }) => {
  return (
    <div className='contentbox'>
      <div className='content-element'>
        <div className='content-element__settings-name'>Alphabet</div>
        <div className='content-element__settings-operators'>
          <textarea
            className={`content-element__textarea ${
              alphabetActive
                ? 'content-element__textarea--active'
                : 'content-element__textarea--deactivated'
            }`}
            value={alphabet}
            readOnly={!alphabetActive}
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

Alphabet.propTypes = {
  alphabet: PropTypes.string.isRequired,
  alphabetActive: PropTypes.bool.isRequired,
  updateAlphabet: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Alphabet);
