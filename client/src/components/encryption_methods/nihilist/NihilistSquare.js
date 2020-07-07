import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

//Assets
import './nihilistSquare.scss';

class NihilistSquare extends React.PureComponent {
  /**
   * This generates the alphabet matrix
   * for the nihilist-specific polybius
   * square.
   */
  createVisualMatrix = () => {
    /**
     * If the user comes from a different method with decryption
     * enabled, the lengthcheck prevents the app from crashing
     * if there are no numbers in the input to decrypt.
     */
    if (this.props.nihilistSquare.length < 5) return;
    if (!this.props.nihilistSquare || this.props.nihilistSquare.length === 0)
      return;
    let table = (
      <table className='nihilistSquare'>
        <tbody>
          <tr>
            {['#', '1', '2', '3', '4', '5'].map((number) => (
              <th key={uuidv4()}>{number}</th>
            ))}
          </tr>
          {['1', '2', '3', '4', '5'].map((number) => {
            return (
              <tr key={uuidv4()}>
                <td>{number}</td>
                {this.props.nihilistSquare[Number(number) - 1].map((num) => (
                  <td key={uuidv4()}>{num}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
    return table;
  };

  render() {
    return (
      <div className='contentbox' style={{ borderBottom: 'none' }}>
        <div className='content-element'>
          <div className='content-element__settings-name'>
            Nihilist Polybius Square
          </div>
          <div className='content-element__settings-operators'>
            {this.createVisualMatrix()}
          </div>
          <p className='content-element__feature_text'>
            This method is a bit shaky encrypting forth and back. The letter "J"
            is left out and will be replaced by an 'I' - either not use this
            letter or at least be aware that there might be inconsistencies.
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nihilistSquare: state.nihilist.nihilistSquare,
});

NihilistSquare.propTypes = {
  nihilistSquare: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(NihilistSquare);
