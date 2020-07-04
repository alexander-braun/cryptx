import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './playfair-square.scss';

class PlayfaireSquare extends React.PureComponent {
  createVisualMatrix = () => {
    let parent = [];
    let children = [];
    for (let i = 0; i < 25; i++) {
      let ID = 'table' + i;
      children.push(
        <div key={uuidv4()} id={ID} className='playfair-square__element'>
          {this.props.playsquare[i]}
        </div>
      );
    }
    parent.push(
      <div className='playfair-square' key={uuidv4()}>
        {children}
      </div>
    );
    return parent;
  };

  render() {
    return (
      <div className='contentbox'>
        <div className='content-element'>
          <div className='content-element__settings-name'>PLAYFAIR SQUARE</div>
          <div className='content-element__settings-operators'>
            {this.createVisualMatrix()}
          </div>
          <p className='content-element__feature_text'>
            This method is a bit shaky encrypting forth and back. One letter is
            left out and substituted with another letter - either not use this
            letter or at least be aware that there might be inconsistencies. A
            substitution letter will be added if two of the same letters occure
            directly after each other (if the first letter is on an even index).
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playsquare: state.playfair.playsquare,
});

export default connect(mapStateToProps)(PlayfaireSquare);
