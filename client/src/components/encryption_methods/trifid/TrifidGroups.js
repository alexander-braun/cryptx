import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './trifid.scss';
import PropTypes from 'prop-types';

const TrifidGroups = (props) => {
  /**
   * Get rid of non-alphabet characters or characters that are
   * not the 27th trifid letter the user chooses.
   */
  const cleanInput = [];
  const cleanInputLength = () => {
    let cleanInputLength = 0;
    for (let i = 0; i < props.input.length; i++) {
      if (
        props.alphabet.indexOf(props.input[i].toLowerCase()) !== -1 ||
        props.input[i].toLowerCase() === props.trifid27thLetter.toLowerCase()
      ) {
        cleanInputLength++;
        cleanInput.push(props.input[i]);
      }
    }
    return cleanInputLength;
  };
  return (
    <div className='contentbox'>
      <div className='content-element'>
        <div className='content-element__settings-name'>Trifid Groups</div>
        <div className='content-element__settings-operators'>
          <div className='trifid-group'>
            {[
              ...Array(
                Math.ceil(cleanInputLength() / Number(props.trifidGroupSize))
              ).keys(),
            ].map((element) => {
              return (
                /**
                 * Generate each one table element for all the trifid groups.
                 *
                 * The first Mapping in <tr> return the head table row.
                 *
                 * The second Mapping returns 3 rows with the characters mapped
                 * to the corresponding layer elements/rows/cols.
                 *
                 * The last Mapping returns the bottom of the table with the
                 * encrypted characters.
                 *
                 */
                <table key={uuidv4()} className='trifid-square'>
                  <tbody className='trifid-square__table-body'>
                    <tr>
                      {cleanInput
                        .slice(
                          element * props.trifidGroupSize,
                          element * props.trifidGroupSize +
                            props.trifidGroupSize
                        )
                        .map((letter) => (
                          <th
                            className='trifid-square__tablehead'
                            key={uuidv4()}
                          >
                            {letter}
                          </th>
                        ))}
                    </tr>
                    {[0, 1, 2].map((number) => {
                      return (
                        <tr key={uuidv4()} className='trifid-square__tablerow'>
                          {props.trifidGroups
                            .slice(
                              element * props.trifidGroupSize,
                              element * props.trifidGroupSize +
                                props.trifidGroupSize
                            )
                            .map((element) => {
                              return (
                                <td
                                  key={uuidv4()}
                                  className='trifid-square__number'
                                >
                                  {element[number] + 1}
                                </td>
                              );
                            })}
                        </tr>
                      );
                    })}
                    <tr>
                      {props.output
                        .split('')
                        .slice(
                          element * props.trifidGroupSize,
                          element * props.trifidGroupSize +
                            props.trifidGroupSize
                        )
                        .map((letter) => {
                          return (
                            <td
                              className='trifid-square__encrypted'
                              key={uuidv4()}
                            >
                              {letter}
                            </td>
                          );
                        })}
                    </tr>
                  </tbody>
                </table>
              );
            })}
          </div>
        </div>
        <p className='content-element__feature_text'>
          The tablehead represents the letters of your input text. Numbers
          written under the letters are a representation of the encoded letter.
          F.e.: With the standart 'Felix Marie...' - keyword, the letter "A"
          becomes a 1 (layer), 3 (row), 1 (column). The letters under the
          numbers represent the output. They are encoded by horizontally
          combining each 3 numbers.
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  trifidGroups: state.trifid.trifidGroups,
  trifidGroupSize: state.trifid.trifidGroupSize,
  trifid27thLetter: state.trifid.trifid27thLetter,
  input: state.input,
  alphabet: state.alphabet.alphabet,
  output: state.output,
});

TrifidGroups.propTypes = {
  trifidGroups: PropTypes.array.isRequired,
  trifidGroupSize: PropTypes.number.isRequired,
  trifid27thLetter: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  alphabet: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(TrifidGroups);
