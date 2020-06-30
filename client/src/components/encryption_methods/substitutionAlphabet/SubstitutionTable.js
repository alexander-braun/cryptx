import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './substitution.scss';
import setSubstitutionAlphabet from '../../../actions/setSubstitutionAlphabet';

const SubstitutionAlphabet = (props) => {
  /**
   * Get the mapping for the characters
   */
  const handleAlphabetChange = (e) => {
    const parent = e.target.dataset.parent;
    const value = e.target.value;
    if (props.alphabet.indexOf(value.toLowerCase()) !== -1) {
      props.setSubstitutionAlphabet(parent, value);
    }
  };

  /**
   * Find double elements
   * Mark them with a blue color.
   */
  useEffect(() => {
    let substitutionAlphabet = Object.values(props.substitutionAlphabet);
    let double = [];
    for (let character of substitutionAlphabet) {
      if (
        substitutionAlphabet.indexOf(character) !==
        substitutionAlphabet.lastIndexOf(character)
      ) {
        double.indexOf(character) === -1 && double.push(character);
      }
    }

    let inputs = document.getElementsByClassName('substitution__input');
    for (let input of inputs) {
      if (double.indexOf(input.value) !== -1) {
        input.classList.add('substitution__input--double_character');
      }
    }
  });

  return (
    <div className='contentbox'>
      <div className='content-element'>
        <div className='content-element__settings-name'>
          Alphabetic Substitution Mapping Chart
        </div>
        <div className='content-element__settings-operators content-element__settings-operators--multiple-elements'>
          {props.alphabet.split('').map((character) => {
            return (
              <div className='substitution' key={uuidv4()}>
                <div className='substitution__character'>
                  {character.toUpperCase()}
                </div>
                <div className='arrow'>↓</div>
                <div className='substitution__input-wrapper'>
                  <input
                    className='substitution__input'
                    onChange={(e) => handleAlphabetChange(e)}
                    data-parent={character}
                    value={props.substitutionAlphabet[character]}
                    maxLength='1'
                    size='1'
                  ></input>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  alphabet: state.alphabet.alphabet,
  substitutionAlphabet: state.substitutionAlphabet,
});

const mapActionsToProps = {
  setSubstitutionAlphabet,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SubstitutionAlphabet);
