import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './trifid.scss';
import PropTypes from 'prop-types';

const TrifidLayers = (props) => {
  /**
   * This generates the Trifid-Layers:
   * The first mapping returns 3 tables.
   * The second returns the tablehead elements with the layer naming (L1...)
   * The last two return the number of the row and the alphabet mapping
   * for the characters.
   */
  return (
    <div className='contentbox'>
      <div className='content-element'>
        <div className='content-element__settings-name'>Trifid Layers</div>
        <div className='content-element__settings-operators'>
          <div className='trifid-group'>
            {[0, 1, 2].map((element) => {
              return (
                <table key={uuidv4()} className='trifid-square'>
                  <tbody className='trifid-square__table-body'>
                    <tr className='trifid-square__tablerow'>
                      {[`L${element + 1}`, '1', '2', '3'].map((number) => (
                        <th
                          key={uuidv4()}
                          className='trifid-square__number trifid-square__number--big'
                        >
                          {number}
                        </th>
                      ))}
                    </tr>
                    {['1', '2', '3'].map((number) => {
                      return (
                        <tr key={uuidv4()} className='trifid-square__tablerow'>
                          <td className='trifid-square__number trifid-square__number--big'>
                            {number}
                          </td>
                          {props.trifidLayers[element][Number(number) - 1].map(
                            (num) => {
                              return (
                                <td
                                  key={uuidv4()}
                                  className='trifid-square__number trifid-square__number--big'
                                >
                                  {num}
                                </td>
                              );
                            }
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              );
            })}
          </div>
        </div>
        <p className='content-element__feature_text'>
          The Layers are generated from the standart english alphabet, the 27th
          character and the provided keyword.
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  trifidLayers: state.trifid.trifidLayers,
});

TrifidLayers.propTypes = {
  trifidLayers: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(TrifidLayers);
