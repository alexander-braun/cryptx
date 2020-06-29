import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { togglePresetsModal } from '../../../actions/togglePresetsModal';
import { toggleDirection } from '../../../actions/toggleDirection';
import { updateInput } from '../../../actions/updateInput';
import { toggleAnalysisModal } from '../../../actions/toggleAnalysisModal';
import IcTooltipSwapInput from './IcTooltipSwapInputs';
import IcTooltipLoadPreset from './IcTooltipLoadPreset';
import IcTooltipSavePreset from './IcTooltipSavePreset';
import IcTooltipAddAnalysisMethod from './IcTooltipAddAnalysisMethod';

const BlockheadButtons = ({
  togglePresetsModal,
  toggleDirection,
  input,
  output,
  direction,
  updateInput,
  toggleAnalysisModal,
}) => {
  const swapInputOutput = () => {
    updateInput(output);
    const newDirection =
      direction === 'encrypt'
        ? 'decrypt'
        : direction === 'crack'
        ? 'crack'
        : 'encrypt';
    toggleDirection(newDirection);
  };
  return (
    <Fragment>
      <button
        onClick={(e) => {
          e.preventDefault();
          swapInputOutput();
        }}
        style={{
          marginLeft: 'auto',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <IcTooltipSwapInput />
      </button>
      <button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={(e) => {
          e.preventDefault();
          togglePresetsModal('load');
        }}
      >
        <IcTooltipLoadPreset />
      </button>
      <button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={(e) => {
          e.preventDefault();
          togglePresetsModal('save');
        }}
      >
        <IcTooltipSavePreset />
      </button>
      <button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={(e) => {
          e.preventDefault();
          toggleAnalysisModal();
        }}
      >
        <IcTooltipAddAnalysisMethod />
      </button>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  output: state.output,
  direction: state.direction,
});

const mapActionsToProps = {
  togglePresetsModal: togglePresetsModal,
  toggleDirection: toggleDirection,
  toggleAnalysisModal: toggleAnalysisModal,
  updateInput: updateInput,
};

export default connect(mapStateToProps, mapActionsToProps)(BlockheadButtons);
