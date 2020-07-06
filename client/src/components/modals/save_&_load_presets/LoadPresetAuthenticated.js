import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deletePreset } from '../../../actions/presets';
import { toggleLoadPresetModal } from '../../../actions/toggleLoadPresetModal';

import { setCshift } from '../../../actions/setCShift';
import { updateInput } from '../../../actions/updateInput';
import toggleForeignChars from '../../../actions/toggleForeignChars';
import toggleCase from '../../../actions/toggleCase';
import { updateAlphabet } from '../../../actions/alphabet';
import { changeMethod } from '../../../actions/changeMethod';
import { toggleDirection } from '../../../actions/toggleDirection';
import { setPrime1, setPrime2, setRsaE } from '../../../actions/rsa';
import setKeywordVigenere from '../../../actions/setKeywordVigenere';
import { setKeywordPlayfair } from '../../../actions/playfair';
import setOtpKey from '../../../actions/setOtpKey';
import { setRinglength } from '../../../actions/skytale';
import { toReplaceLetter, replaceLetter } from '../../../actions/replace';
import { setAffineAlpha, setAffineBeta } from '../../../actions/affine';
import setSubstitutionAlphabet from '../../../actions/setSubstitutionAlphabet';
import {
  setKeywordNihilist,
  setCipherNihilist,
} from '../../../actions/nihilist';
import {
  setTrifidGroupSize,
  setTrifidKey,
  setTrifid27thLetter,
} from '../../../actions/trifid';
import { setCaseTransformChoice } from '../../../actions/setCaseTransformChoice';
import { EncryptionMethodsDetails } from '../../main/BlockCenter/EncryptionMethodsDetails';

//MUI
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const LoadPresetAuthenticated = (props) => {
  const [width, updateWidth] = useState(0);

  const getDeviceWidth = () => {
    const width = window.innerWidth;
    return width;
  };

  useEffect(() => {
    const handleResize = () => {
      updateWidth(getDeviceWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoadPreset = (id) => {
    let selected;
    for (const preset of props.presets) {
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
      keywordNihilist,
      cipherNihilist,
      substitutionAlphabet,
      trifidKey,
      trifid27thLetter,
      trifidGroupSize,
      caseTransformChoice,
    } = selected.preset;

    props.changeMethod(method);
    props.updateInput(input);
    props.updateAlphabet(alphabet);
    method === 'caesar' && props.setCshift(cShift);
    props.toggleDirection(direction);
    props.toggleCase(caseFormat || 'maintain');
    props.toggleForeignChars(foreignChars || 'include');

    method === 'rsa' && props.setPrime1(prime1);
    method === 'rsa' && props.setPrime2(prime2);
    method === 'rsa' && props.setRsaE(RsaE);

    method === 'casetransform' &&
      props.setCaseTransformChoice(caseTransformChoice);

    method === 'vigenere' && props.setKeywordVigenere(keywordVigenere);

    method === 'playfair' && props.setKeywordPlayfair(keywordPlayfair);

    method === 'otp' && props.setOtpKey(otpKey);

    method === 'skytale' && props.setRinglength(ringLength);

    method === 'replace' && props.setReplaceLetter(replaceLetter);
    method === 'replace' && props.setToReplaceLetter(toReplaceLetter);

    method === 'affine' && props.setAffineAlpha(affine_alpha);
    method === 'affine' && props.setAffineBeta(affine_beta);

    method === 'nihilist' && props.setKeywordNihilist(keywordNihilist);
    method === 'nihilist' && props.setCipherNihilist(cipherNihilist);

    method === 'substitution' &&
      props.setSubstitutionAlphabet(substitutionAlphabet);

    method === 'trifid' && props.setTrifid27thLetter(trifid27thLetter);

    method === 'trifid' && props.setTrifidGroupSize(trifidGroupSize);

    method === 'trifid' && props.setTrifidKey(trifidKey);

    props.toggleLoadPresetModal();
  };

  const genTable = () => {
    let presetTable = [];
    for (let preset of props.presets) {
      let method = preset.preset.method;
      presetTable.push(
        <tr key={preset._id}>
          {width >= 700
            ? preset.date !== undefined && (
                <td className='modal__presets-table-cell'>{preset.date}</td>
              )
            : null}
          <td className='modal__presets-table-cell'>{preset.name}</td>
          <td className='modal__presets-table-cell'>
            {EncryptionMethodsDetails[method].display}
          </td>
          {width >= 700 ? (
            <td className='modal__presets-table-cell'>{preset.description}</td>
          ) : null}
          <td
            id={preset._id}
            onClick={(e) => handleLoadPreset(preset._id)}
            className='modal__presets-table-cell modal__presets-table-cell--btn-blue'
          >
            <GetAppIcon />
          </td>
          <td
            onClick={(e) => props.deletePreset(preset._id)}
            className='modal__presets-table-cell modal__presets-table-cell--btn-red'
          >
            <DeleteForeverIcon />
          </td>
        </tr>
      );
    }
    return presetTable;
  };

  return (
    <Fragment>
      <div className='modal__header modal__header--space-between'>
        Load a Preset
        <button className='modal__close-btn'>
          <HighlightOffIcon onClick={() => props.toggleLoadPresetModal()} />
        </button>
      </div>
      <div className='modal__body'>
        <table className='modal__preset-table'>
          <tbody>
            <tr>
              {width <= 700 ? null : (
                <th className='modal__preset-table-head'>Date</th>
              )}
              <th className='modal__preset-table-head'>Preset Name</th>
              <th className='modal__preset-table-head'>Method</th>
              {width <= 700 ? null : (
                <th className='modal__preset-table-head'>Description</th>
              )}
              <th className='modal__preset-table-head modal__preset-table-head--center'>
                Load
              </th>
              <th className='modal__preset-table-head modal__preset-table-head--center'>
                Delete
              </th>
            </tr>
            {genTable().map((row) => row)}
          </tbody>
        </table>
      </div>
      <div className='modal__bottom-wrapper modal__bottom-wrapper--no-border-top'>
        <button
          className='modal__close modal__close--right'
          onClick={() => props.toggleLoadPresetModal()}
        >
          Close
        </button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  presets: state.presets,
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
  deletePreset,
  toggleLoadPresetModal,
  setCshift,
  updateInput,
  toggleCase,
  toggleForeignChars,
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
  setToReplaceLetter: toReplaceLetter,
  setReplaceLetter: replaceLetter,
  setAffineAlpha,
  setAffineBeta,
  setCipherNihilist,
  setKeywordNihilist,
  setSubstitutionAlphabet,
  setTrifidGroupSize,
  setTrifidKey,
  setTrifid27thLetter,
  setCaseTransformChoice,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LoadPresetAuthenticated);
