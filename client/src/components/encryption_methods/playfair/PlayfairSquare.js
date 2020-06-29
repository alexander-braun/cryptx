import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

class PlayfaireSquare extends React.PureComponent {
  createVisualMatrix = () => {
    let parent = [];
    let children = [];
    for (let i = 0; i < 25; i++) {
      let ID = 'table' + i;
      children.push(
        <div key={uuidv4()} id={ID} className='playfairTable'>
          {this.props.playsquare[i]}
        </div>
      );
    }
    parent.push(
      <div
        id='visualMatrix'
        key={uuidv4()}
        style={{ boxShadow: 'none' }}
        className='controller'
      >
        {children}
      </div>
    );
    return parent;
  };

  render() {
    return (
      <div className='controller'>
        <div className='settings_name'>PLAYFAIR SQUARE</div>
        <div className='settings_operators'>{this.createVisualMatrix()}</div>
        <div id='skytale_explanatory_text'>
          <p className='feature_text'>
            This method is a bit shaky encrypting forth and back. One letter is
            left out and substituted with another letter - either not use this
            letter or at least be aware that there might be inconsistencies. A
            substitution letter will be added if two of the same letters occure
            directly after each other (if the first letter is on an even index).
            Change the '<b>j</b>' in the default input message to an '<b>i</b>'
            for a better encryption result.
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playsquare: state.playsquare,
});

export default connect(mapStateToProps)(PlayfaireSquare);
