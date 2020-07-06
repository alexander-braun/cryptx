import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../../actions/toggleModal';
import '../modal.scss';
import { changeMethod } from '../../../actions/changeMethod';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MethodChoiceButton from './MethodChoiceButton';
import { EncryptionMethodsDetails } from '../../main/BlockCenter/EncryptionMethodsDetails';
import { v4 as uuidv4 } from 'uuid';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModalOuterClick = this.toggleModalOuterClick.bind(this);
    this.generateEncryptionMethods = this.generateEncryptionMethods.bind(this);
  }

  toggleModalOuterClick = (e) => {
    e.preventDefault();
    if (e.target.className === 'modal-wrapper') {
      this.props.toggleModal();
    }
  };

  options = [
    'Ciphers',
    'Alphabets',
    'Polybius Square Ciphers',
    'Polyalphabetic Ciphers',
    'Public Key Encryption',
    'Text Transformations',
  ];

  generateEncryptionMethods = () =>
    this.options.map((option) => {
      return (
        <div className='modal__content' key={uuidv4()}>
          <span className='modal__category-title'>{option}</span>
          <ul>
            {Object.keys(EncryptionMethodsDetails).map((method) => {
              return (
                EncryptionMethodsDetails[method].category === option && (
                  <MethodChoiceButton
                    key={uuidv4()}
                    name={EncryptionMethodsDetails[method].name}
                    featured={EncryptionMethodsDetails[method].timeline}
                    fullName={EncryptionMethodsDetails[method].fullName}
                  />
                )
              );
            })}
          </ul>
        </div>
      );
    });

  render() {
    if (this.props.modalOpen) {
      return (
        <div
          className='modal-wrapper'
          onClick={(e) => this.toggleModalOuterClick(e)}
        >
          <div className='modal'>
            <div className='modal__header modal__header--space-between'>
              Encryption Methods
              <button className='modal__close-btn'>
                <HighlightOffIcon onClick={() => this.props.toggleModal()} />
              </button>
            </div>
            <div className='modal__body'>
              {this.generateEncryptionMethods()}
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
                onClick={() => this.props.toggleModal()}
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
  toggleModal: toggleModal,
  changeMethod: changeMethod,
};

export default connect(mapStateToProps, mapActionsToProps)(Modal);
