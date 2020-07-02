import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../../actions/toggleModal';
import '../modal.scss';
import { changeMethod } from '../../../actions/changeMethod';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

class Modal extends React.Component {
  toggleModal = (e) => {
    e.preventDefault();
    this.props.onModalToggle();
  };
  render() {
    if (this.props.modalOpen) {
      return (
        <div
          className='modal-wrapper'
          onClick={() => this.props.onModalToggle()}
        >
          <div className='modal'>
            <div className='modal__header modal__header--space-between'>
              Encryption Methods
              <button className='modal__close-btn'>
                <HighlightOffIcon onClick={(e) => toggleModal(e)} />
              </button>
            </div>
            <div className='modal__body'>
              <div className='modal__content'>
                <span className='modal__category-title'>Ciphers</span>
                <ul>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('atbash');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__featured-sign'>F</div>
                        <div className='modal__chip-text'>Atbash Cipher</div>
                      </div>
                    </button>
                  </li>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('caesar');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__featured-sign'>F</div>
                        <div className='modal__chip-text'>Ceasars Cipher</div>
                      </div>
                    </button>
                  </li>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('skytale');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__featured-sign'>F</div>
                        <div className='modal__chip-text'>Skytale</div>
                      </div>
                    </button>
                  </li>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('affine');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__unfeatured-sign'>N</div>
                        <div className='modal__chip-text'>Affine</div>
                      </div>
                    </button>
                  </li>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('playfair');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__featured-sign'>F</div>
                        <div className='modal__chip-text'>Playfair Cipher</div>
                      </div>
                    </button>
                  </li>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('otp');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__featured-sign'>F</div>
                        <div className='modal__chip-text'>One Time Pad</div>
                      </div>
                    </button>
                  </li>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('rot13');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__unfeatured-sign'>N</div>
                        <div className='modal__chip-text'>Rot13</div>
                      </div>
                    </button>
                  </li>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('substitution');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__unfeatured-sign'>N</div>
                        <div className='modal__chip-text'>
                          Alphabetic Substitution Cipher
                        </div>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              <div className='modal__content'>
                <span className='modal__category-title'>Alphabets</span>
                <ul>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('morse');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__featured-sign'>F</div>
                        <div className='modal__chip-text'>Morse Code</div>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              <div className='modal__content'>
                <span className='modal__category-title'>
                  Polybius square ciphers
                </span>
                <ul>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('nihilist');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__featured-sign'>F</div>
                        <div className='modal__chip-text'>Nihilist Cipher</div>
                      </div>
                    </button>
                  </li>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('trifid');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__featured-sign'>F</div>
                        <div className='modal__chip-text'>Trifid Cipher</div>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              <div className='modal__content'>
                <span className='modal__category-title'>
                  Polyalphabetic Ciphers
                </span>
                <ul>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('vigenere');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__featured-sign'>F</div>
                        <div className='modal__chip-text'>Vigenère Cipher</div>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              <div className='modal__content'>
                <span className='modal__category-title'>
                  Public Key Encryption
                </span>
                <ul>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('rsa');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__featured-sign'>F</div>
                        <div className='modal__chip-text'>RSA</div>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              <div className='modal__content'>
                <span className='modal__category-title'>
                  Text Transformations
                </span>
                <ul>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('replace');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__unfeatured-sign'>N</div>
                        <div className='modal__chip-text'>Replace</div>
                      </div>
                    </button>
                  </li>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('reverse');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__unfeatured-sign'>N</div>
                        <div className='modal__chip-text'>Reverse</div>
                      </div>
                    </button>
                  </li>
                  <li className='modal__list-item modal__list-item--row'>
                    <button
                      className='modal__encryption-method'
                      onClick={(e) => {
                        toggleModal(e);
                        this.props.changeMethod('casetransform');
                      }}
                    >
                      <div className='modal__method-wrapper'>
                        <div className='modal__unfeatured-sign'>N</div>
                        <div className='modal__chip-text'>Case Transforms</div>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className='modal__bottom-wrapper'>
              <div className='modal__legend'>
                <div className='modal__explanation-wrapper'>
                  <div className='modal__featured-sign'>F</div> Featured in
                  Timeline
                </div>
                <div className='modal__explanation-wrapper'>
                  <div className='modal__unfeatured-sign'>N</div> Not featured
                  in Timeline
                </div>
              </div>
              <button
                className='modal__close'
                onClick={(e) => {
                  toggleModal(e);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

const mapStateToProps = (state) => ({
  modalOpen: state.modal,
  method: state.method,
});

const mapActionsToProps = {
  onModalToggle: toggleModal,
  changeMethod: changeMethod,
};

export default connect(mapStateToProps, mapActionsToProps)(Modal);
