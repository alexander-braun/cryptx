import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ChartImporter from './freqencyAnalysis/ChartImporter';
import IndexOfCoincidence from './indexOfCoincidence/IndexOfCoincidence';
import ChiSquared from './chi_squared/ChiSquared';

const AnalysisMethods = (props) => {
  /**
   * Input and Output component each send ioc-input /ioc-output
   * data through props.
   *
   * Every analysis method in both input/output has a boolean value
   * for whether it is visible or not. Those are f.e. ic_output, fq_output etc.
   * This should be renamed for clarity, it's hard to differentiate
   * between iocOutput and ic_output :/
   *
   * Also importing the iocOutput/iocInput value directly in IndexOfCoincidence.js
   * would be smart.
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
   * Same problem here. Importing inputs and outputs directly in the file
   * would be smarter.
   */
  const frequencyAnalysisMenue =
    props.menue === 'output' && props.fq_output ? (
      <div className='analysis__dropdown'>
        <ChartImporter menue={props.menue} inputValue={props.output} />
      </div>
    ) : props.menue === 'input' && props.fq_input ? (
      <div className='analysis__dropdown'>
        <ChartImporter menue={props.menue} inputValue={props.input} />
      </div>
    ) : null;

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

export default connect(mapStateToProps)(AnalysisMethods);
