import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

//Assets
import '../modal.scss';
import { EncryptionMethodsDetails } from '../../main/BlockCenter/EncryptionMethodsDetails';

//Actions
import { toggleModal } from '../../../actions/toggleModal';
import { changeMethod } from '../../../actions/changeMethod';

//Components
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MethodChoiceButton from './MethodChoiceButton';

const Modal = (props) => {
  /**
   * Method to toggle the modal when the modal
   * body is not clicked but the outside wrapper.
   */
  const toggleModalOuterClick = (e) => {
    e.preventDefault();
    if (e.target.className === 'modal-wrapper') {
      props.toggleModal();
    }
  };

  /**
   * All available categories of encryption
   * methods
   */
  const options = [
    'Ciphers',
    'Alphabets',
    'Polybius Square Ciphers',
    'Polyalphabetic Ciphers',
    'Public Key Encryption',
    'Text Transformations',
  ];

  /**
   * Generates the body of the modal with
   * all the options.
   */
  const generateEncryptionMethods = () =>
    options.map((option) => {
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

  if (props.modalOpen) {
    return (
      <div className='modal-wrapper' onClick={(e) => toggleModalOuterClick(e)}>
        <div className='modal'>
          <div className='modal__header modal__header--space-between'>
            Encryption Methods
            <button className='modal__close-btn'>
              <HighlightOffIcon onClick={() => props.toggleModal()} />
            </button>
          </div>
          <div className='modal__body'>{generateEncryptionMethods()}</div>
          <div className='modal__bottom-wrapper'>
            <div className='modal__legend'>
              <div className='modal__explanation-wrapper'>
                <div className='modal__featured-sign'>F</div> Featured in
                Timeline
              </div>
              <div className='modal__explanation-wrapper'>
                <div className='modal__unfeatured-sign'>N</div> Not featured in
                Timeline
              </div>
            </div>
            <button
              className='modal__close'
              onClick={() => props.toggleModal()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  } else return null;
};

const mapStateToProps = (state) => ({
  modalOpen: state.modal,
  method: state.method,
});

const mapActionsToProps = {
  toggleModal: toggleModal,
  changeMethod: changeMethod,
};

Modal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  method: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  changeMethod: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Modal);
