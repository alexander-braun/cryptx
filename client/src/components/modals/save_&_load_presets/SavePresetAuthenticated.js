import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//MUI
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import GetAppIcon from '@material-ui/icons/GetApp';

//Actions
import setPresetDescription from '../../../actions/setPresetDescription';
import setPresetName from '../../../actions/setPresetName';
import { addPreset } from '../../../actions/presets';
import { toggleSavePresetModal } from '../../../actions/toggleSavePresetModal';

//Assets
import { save_preset_settings } from './save_preset_settings';

const SavePresetAuthenticated = (props) => {
  const handleSavePreset = (e) => {
    e.preventDefault();
    /**
     * Object to store the settings in
     */
    const presetSettings = {};

    /**
     * Get the necessary properties as strings
     */
    const methodProperties = save_preset_settings[props.method];

    /**
     * Put the belonging properties with their respective
     * settings into the presetSettings object.
     */
    for (const property of methodProperties) {
      presetSettings[property] = props[property];
    }

    /**
     * Finally add the preset
     */
    props.addPreset({
      name: props.presetName,
      description: props.presetDescription,
      preset: {
        ...presetSettings,
      },
    });

    /**
     * And reset the save-preset input fields + toggle off modal
     */
    props.setPresetName('');
    props.setPresetDescription('');
    props.toggleSavePresetModal();
  };
  return (
    <Fragment>
      <div className='modal__header modal__header--space-between'>
        Save as Preset
        <button className='modal__close-btn'>
          <HighlightOffIcon onClick={() => props.toggleSavePresetModal()} />
        </button>
      </div>
      <div className='modal__body'>
        <form
          onSubmit={(e) => {
            handleSavePreset(e);
          }}
        >
          <table className='modal__preset-table'>
            <tbody>
              <tr>
                <th className='modal__preset-table-head'>Preset Name</th>
                <th className='modal__preset-table-head'>Description</th>
                <th className='modal__preset-table-head modal__preset-table-head--center'>
                  Save
                </th>
              </tr>
              <tr>
                <td className='modal__presets-table-cell'>
                  <input
                    className='modal__preset-table-input'
                    required
                    value={props.presetName}
                    onChange={(e) => props.setPresetName(e.target.value)}
                    type='text'
                    name='name'
                    placeholder='Preset Name'
                  />
                </td>
                <td className='modal__presets-table-cell'>
                  <input
                    className='modal__preset-table-input'
                    required
                    value={props.presetDescription}
                    onChange={(e) => props.setPresetDescription(e.target.value)}
                    type='text'
                    name='description'
                    placeholder='Description'
                  />
                </td>
                <td className='modal__presets-table-cell modal__presets-table-cell--center'>
                  <button
                    className='modal__button modal__button--blue'
                    type='submit'
                  >
                    <GetAppIcon />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div className='modal__bottom-wrapper modal__bottom-wrapper--no-border-top'>
        <button
          className='modal__close modal__close--right'
          onClick={() => props.toggleSavePresetModal()}
        >
          Close
        </button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  presetsModal: state.presetsModal.modalOpen,
  presetDescription: state.presetDescription,
  presetName: state.presetName,
  toReplaceLetter: state.replace.toReplaceLetter,
  replaceLetter: state.replace.replaceLetter,
  cShift: state.cShift,
  direction: state.direction,
  input: state.input,
  method: state.method,
  foreignChars: state.foreignChars,
  caseformat: state.caseformat,
  alphabet: state.alphabet.alphabet,
  prime1: state.rsa.prime1,
  prime2: state.rsa.prime2,
  keywordVigenere: state.keywordVigenere,
  keywordPlayfair: state.playfair.keywordPlayfair,
  affine_alpha: state.affine.affine_alpha,
  affine_beta: state.affine.affine_beta,
  otpKey: state.otpKey,
  playSquare: state.playSquare,
  ringLength: state.skytale.ringLength,
  keywordNihilist: state.keywordNihilist,
  cipherNihilist: state.cipherNihilist,
  substitutionAlphabet: state.substitutionAlphabet,
  trifidKey: state.trifid.trifidKey,
  trifid27thLetter: state.trifid.trifid27thLetter,
  trifidGroupSize: state.trifid.trifidGroupSize,
  e: state.rsa.e,
  caseTransformChoice: state.caseTransformChoice,
});

const mapActionsToProps = {
  setPresetName,
  toggleSavePresetModal,
  setPresetDescription,
  addPreset,
};

SavePresetAuthenticated.propTypes = {
  setPresetName: PropTypes.func.isRequired,
  toggleSavePresetModal: PropTypes.func.isRequired,
  setPresetDescription: PropTypes.func.isRequired,
  addPreset: PropTypes.func.isRequired,
  presetsModal: PropTypes.bool.isRequired,
  presetDescription: PropTypes.string,
  presetName: PropTypes.string,
  toReplaceLetter: PropTypes.string,
  replaceLetter: PropTypes.string,
  cShift: PropTypes.number,
  direction: PropTypes.string.isRequired,
  input: PropTypes.string,
  method: PropTypes.string.isRequired,
  foreignChars: PropTypes.string.isRequired,
  caseformat: PropTypes.string.isRequired,
  alphabet: PropTypes.string.isRequired,
  prime1: PropTypes.string,
  prime2: PropTypes.string,
  keywordVigenere: PropTypes.string,
  keywordPlayfair: PropTypes.string,
  affine_alpha: PropTypes.number,
  affine_beta: PropTypes.number,
  otpKey: PropTypes.string,
  playSquare: PropTypes.arrayOf(PropTypes.string),
  ringLength: PropTypes.number,
  keywordNihilist: PropTypes.string,
  cipherNihilist: PropTypes.string,
  substitutionAlphabet: PropTypes.object,
  trifidKey: PropTypes.string,
  trifid27thLetter: PropTypes.string,
  trifidGroupSize: PropTypes.number,
  e: PropTypes.string,
  caseTransformChoice: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SavePresetAuthenticated);
