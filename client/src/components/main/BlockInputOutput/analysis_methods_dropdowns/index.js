import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Components
import FrequencyAnalysis from './freqencyAnalysis';
import IndexOfCoincidence from './indexOfCoincidence';
import ChiSquared from './chi-squared';

const AnalysisMethods = (props) => {
  /**
   * ic_output: index-of-coincidence visible in output block?
   * ic_input: index-of-coincidence visible in input block?
   */
  const indexOfCoincidenceMenue =
    props.menue === 'output' && props.ic_output ? (
      <div className='analysis__dropdown'>
        <IndexOfCoincidence menue={props.menue} />
      </div>
    ) : props.menue === 'input' && props.ic_input ? (
      <div className='analysis__dropdown'>
        <IndexOfCoincidence menue={props.menue} />
      </div>
    ) : null;

  /**
   * fq_output: frequency-analysis visible in output block?
   * fq_input: frequency-analysis visible in input block?
   */
  const frequencyAnalysisMenue =
    props.menue === 'output' && props.fq_output ? (
      <div className='analysis__dropdown'>
        <FrequencyAnalysis menue={props.menue} inputValue={props.output} />
      </div>
    ) : props.menue === 'input' && props.fq_input ? (
      <div className='analysis__dropdown'>
        <FrequencyAnalysis menue={props.menue} inputValue={props.input} />
      </div>
    ) : null;

  /**
   * chi_output: chi-squared-analysis visible in output block?
   * chi_input: chi-squared-analysis visible in input block?
   */
  const chiSquaredMenue =
    props.menue === 'output' && props.chi_output ? (
      <div className='analysis__dropdown'>
        <ChiSquared menue={props.menue} />
      </div>
    ) : props.menue === 'input' && props.chi_input ? (
      <div className='analysis__dropdown'>
        <ChiSquared menue={props.menue} />
      </div>
    ) : null;

  return (
    <div className='analysis'>
      {frequencyAnalysisMenue}
      {indexOfCoincidenceMenue}
      {chiSquaredMenue}
    </div>
  );
};

const mapStateToProps = (state) => ({
  ic_input: state.analysisMethod.ic_input,
  ic_output: state.analysisMethod.ic_output,
  fq_input: state.analysisMethod.fq_input,
  fq_output: state.analysisMethod.fq_output,
  chi_input: state.analysisMethod.chi_input,
  chi_output: state.analysisMethod.chi_output,
});

AnalysisMethods.propTypes = {
  ic_input: PropTypes.bool.isRequired,
  ic_output: PropTypes.bool.isRequired,
  fq_input: PropTypes.bool.isRequired,
  fq_output: PropTypes.bool.isRequired,
  chi_input: PropTypes.bool.isRequired,
  chi_output: PropTypes.bool.isRequired,
  menue: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(AnalysisMethods);
