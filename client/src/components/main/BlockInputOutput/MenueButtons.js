import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Actions
import { togglePresetsModal } from '../../../actions/togglePresetsModal';
import { toggleDirection } from '../../../actions/toggleDirection';
import { updateInput } from '../../../actions/updateInput';
import { toggleAnalysisModal } from '../../../actions/toggleAnalysisModal';

//Components
import SwapInputsTooltip from './Tooltips/SwapInputsTooltip';
import LoadPresetTooltip from './Tooltips/LoadPresetTooltip';
import SavePresetTooltip from './Tooltips/SavePresetTooltip';
import AddAnalysisMethodTooltip from './Tooltips/AddAnalysisMethodTooltip';

const MenueButtons = ({
  togglePresetsModal,
  toggleDirection,
  output,
  direction,
  updateInput,
  toggleAnalysisModal,
}) => {
  /**
   * Puts the encrypted output into the input field
   * and toggles the direction so the encrypted input
   * gets decrypted.
   */
  const swapInputOutput = () => {
    const newDirection =
      direction === 'encrypt'
        ? 'decrypt'
        : direction === 'crack'
        ? 'crack'
        : 'encrypt';
    updateInput(output);
    toggleDirection(newDirection);
  };

  return (
    <Fragment>
      <button
        className='block__head-button'
        onClick={() => {
          swapInputOutput();
        }}
      >
        <SwapInputsTooltip />
      </button>
      <button
        className='block__head-button'
        onClick={() => {
          togglePresetsModal('load');
        }}
      >
        <LoadPresetTooltip />
      </button>
      <button
        className='block__head-button'
        onClick={() => {
          togglePresetsModal('save');
        }}
      >
        <SavePresetTooltip />
      </button>
      <button
        className='block__head-button'
        onClick={() => {
          toggleAnalysisModal();
        }}
      >
        <AddAnalysisMethodTooltip />
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

MenueButtons.propTypes = {
  output: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  togglePresetsModal: PropTypes.func.isRequired,
  toggleDirection: PropTypes.func.isRequired,
  toggleAnalysisModal: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(MenueButtons);
