import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { togglePresetsModal } from '../../../actions/togglePresetsModal';
import '../modal.scss';
import { loadPresets, addPreset, deletePreset } from '../../../actions/presets';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PropTypes from 'prop-types';
import { setCshift } from '../../../actions/setCShift';
import { updateInput } from '../../../actions/updateInput';
import toggleChars from '../../../actions/toggleIncludeChars';
import toggleCase from '../../../actions/toggleCase';
import updateAlphabet from '../../../actions/updateAlphabet';
import { changeMethod } from '../../../actions/changeMethod';
import { toggleDirection } from '../../../actions/toggleDirection';
import setPrime1 from '../../../actions/setPrime1';
import setPrime2 from '../../../actions/setprime2';
import setRsaE from '../../../actions/setRsaE';
import setKeywordVigenere from '../../../actions/setKeywordVigenere';
import setKeywordPlayfair from '../../../actions/setKeywordPlayfair';
import setOtpKey from '../../../actions/setOtpKey';
import { setRinglength } from '../../../actions/setRingLength';
import setPresetDescription from '../../../actions/setPresetDescription';
import setPresetName from '../../../actions/setPresetName';
import { toReplaceLetter, replaceLetter } from '../../../actions/replace';
import setAffineAlpha from '../../../actions/setAffineAlpha';
import setAffineBeta from '../../../actions/setAffineBeta';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import methodNamesAll from '../../main/BlockCenter/EncryptionMethodNames';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

class PresetsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };
    this.genTable = this.genTable.bind(this);
    this.handleLoadPreset = this.handleLoadPreset.bind(this);
    this.handleSavePreset = this.handleSavePreset.bind(this);
    this.getDeviceWidth = this.getDeviceWidth.bind(this);
  }

  genTable = () => {
    let presetTable = [];
    for (let preset of this.props.presets) {
      let method = preset.preset.method;
      presetTable.push(
        <tr key={preset._id}>
          {this.state.width >= 700
            ? preset.date !== undefined && (
                <td className='modal__presets-table-cell'>{preset.date}</td>
              )
            : null}
          <td className='modal__presets-table-cell'>{preset.name}</td>
          <td className='modal__presets-table-cell'>
            {methodNamesAll[method]}
          </td>
          {this.state.width >= 700 ? (
            <td className='modal__presets-table-cell'>{preset.description}</td>
          ) : null}
          <td
            id={preset._id}
            onClick={(e) => this.handleLoadPreset(preset._id)}
            className='modal__presets-table-cell modal__presets-table-cell--btn-blue'
          >
            <GetAppIcon />
          </td>
          <td
            onClick={(e) => this.props.deletePreset(preset._id)}
            className='modal__presets-table-cell modal__presets-table-cell--btn-red'
          >
            <DeleteForeverIcon />
          </td>
        </tr>
      );
    }
    return presetTable;
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.isAuthenticated &&
      prevProps.presets.length !== this.props.presets.length
    ) {
      this.genTable();
    }
  }

  handleLoadPreset = (id) => {
    if (!this.props.isAuthenticated) return;
    let selected;
    for (let preset of this.props.presets) {
      if (preset._id === id) {
        selected = preset;
      }
    }
    let {
      method,
      input,
      alphabet,
      cShift,
      direction,
      caseFormat,
      foreignChars,
      prime1,
      prime2,
      RsaE,
      keywordVigenere,
      keywordPlayfair,
      otpKey,
      ringLength,
      replaceLetter,
      toReplaceLetter,
      affine_alpha,
      affine_beta,
    } = selected.preset;

    method !== undefined && this.props.changeMethod(method);
    input !== undefined && this.props.updateInput(input);
    alphabet !== undefined && this.props.updateAlphabet(alphabet);
    cShift !== undefined && this.props.setCshift(cShift);
    direction !== undefined && this.props.toggleDirection(direction);
    caseFormat !== undefined && this.props.toggleCase(caseFormat);
    foreignChars !== undefined && this.props.toggleChars(foreignChars);
    prime1 !== undefined && this.props.setPrime1(prime1);
    prime2 !== undefined && this.props.setPrime2(prime2);
    RsaE !== undefined && this.props.setRsaE(RsaE);
    keywordVigenere !== undefined &&
      this.props.setKeywordVigenere(keywordVigenere);
    keywordPlayfair !== undefined &&
      this.props.setKeywordPlayfair(keywordPlayfair);
    otpKey !== undefined && this.props.setOtpKey(otpKey);
    ringLength !== undefined && this.props.setRinglength(ringLength);
    replaceLetter !== undefined && this.props.setReplaceLetter(replaceLetter);
    toReplaceLetter !== undefined &&
      this.props.setToReplaceLetter(toReplaceLetter);
    affine_alpha !== undefined && this.props.setAffineAlpha(affine_alpha);
    affine_beta !== undefined && this.props.setAffineBeta(affine_beta);

    this.props.togglePresetsModal();
  };

  handleSavePreset = () => {
    let presetSettings = {
      method: this.props.method !== undefined && this.props.method,
      input: this.props.input !== undefined && this.props.input,
      toReplaceLetter:
        this.props.toReplaceLetter !== undefined && this.props.toReplaceLetter,
      replaceLetter:
        this.props.replaceLetter !== undefined && this.props.replaceLetter,
      cShift: this.props.cShift !== undefined && this.props.cShift,
      direction: this.props.direction !== undefined && this.props.direction,
      includeChars:
        this.props.includeChars !== undefined && this.props.includeChars,
      caseformat: this.props.caseformat !== undefined && this.props.caseformat,
      alphabet: this.props.alphabet !== undefined && this.props.alphabet,
      prime1: this.props.prime1 !== undefined && this.props.prime1,
      prime2: this.props.prime2 !== undefined && this.props.prime2,
      keywordVigenere:
        this.props.keywordVigenere !== undefined && this.props.keywordVigenere,
      keywordPlayfair:
        this.props.keywordPlayfair !== undefined && this.props.keywordPlayfair,
      affine_alpha:
        this.props.affine_alpha !== undefined && this.propsaffine_alpha,
      affine_beta: this.props.affine_beta !== undefined && this.affine_beta,
      otpKey: this.props.otpKey !== undefined && this.otpKey,
      ringLength: this.props.ringLength !== undefined && this.ringLength,
    };
    this.props.addPreset({
      name: this.props.presetName,
      description: this.props.presetDescription,
      preset: {
        ...presetSettings,
      },
    });
    this.props.setPresetName('');
    this.props.setPresetDescription('');
    this.props.togglePresetsModal();
  };

  toggleModal = (e) => {
    if (e.target.className === 'modal-wrapper') {
      this.props.togglePresetsModal();
    }
  };

  getDeviceWidth = () => {
    let width = window.innerWidth;
    this.setState({
      width: width,
    });
  };

  componentDidMount() {
    this.getDeviceWidth();
  }

  render() {
    if (this.props.isAuthenticated && this.props.presetsModal) {
      return (
        <div className='modal-wrapper' onClick={(e) => this.toggleModal(e)}>
          <div className='modal'>
            {this.props.target === 'load' ? (
              <Fragment>
                <div className='modal__header modal__header--space-between'>
                  Load a Preset
                  <button className='modal__close-btn'>
                    <HighlightOffIcon onClick={this.props.togglePresetsModal} />
                  </button>
                </div>
                <div className='modal__body'>
                  <table className='modal__preset-table'>
                    <tbody>
                      <tr>
                        {this.state.width <= 700 ? null : (
                          <th className='modal__preset-table-head'>Date</th>
                        )}
                        <th className='modal__preset-table-head'>
                          Preset Name
                        </th>
                        <th className='modal__preset-table-head'>Method</th>
                        {this.state.width <= 700 ? null : (
                          <th className='modal__preset-table-head'>
                            Description
                          </th>
                        )}
                        <th className='modal__preset-table-head modal__preset-table-head--center'>
                          Load
                        </th>
                        <th className='modal__preset-table-head modal__preset-table-head--center'>
                          Delete
                        </th>
                      </tr>
                      {this.genTable().map((row) => row)}
                    </tbody>
                  </table>
                </div>
                <div className='modal__bottom-wrapper modal__bottom-wrapper--no-border-top'>
                  <button
                    className='modal__close modal__close--right'
                    onClick={this.props.togglePresetsModal}
                  >
                    Close
                  </button>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className='modal__header modal__header--space-between'>
                  Save as Preset
                  <button className='modal__close-btn'>
                    <HighlightOffIcon onClick={this.props.togglePresetsModal} />
                  </button>
                </div>
                <div className='modal__body'>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      this.handleSavePreset(e);
                    }}
                  >
                    <table className='modal__preset-table'>
                      <tbody>
                        <tr>
                          <th className='modal__preset-table-head'>
                            Preset Name
                          </th>
                          <th className='modal__preset-table-head'>
                            Description
                          </th>
                          <th className='modal__preset-table-head modal__preset-table-head--center'>
                            Save
                          </th>
                        </tr>
                        <tr>
                          <td className='modal__presets-table-cell'>
                            <input
                              className='modal__preset-table-input'
                              required
                              value={this.props.presetName}
                              onChange={(e) =>
                                this.props.setPresetName(e.target.value)
                              }
                              type='text'
                              name='name'
                              placeholder='Preset Name'
                            />
                          </td>
                          <td className='modal__presets-table-cell'>
                            <input
                              className='modal__preset-table-input'
                              required
                              value={this.props.presetDescription}
                              onChange={(e) =>
                                this.props.setPresetDescription(e.target.value)
                              }
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
                    onClick={this.props.togglePresetsModal}
                  >
                    Close
                  </button>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      );
    } else if (this.props.presetsModal) {
      return (
        <div className='modal-wrapper' onClick={(e) => this.toggleModal(e)}>
          <div className='modal'>
            <div className='modal__header modal__header--space-between'>
              {this.props.target === 'load' ? 'Load a Preset' : 'Save a Preset'}
              <button className='modal__close-btn'>
                <HighlightOffIcon onClick={this.props.togglePresetsModal} />
              </button>
            </div>
            <div className='modal__content modal__content--message'>
              <SentimentVeryDissatisfiedIcon style={{ fontSize: '12rem' }} />
              <h2 className='modal__message'>
                Please Login or Signup to use this feature!
              </h2>
            </div>
            <div className='modal__bottom-wrapper modal__bottom-wrapper--split-buttons'>
              <Link
                className='modal__link'
                onClick={this.props.togglePresetsModal}
                to='/Login'
              >
                Login
              </Link>
              <Link
                className='modal__link'
                onClick={this.props.togglePresetsModal}
                to='/Signup'
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

const mapStateToProps = (state) => ({
  presetsModal: state.presetsModal.modalOpen,
  target: state.presetsModal.target,
  presets: state.presets,
  presetDescription: state.presetDescription,
  presetName: state.presetName,
  toReplaceLetter: state.replace.toReplaceLetter,
  replaceLetter: state.replace.replaceLetter,
  cShift: state.cShift,
  direction: state.direction,
  input: state.input,
  method: state.method,
  includeChars: state.includeChars,
  caseformat: state.caseformat,
  alphabet: state.alphabet.alphabet,
  output: state.output,
  prime1: state.rsa.prime1,
  prime2: state.rsa.prime2,
  keywordVigenere: state.keywordVigenere,
  keywordPlayfair: state.keywordPlayfair,
  affine_alpha: state.affine.affine_alpha,
  affine_beta: state.affine.affine_beta,
  otpKey: state.otpKey,
  playSquare: state.playSquare,
  ringLength: state.skytale.ringLength,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapActionsToProps = {
  togglePresetsModal,
  loadPresets,
  addPreset,
  setCshift,
  updateInput,
  toggleCase,
  toggleChars,
  updateAlphabet,
  changeMethod,
  toggleDirection,
  setPrime1,
  setPrime2,
  setRsaE,
  setKeywordVigenere,
  setKeywordPlayfair,
  setOtpKey,
  setRinglength,
  setPresetDescription,
  setPresetName,
  setToReplaceLetter: toReplaceLetter,
  setReplaceLetter: replaceLetter,
  setAffineAlpha,
  setAffineBeta,
  deletePreset,
};

PresetsModal.propTypes = {
  presets: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(PresetsModal);
