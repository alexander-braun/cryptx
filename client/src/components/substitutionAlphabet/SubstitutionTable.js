import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/substitution.css';
import setSubstitutionAlphabet from '../../actions/setSubstitutionAlphabet';

const SubstitutionAlphabet = (props) => {
  const handleAlphabetChange = (e) => {
    const parent = e.target.dataset.parent;
    const value = e.target.value;
    if (props.alphabet.indexOf(value.toLowerCase()) !== -1) {
      props.setSubstitutionAlphabet(parent, value);
    }
  };

  useEffect(() => {
    let substitutionAlphabet = Object.values(props.substitutionAlphabet);
    let double = [];
    console.log(substitutionAlphabet);
    for (let character of substitutionAlphabet) {
      if (
        substitutionAlphabet.indexOf(character) !==
        substitutionAlphabet.lastIndexOf(character)
      ) {
        double.indexOf(character) === -1 && double.push(character);
      }
    }

    let inputs = document.getElementsByClassName('substitution_input_selector');

    for (let input of inputs) {
      if (double.indexOf(input.value) !== -1) {
        input.classList.add('double_character');
      }
    }
  });

  return (
    <div className='controller substitution' style={{ border: 'none' }}>
      <div className='settings_name'>Alphabetic Substitution Mapping Chart</div>
      <div className='settings_operators'>
        {props.alphabet.split('').map((character) => {
          return (
            <div className='substitution_wrapper' key={uuidv4()}>
              <div className='substitution_character' key={uuidv4()}>
                {character.toUpperCase()}
              </div>
              <div className='arrow'>↓</div>
              <div className='substitution_input' key={uuidv4()}>
                <input
                  onChange={(e) => handleAlphabetChange(e)}
                  data-parent={character}
                  id={`character-${character}`}
                  className='substitution_input_selector'
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
