import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ChartImporter from '../freqencyAnalysis/ChartImporter';
import IndexOfCoincidence from '../indexOfCoincidence/IndexOfCoincidence';
import ChiSquared from '../chi_squared/chisquared';

const AnalysisMethods = (props) => {
  const icMenue =
    props.menue === 'output' && props.ic_output ? (
      <div className='chartcontainer' style={{ width: '100%' }}>
        <IndexOfCoincidence menue={props.menue} ioc={props.iocInput} />
      </div>
    ) : props.menue === 'input' && props.ic_input ? (
      <div className='chartcontainer' style={{ width: '100%' }}>
        <IndexOfCoincidence menue={props.menue} ioc={props.iocInput} />
      </div>
    ) : null;
  const fqMenue =
    props.menue === 'output' && props.fq_output ? (
      <div
        className='chartcontainer'
        style={{ width: '100%', borderTop: 'none' }}
      >
        <div className='clickSurface'>
          <ChartImporter menue={props.menue} inputValue={props.input} />
        </div>
      </div>
    ) : props.menue === 'input' && props.fq_input ? (
      <div
        className='chartcontainer'
        style={{ width: '100%', borderTop: 'none' }}
      >
        <div className='clickSurface'>
          <ChartImporter menue={props.menue} inputValue={props.input} />
        </div>
      </div>
    ) : null;
  const chiMenue =
    props.menue === 'output' && props.chi_output ? (
      <div className='chartcontainer' style={{ width: '100%' }}>
        <ChiSquared menue={props.menue} />
      </div>
    ) : props.menue === 'input' && props.chi_input ? (
      <div className='chartcontainer' style={{ width: '100%' }}>
        <ChiSquared menue={props.menue} />
      </div>
    ) : null;
  return (
    <Fragment>
      {fqMenue}
      {icMenue}
      {chiMenue}
    </Fragment>
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
