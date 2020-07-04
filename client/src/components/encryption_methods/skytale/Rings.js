import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './rings.scss';

class Rings extends React.PureComponent {
  /**
   * Generates the style of a plane.
   * Makes the first plane red so it is visible
   * as the first letter of the input phrase.
   * If an element has no character it is made
   * transparent.
   */
  generatePlaneStyle(planeNumber, character, ringNumber) {
    let firstCharacterStyle = '';
    if (planeNumber === 0 && ringNumber === 0) {
      firstCharacterStyle = '#ff586e';
    }

    // No value ? no background
    let transparencyValue = !character ? 'transparent' : '';

    /**
     * Calculates the arc radius with one piece width = 30px
     * Could scale but didn't make sense yet
     */
    let d = 30 / Math.PI / (360 / this.props.ringLength / 360) / 2 - 5;

    //rotateValue according to the piece of plane
    let rotateValue =
      360 / this.props.ringLength +
      (planeNumber * 360) / this.props.ringLength -
      360 / this.props.ringLength;

    let ringStyles = {
      WebkitTransform: `rotateY(${rotateValue}deg) translateZ(${d}px)`,
      backgroundColor:
        firstCharacterStyle !== '' ? firstCharacterStyle : transparencyValue,
    };
    return ringStyles;
  }

  /**
   * Responsible for one plane
   */
  generateOneRingElement(indexOfCharacter, character, ringNumber) {
    let div = (
      <div
        key={uuidv4()}
        className='ring-container__plane'
        style={this.generatePlaneStyle(indexOfCharacter, character, ringNumber)}
      >
        {character}
      </div>
    );
    return div;
  }

  /**
   * Generates all planes for one ring
   */
  generateAllRingElements(ringNumber) {
    let parent = [];
    for (let i = 0; i < this.props.ringLength; i++) {
      // Loops throug the encrypted input and puts the generated ring element into the parent
      // The ring number accounts for the input[i] value used so every ring has the right letters
      let input = this.props.input.split(' ').join('');
      parent.push(
        this.generateOneRingElement(
          i,
          input[i + ringNumber * this.props.ringLength],
          ringNumber
        )
      );
    }
    return parent;
  }

  /**
   * Main function generate the cylinder
   */
  generateAllRings() {
    let parent = [];
    for (let i = 0; i < this.props.skytaleLength; i++) {
      let ringNumber = i;
      parent.push(
        <div key={i + 'ring'} className='ring-container__ring'>
          {this.generateAllRingElements(ringNumber)}
        </div>
      );
    }
    return parent;
  }
  render() {
    return (
      <div className='contentbox'>
        <div className='content-element'>
          <div className='content-element__settings-name'>SKYTALE</div>
          <div className='content-element__settings-operators content-element__settings-operators--vertical-center-flex'>
            <div className='ring-container'>
              <div
                className='ring-container__turntable'
                style={{ height: `${this.props.skytaleLength * 25}px` }}
              >
                {this.generateAllRings()}
              </div>
            </div>
            <p className='content-element__feature_text'>
              You can only see a readable alignment of letters (top to bottom,
              left to right) if you are <b>encrypting a cleartext</b> or{' '}
              <b>decrypting an encrypted text</b>. The ring-segment-count needs
              to stay exactly the same for both directions. The first letter of
              your message is marked in&nbsp;
              <span className='content-element__feature_text--red'>red</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ringLength: state.skytale.ringLength,
  skytaleLength: state.skytale.length,
  input: state.input,
});

export default connect(mapStateToProps)(Rings);
